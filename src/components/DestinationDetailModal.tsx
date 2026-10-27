import React, { useState, useEffect } from 'react';
import { TouristPlace } from '../types';
import { useTourism } from '../context/TourismContext';
import {
  X,
  MapPin,
  Bookmark,
  Calendar,
  Clock,
  Ticket,
  Navigation,
  Compass,
  Utensils,
  Lightbulb,
  ExternalLink,
  ShieldCheck,
  Printer,
  ChevronLeft,
  ChevronRight,
  Share2,
  Image as ImageIcon
} from 'lucide-react';

interface DestinationDetailModalProps {
  place: TouristPlace;
  onClose: () => void;
}

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80';

export const DestinationDetailModal: React.FC<DestinationDetailModalProps> = ({ place, onClose }) => {
  const { isSaved, toggleSavePlace, showToast } = useTourism();
  const saved = isSaved(place.id);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeSection, setActiveSection] = useState<'overview' | 'logistics' | 'nearby' | 'culture'>('overview');
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const images = place.images && place.images.length > 0 ? place.images : [FALLBACK_IMAGE];

  // Keyboard navigation for gallery
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [images.length, onClose]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Link to destination copied to clipboard!', 'success');
    }
  };

  const handlePrintFactsheet = () => {
    window.print();
  };

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fade-in">
      <div
        className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 bg-[#faf8f5]">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="font-semibold text-amber-800">{place.state}</span>
            <span aria-hidden="true">·</span>
            <span>{place.city}</span>
            <span aria-hidden="true">·</span>
            <span>{place.category}</span>
            {place.verified && (
              <span className="inline-flex items-center gap-1 text-emerald-700 font-medium ml-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                Verified Factsheet
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleSavePlace(place.id)}
              className={`p-2 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
                saved
                  ? 'bg-amber-100 text-amber-900 font-semibold'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
              title={saved ? 'Remove from saved' : 'Save to my travel itinerary'}
            >
              <Bookmark className={`w-4 h-4 ${saved ? 'fill-amber-700 text-amber-700' : ''}`} />
              <span className="hidden sm:inline">{saved ? 'Saved' : 'Save'}</span>
            </button>

            <button
              onClick={handlePrintFactsheet}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors text-xs flex items-center gap-1"
              title="Print Factsheet for Student Projects & Travel"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print Factsheet</span>
            </button>

            <button
              onClick={handleShare}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              title="Share destination link"
            >
              <Share2 className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto flex-1 p-5 sm:p-7 space-y-7">
          {/* Hero Header & Gallery */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-slate-900">
                  {place.name}
                </h2>
                {place.hindiName && (
                  <p className="text-sm font-medium text-amber-800 font-serif-heading mt-0.5">
                    {place.hindiName}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <MapPin className="w-4 h-4 text-amber-700 shrink-0" />
                <span>{place.location.address}</span>
              </div>
            </div>

            {/* Gallery Main Display with Fallback & Keyboard Support */}
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-900 shadow-inner group">
              <img
                src={imageErrors[activeImageIndex] ? FALLBACK_IMAGE : images[activeImageIndex]}
                alt={`${place.name} photographic view ${activeImageIndex + 1} of ${images.length}`}
                onError={() => handleImageError(activeImageIndex)}
                className="w-full h-full object-cover transition-all duration-300"
                loading="eager"
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setActiveImageIndex((prev) =>
                        prev === 0 ? images.length - 1 : prev - 1
                      )
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-xs transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Previous photo (Left arrow key)"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setActiveImageIndex((prev) =>
                        prev === images.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-xs transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Next photo (Right arrow key)"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-black/60 text-white text-xs font-mono backdrop-blur-xs flex items-center gap-1.5">
                <ImageIcon className="w-3.5 h-3.5 text-amber-300" />
                <span>{activeImageIndex + 1} / {images.length}</span>
              </div>
            </div>

            {/* Thumbnail Row with Active Indicator & Lazy Loading */}
            {images.length > 1 && (
              <div className="flex items-center gap-2.5 mt-3 overflow-x-auto pb-2">
                {images.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all shrink-0 focus:outline-none ${
                      activeImageIndex === idx
                        ? 'border-amber-700 shadow-sm ring-2 ring-amber-700/30 scale-105'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                    aria-label={`Select photo ${idx + 1}`}
                  >
                    <img
                      src={imageErrors[idx] ? FALLBACK_IMAGE : imgUrl}
                      alt={`Thumbnail ${idx + 1}`}
                      onError={() => handleImageError(idx)}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Tab Segmented Control */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg text-xs font-medium">
            <button
              onClick={() => setActiveSection('overview')}
              className={`flex-1 py-2 rounded-md transition-colors ${
                activeSection === 'overview'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              1. Overview &amp; History
            </button>
            <button
              onClick={() => setActiveSection('logistics')}
              className={`flex-1 py-2 rounded-md transition-colors ${
                activeSection === 'logistics'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              2. Timings, Tickets &amp; Travel
            </button>
            <button
              onClick={() => setActiveSection('nearby')}
              className={`flex-1 py-2 rounded-md transition-colors ${
                activeSection === 'nearby'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              3. Nearby Attractions
            </button>
            <button
              onClick={() => setActiveSection('culture')}
              className={`flex-1 py-2 rounded-md transition-colors ${
                activeSection === 'culture'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              4. Cuisine &amp; Tips
            </button>
          </div>

          {/* Section 1: Overview & History */}
          {activeSection === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold font-serif-heading text-slate-900 mb-2">
                  Destination Overview
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {place.description}
                </p>
              </div>

              {place.historicalSignificance && (
                <div className="p-4 sm:p-5 bg-amber-50/60 rounded-xl border border-amber-900/10">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-amber-900 mb-2">
                    Historical &amp; Cultural Significance
                  </h4>
                  <p className="text-slate-800 text-sm leading-relaxed">
                    {place.historicalSignificance}
                  </p>
                </div>
              )}

              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-3">
                  Architectural &amp; Natural Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {place.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs text-slate-800 font-medium"
                    >
                      <span className="text-amber-700 font-bold mr-1">✦</span> {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Section 2: Logistics, Timings & Entry Ticket Table */}
          {activeSection === 'logistics' && (
            <div className="space-y-6">
              <div className="p-4 sm:p-5 bg-[#faf8f5] rounded-xl border border-amber-950/10">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-amber-800" />
                  <h4 className="text-sm font-bold text-slate-900 font-serif-heading">
                    Best Time to Visit: {place.bestTimeToVisit.season} ({place.bestTimeToVisit.months})
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                  {place.bestTimeToVisit.weatherDesc}
                </p>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-xs text-slate-500 font-medium mr-1">Peak Months:</span>
                  {place.bestTimeToVisit.peakMonths.map((m) => (
                    <span
                      key={m}
                      className="text-xs font-mono font-medium px-2 py-0.5 bg-amber-100/70 text-amber-900 rounded"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <div className="flex items-center gap-2 mb-2 text-slate-900">
                    <Clock className="w-4 h-4 text-amber-700" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Visiting Timings
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-slate-800">{place.timings}</p>
                  <p className="text-xs text-slate-500 mt-2">
                    Ideal Trip Duration: <strong className="text-slate-700">{place.idealTripDuration}</strong>
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <div className="flex items-center gap-2 mb-2 text-slate-900">
                    <Ticket className="w-4 h-4 text-amber-700" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Entry Fees &amp; Tickets
                    </span>
                  </div>
                  <div className="text-xs space-y-1">
                    <p className="text-slate-700">
                      <span className="font-semibold text-slate-900">Indian Nationals:</span> {place.entryFee.domestic}
                    </p>
                    <p className="text-slate-700">
                      <span className="font-semibold text-slate-900">Foreign Visitors:</span> {place.entryFee.foreign}
                    </p>
                    {place.entryFee.cameraFee && (
                      <p className="text-slate-500 text-[11px] pt-1 border-t border-slate-100">
                        Camera Rules: {place.entryFee.cameraFee}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-white">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-amber-800" />
                    <h4 className="text-sm font-bold text-slate-900 font-serif-heading">
                      How to Reach {place.name}
                    </h4>
                  </div>
                  <a
                    href={place.location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-amber-800 hover:text-amber-950 font-semibold hover:underline"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-slate-900 shrink-0 w-16">✈️ By Air:</span>
                    <span>{place.howToReach.airport}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-slate-900 shrink-0 w-16">🚆 By Rail:</span>
                    <span>{place.howToReach.railway}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-slate-900 shrink-0 w-16">🚗 By Road:</span>
                    <span>{place.howToReach.road}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section 3: Nearby Attractions */}
          {activeSection === 'nearby' && (
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-bold font-serif-heading text-slate-900 mb-1">
                  Nearby Excursions &amp; Attractions
                </h3>
                <p className="text-xs text-slate-500">
                  Combine your visit with these surrounding heritage spots and natural points of interest.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {place.nearbyAttractions.map((attraction, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs font-semibold text-amber-800 mb-1">{attraction.type}</div>
                      <h4 className="font-bold text-slate-900 text-sm">{attraction.name}</h4>
                    </div>
                    <div className="mt-4 pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500 font-mono">
                      <span>Distance:</span>
                      <span className="font-semibold text-slate-700">{attraction.distance}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 4: Local Cuisine & Traveler Tips */}
          {activeSection === 'culture' && (
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2 text-slate-900">
                  <Utensils className="w-4 h-4 text-amber-700" />
                  <h4 className="text-sm font-bold font-serif-heading">
                    Authentic Regional Cuisine to Savor in {place.city}
                  </h4>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {place.localCuisine.map((dish, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-amber-50/50 rounded-lg border border-amber-900/10 text-xs font-medium text-slate-800"
                    >
                      🍽️ {dish}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2 text-slate-900">
                  <Lightbulb className="w-4 h-4 text-amber-700" />
                  <h4 className="text-sm font-bold font-serif-heading">
                    Traveler Tips &amp; Cultural Etiquette
                  </h4>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {place.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-800 font-bold">✓</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {place.officialWebsite && (
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Official State Tourism Reference:</span>
                  <a
                    href={place.officialWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-amber-800 hover:text-amber-950 font-medium hover:underline"
                  >
                    <span>{place.officialWebsite}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <div>
            <span>TravelBharat Digital Encyclopedia Record ID: </span>
            <code className="text-slate-700 font-mono font-medium">{place.id}</code>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-medium transition-colors"
          >
            Close Entry
          </button>
        </div>
      </div>
    </div>
  );
};
