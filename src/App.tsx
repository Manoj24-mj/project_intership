/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { TourismProvider, useTourism } from './context/TourismContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DestinationCard } from './components/DestinationCard';
import { DestinationDetailModal } from './components/DestinationDetailModal';
import { StateExplorer } from './components/StateExplorer';
import { HiddenGems } from './components/HiddenGems';
import { TourismAnalytics } from './components/TourismAnalytics';
import { StudentResearchHub } from './components/StudentResearchHub';
import { AdminPanel } from './components/AdminPanel';
import { TechnicalDocsModal } from './components/TechnicalDocsModal';
import { SavedPlacesDrawer } from './components/SavedPlacesDrawer';
import { ToastContainer } from './components/ToastContainer';
import { Footer } from './components/Footer';
import { STATES_DATA } from './data/statesData';
import {
  Compass,
  Filter,
  X,
  ArrowUpDown,
  Sparkles,
  MapPin,
  CheckCircle2,
  SlidersHorizontal
} from 'lucide-react';

const MainContent: React.FC = () => {
  const {
    destinations,
    activeTab,
    selectedPlace,
    setSelectedPlace,
    searchQuery,
    selectedState,
    setSelectedState,
    selectedCity,
    setSelectedCity,
    selectedCategory,
    selectedZone,
    onlyOffbeat,
    onlyUnesco,
    resetFilters
  } = useTourism();

  const [savedDrawerOpen, setSavedDrawerOpen] = useState(false);
  const [sortBy, setSortBy] = useState<'name' | 'state' | 'unesco'>('unesco');

  // Available cities based on selected state
  const availableCities = useMemo(() => {
    const list = destinations
      .filter((d) => (!selectedState ? true : d.state === selectedState))
      .map((d) => d.city);
    return Array.from(new Set(list)).sort();
  }, [destinations, selectedState]);

  // Filtered & Sorted Destinations
  const filteredDestinations = useMemo(() => {
    return destinations
      .filter((place) => {
        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matches =
            place.name.toLowerCase().includes(q) ||
            (place.hindiName && place.hindiName.toLowerCase().includes(q)) ||
            place.state.toLowerCase().includes(q) ||
            place.city.toLowerCase().includes(q) ||
            place.category.toLowerCase().includes(q) ||
            place.highlights.some((h) => h.toLowerCase().includes(q)) ||
            place.description.toLowerCase().includes(q);
          if (!matches) return false;
        }

        // State filter
        if (selectedState && place.state !== selectedState) return false;

        // City filter
        if (selectedCity && place.city !== selectedCity) return false;

        // Zone filter
        if (selectedZone !== 'All' && place.zone !== selectedZone) return false;

        // Category filter
        if (selectedCategory !== 'All' && place.category !== selectedCategory) return false;

        // Offbeat toggle
        if (onlyOffbeat && !place.isOffbeat) return false;

        // UNESCO toggle
        if (onlyUnesco && !place.unescoSite) return false;

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        }
        if (sortBy === 'state') {
          return a.state.localeCompare(b.state) || a.city.localeCompare(b.city);
        }
        if (sortBy === 'unesco') {
          if (a.unescoSite && !b.unescoSite) return -1;
          if (!a.unescoSite && b.unescoSite) return 1;
          return a.name.localeCompare(b.name);
        }
        return 0;
      });
  }, [
    destinations,
    searchQuery,
    selectedState,
    selectedCity,
    selectedZone,
    selectedCategory,
    onlyOffbeat,
    onlyUnesco,
    sortBy
  ]);

  const hasActiveFilters =
    Boolean(selectedState) ||
    Boolean(selectedCity) ||
    selectedZone !== 'All' ||
    selectedCategory !== 'All' ||
    onlyOffbeat ||
    onlyUnesco ||
    Boolean(searchQuery);

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f6] text-slate-800">
      <Header
        onOpenSavedDrawer={() => setSavedDrawerOpen(true)}
      />

      <main className="flex-1">
        {/* Tab 1: Explore Destinations */}
        {activeTab === 'explore' && (
          <div>
            <Hero />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
              {/* Secondary Filter Bar & Quick Counts */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200">
                {/* Active Filter Indicators */}
                <div className="flex items-center gap-2 flex-wrap text-xs">
                  <span className="font-semibold text-slate-700">
                    Showing <strong className="text-amber-900 font-mono text-sm">{filteredDestinations.length}</strong> of{' '}
                    <span className="font-mono">{destinations.length}</span> destinations
                  </span>

                  {selectedState && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-amber-100 text-amber-900 font-medium">
                      <span>State: {selectedState}</span>
                      <button
                        onClick={() => {
                          setSelectedState('');
                          setSelectedCity('');
                        }}
                        className="hover:text-amber-950 p-0.5"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}

                  {selectedCity && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-amber-100 text-amber-900 font-medium">
                      <span>City: {selectedCity}</span>
                      <button onClick={() => setSelectedCity('')} className="hover:text-amber-950 p-0.5">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}

                  {hasActiveFilters && (
                    <button
                      onClick={resetFilters}
                      className="text-amber-800 hover:text-amber-950 font-semibold hover:underline ml-2"
                    >
                      Clear All
                    </button>
                  )}
                </div>

                {/* State, City & Sorting Selectors */}
                <div className="flex items-center gap-2.5 flex-wrap">
                  {/* State Select */}
                  <div className="relative">
                    <select
                      value={selectedState}
                      onChange={(e) => {
                        setSelectedState(e.target.value);
                        setSelectedCity('');
                      }}
                      className="text-xs py-1.5 pl-2.5 pr-7 bg-white border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-amber-700 shadow-2xs font-medium cursor-pointer"
                    >
                      <option value="">All Indian States</option>
                      {STATES_DATA.map((s) => (
                        <option key={s.name} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* City Select */}
                  {availableCities.length > 0 && selectedState && (
                    <div className="relative">
                      <select
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        className="text-xs py-1.5 pl-2.5 pr-7 bg-white border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-amber-700 shadow-2xs font-medium cursor-pointer"
                      >
                        <option value="">All Cities in {selectedState}</option>
                        {availableCities.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Sort Dropdown */}
                  <div className="flex items-center gap-1 text-xs text-slate-600 bg-white border border-slate-200 rounded-lg px-2 py-1 shadow-2xs">
                    <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
                    <span className="hidden sm:inline">Sort:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="bg-transparent border-none text-slate-800 font-semibold focus:outline-none cursor-pointer"
                    >
                      <option value="unesco">UNESCO / Priority</option>
                      <option value="name">Name (A-Z)</option>
                      <option value="state">State &amp; City</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Destinations Grid */}
              {filteredDestinations.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                  {filteredDestinations.map((place) => (
                    <DestinationCard key={place.id} place={place} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-8 max-w-xl mx-auto">
                  <Compass className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <h3 className="text-lg font-bold font-serif-heading text-slate-900">
                    No destinations match your filters
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    We could not find any tourist places matching your current combination of keywords,
                    state, and category.
                  </p>
                  <button
                    onClick={resetFilters}
                    className="mt-5 px-4 py-2 bg-amber-800 hover:bg-amber-900 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
                  >
                    Reset All Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: State Directory */}
        {activeTab === 'states' && <StateExplorer />}

        {/* Tab 3: Hidden Gems */}
        {activeTab === 'hiddengems' && <HiddenGems />}

        {/* Tab 4: Tourism Statistics & Analytics */}
        {activeTab === 'analytics' && <TourismAnalytics />}

        {/* Tab 5: Student Research Hub */}
        {activeTab === 'research' && <StudentResearchHub />}

        {/* Tab 6: Technical PRD Documentation */}
        {activeTab === 'docs' && <TechnicalDocsModal />}

        {/* Tab 7: Admin Portal */}
        {activeTab === 'admin' && <AdminPanel />}
      </main>

      {/* Destination Detail Modal */}
      {selectedPlace && (
        <DestinationDetailModal
          place={selectedPlace}
          onClose={() => setSelectedPlace(null)}
        />
      )}

      {/* Saved Places / Itinerary Drawer */}
      <SavedPlacesDrawer
        isOpen={savedDrawerOpen}
        onClose={() => setSavedDrawerOpen(false)}
      />

      {/* Toast Feedback Notifications */}
      <ToastContainer />

      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <TourismProvider>
      <MainContent />
    </TourismProvider>
  );
}
