import React, { createContext, useContext, useState, useEffect } from 'react';
import { TouristPlace, Category, Zone, ActiveTab } from '../types';
import { INITIAL_DESTINATIONS } from '../data/destinations';
import { STATES_DATA } from '../data/statesData';

interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'error';
  message: string;
}

interface TourismContextType {
  destinations: TouristPlace[];
  savedPlaceIds: string[];
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  selectedPlace: TouristPlace | null;
  setSelectedPlace: (place: TouristPlace | null) => void;
  
  // Filters
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedState: string;
  setSelectedState: (state: string) => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  selectedCategory: Category | 'All';
  setSelectedCategory: (cat: Category | 'All') => void;
  selectedZone: Zone | 'All';
  setSelectedZone: (zone: Zone | 'All') => void;
  onlyOffbeat: boolean;
  setOnlyOffbeat: (val: boolean) => void;
  onlyUnesco: boolean;
  setOnlyUnesco: (val: boolean) => void;
  resetFilters: () => void;
  
  // Actions
  toggleSavePlace: (id: string) => void;
  isSaved: (id: string) => boolean;
  
  // Admin actions
  addDestination: (place: Omit<TouristPlace, 'id'>) => void;
  updateDestination: (place: TouristPlace) => void;
  deleteDestination: (id: string) => void;
  toggleVerifyDestination: (id: string) => void;
  resetToDefaults: () => void;
  exportDataAsJSON: () => void;
  
  // Stats
  totalStates: number;
  totalPlaces: number;
  totalOffbeat: number;
  totalUnesco: number;
  
  // Notification toasts
  toasts: ToastMessage[];
  dismissToast: (id: string) => void;
  showToast: (message: string, type?: 'success' | 'info' | 'error') => void;
}

const STORAGE_KEY_DESTINATIONS = 'travelbharat_destinations_v1';
const STORAGE_KEY_SAVED = 'travelbharat_saved_places_v1';

const TourismContext = createContext<TourismContextType | undefined>(undefined);

export const TourismProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [destinations, setDestinations] = useState<TouristPlace[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_DESTINATIONS);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // fallback
    }
    return INITIAL_DESTINATIONS;
  });

  const [savedPlaceIds, setSavedPlaceIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_SAVED);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // fallback
    }
    return [];
  });

  const [activeTab, setActiveTab] = useState<ActiveTab>('explore');
  const [selectedPlace, setSelectedPlace] = useState<TouristPlace | null>(null);

  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [selectedZone, setSelectedZone] = useState<Zone | 'All'>('All');
  const [onlyOffbeat, setOnlyOffbeat] = useState(false);
  const [onlyUnesco, setOnlyUnesco] = useState(false);

  // Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Date.now().toString() + Math.random().toString().slice(2, 6);
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => {
      dismissToast(id);
    }, 3800);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_DESTINATIONS, JSON.stringify(destinations));
    } catch {
      // storage limit ignore
    }
  }, [destinations]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_SAVED, JSON.stringify(savedPlaceIds));
    } catch {
      // storage limit ignore
    }
  }, [savedPlaceIds]);

  const toggleSavePlace = (id: string) => {
    setSavedPlaceIds((prev) => {
      const exists = prev.includes(id);
      if (exists) {
        showToast('Removed from your saved travel bucket list', 'info');
        return prev.filter((item) => item !== id);
      } else {
        const place = destinations.find((d) => d.id === id);
        showToast(`Saved ${place?.name || 'place'} to your itinerary!`, 'success');
        return [...prev, id];
      }
    });
  };

  const isSaved = (id: string) => savedPlaceIds.includes(id);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedState('');
    setSelectedCity('');
    setSelectedCategory('All');
    setSelectedZone('All');
    setOnlyOffbeat(false);
    setOnlyUnesco(false);
  };

  // Admin Actions
  const addDestination = (newPlaceData: Omit<TouristPlace, 'id'>) => {
    const id = newPlaceData.name.toLowerCase().replace(/[^a-z0-9]/g, '-') + '-' + Date.now().toString().slice(-4);
    const newPlace: TouristPlace = {
      ...newPlaceData,
      id
    };
    setDestinations((prev) => [newPlace, ...prev]);
    showToast(`Successfully added "${newPlace.name}" to TravelBharat database!`, 'success');
  };

  const updateDestination = (updatedPlace: TouristPlace) => {
    setDestinations((prev) =>
      prev.map((item) => (item.id === updatedPlace.id ? updatedPlace : item))
    );
    if (selectedPlace?.id === updatedPlace.id) {
      setSelectedPlace(updatedPlace);
    }
    showToast(`Updated details for "${updatedPlace.name}"`, 'success');
  };

  const deleteDestination = (id: string) => {
    const place = destinations.find((d) => d.id === id);
    setDestinations((prev) => prev.filter((item) => item.id !== id));
    setSavedPlaceIds((prev) => prev.filter((savedId) => savedId !== id));
    if (selectedPlace?.id === id) {
      setSelectedPlace(null);
    }
    showToast(`Deleted "${place?.name || 'destination'}"`, 'info');
  };

  const toggleVerifyDestination = (id: string) => {
    setDestinations((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const updated = !item.verified;
          showToast(
            `Marked "${item.name}" as ${updated ? 'Verified Tourism Factsheet' : 'Pending Verification'}`,
            'info'
          );
          return { ...item, verified: updated };
        }
        return item;
      })
    );
  };

  const resetToDefaults = () => {
    setDestinations(INITIAL_DESTINATIONS);
    localStorage.removeItem(STORAGE_KEY_DESTINATIONS);
    showToast('Reset destination catalog to default verified database', 'info');
  };

  const exportDataAsJSON = () => {
    try {
      const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(destinations, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute('href', dataStr);
      downloadAnchor.setAttribute('download', `TravelBharat_Tourism_Catalog_${new Date().toISOString().split('T')[0]}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      showToast('Exported entire tourism catalog as JSON file', 'success');
    } catch {
      showToast('Failed to export data', 'error');
    }
  };

  const totalStates = STATES_DATA.length;
  const totalPlaces = destinations.length;
  const totalOffbeat = destinations.filter((d) => d.isOffbeat).length;
  const totalUnesco = destinations.filter((d) => d.unescoSite).length;

  return (
    <TourismContext.Provider
      value={{
        destinations,
        savedPlaceIds,
        activeTab,
        setActiveTab,
        selectedPlace,
        setSelectedPlace,
        searchQuery,
        setSearchQuery,
        selectedState,
        setSelectedState,
        selectedCity,
        setSelectedCity,
        selectedCategory,
        setSelectedCategory,
        selectedZone,
        setSelectedZone,
        onlyOffbeat,
        setOnlyOffbeat,
        onlyUnesco,
        setOnlyUnesco,
        resetFilters,
        toggleSavePlace,
        isSaved,
        addDestination,
        updateDestination,
        deleteDestination,
        toggleVerifyDestination,
        resetToDefaults,
        exportDataAsJSON,
        totalStates,
        totalPlaces,
        totalOffbeat,
        totalUnesco,
        toasts,
        dismissToast,
        showToast
      }}
    >
      {children}
    </TourismContext.Provider>
  );
};

export const useTourism = () => {
  const context = useContext(TourismContext);
  if (!context) {
    throw new Error('useTourism must be used within a TourismProvider');
  }
  return context;
};
