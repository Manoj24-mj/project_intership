import React from 'react';
import { useTourism } from '../context/TourismContext';
import { X, Trash2, Printer, MapPin, Compass, ArrowRight, BookmarkCheck } from 'lucide-react';

interface SavedPlacesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SavedPlacesDrawer: React.FC<SavedPlacesDrawerProps> = ({ isOpen, onClose }) => {
  const { destinations, savedPlaceIds, toggleSavePlace, setSelectedPlace } = useTourism();

  if (!isOpen) return null;

  const savedPlaces = destinations.filter((d) => savedPlaceIds.includes(d.id));

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end animate-fade-in">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between">
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 bg-[#faf8f5] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookmarkCheck className="w-5 h-5 text-amber-800" />
            <div>
              <h3 className="font-bold font-serif-heading text-slate-900 text-base">
                My Travel Itinerary
              </h3>
              <p className="text-[11px] text-slate-500">
                {savedPlaces.length} {savedPlaces.length === 1 ? 'place' : 'places'} shortlisted
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            {savedPlaces.length > 0 && (
              <button
                onClick={handlePrint}
                className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg text-xs flex items-center gap-1"
                title="Print Itinerary"
              >
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">Print</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Drawer Body */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-5 space-y-3">
          {savedPlaces.length === 0 ? (
            <div className="text-center py-16 text-slate-500">
              <Compass className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <p className="font-medium text-slate-700 text-sm">Your travel bucket list is empty</p>
              <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                Explore destinations and tap the bookmark icon on any card to curate your personal India journey.
              </p>
            </div>
          ) : (
            savedPlaces.map((place) => (
              <div
                key={place.id}
                onClick={() => {
                  setSelectedPlace(place);
                  onClose();
                }}
                className="group p-3 bg-slate-50 hover:bg-amber-50/50 rounded-xl border border-slate-200/80 transition-all cursor-pointer flex gap-3 items-center justify-between"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={place.images[0]}
                    alt=""
                    className="w-14 h-14 rounded-lg object-cover shrink-0"
                  />
                  <div className="min-w-0">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm group-hover:text-amber-900 truncate">
                      {place.name}
                    </h4>
                    <div className="flex items-center gap-1 text-[11px] text-slate-500 mt-0.5">
                      <MapPin className="w-3 h-3 text-amber-700 shrink-0" />
                      <span className="truncate">{place.city}, {place.state}</span>
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5 font-mono">
                      Best: {place.bestTimeToVisit.season}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSavePlace(place.id);
                  }}
                  className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-white rounded-lg transition-colors shrink-0"
                  title="Remove from saved list"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {savedPlaces.length > 0 && (
          <div className="p-4 border-t border-slate-100 bg-[#faf8f5] space-y-2 text-xs">
            <div className="flex justify-between text-slate-600">
              <span>Covered States:</span>
              <span className="font-semibold text-slate-800">
                {Array.from(new Set(savedPlaces.map((p) => p.state))).length} states
              </span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Suggested Trip Scope:</span>
              <span className="font-semibold text-slate-800 font-mono">
                {savedPlaces.length * 2} - {savedPlaces.length * 3} Days
              </span>
            </div>
            <button
              onClick={handlePrint}
              className="w-full mt-2 py-2 bg-amber-800 hover:bg-amber-900 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Travel Route Summary</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
