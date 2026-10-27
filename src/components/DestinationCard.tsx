import React from 'react';
import { TouristPlace } from '../types';
import { useTourism } from '../context/TourismContext';
import { Bookmark, MapPin, Clock, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

interface DestinationCardProps {
  place: TouristPlace;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ place }) => {
  const { setSelectedPlace, isSaved, toggleSavePlace, setSelectedState, setActiveTab } = useTourism();
  const saved = isSaved(place.id);

  const handleStateClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedState(place.state);
  };

  return (
    <article
      onClick={() => setSelectedPlace(place)}
      className="group relative bg-white rounded-xl border border-slate-200/90 hover:border-amber-700/40 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col overflow-hidden"
    >
      {/* Media Container */}
      <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
        <img
          src={place.images[0]}
          alt={place.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Gradient vignette for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />

        {/* Top Floating Actions: Save Button & Verification mark */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              toggleSavePlace(place.id);
            }}
            className={`p-2 rounded-full backdrop-blur transition-all ${
              saved
                ? 'bg-amber-700 text-white shadow-sm'
                : 'bg-white/85 text-slate-700 hover:bg-white hover:text-slate-900 shadow-xs'
            }`}
            aria-label={saved ? 'Remove from saved' : 'Save to itinerary'}
            title={saved ? 'Remove from itinerary' : 'Save to travel itinerary'}
          >
            <Bookmark className={`w-4 h-4 ${saved ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Bottom image overlay: State & City quick tag */}
        <div className="absolute bottom-2.5 left-3.5 right-3.5 text-white flex items-center justify-between text-xs">
          <button
            onClick={handleStateClick}
            className="flex items-center gap-1 font-medium hover:underline text-white drop-shadow-xs"
          >
            <MapPin className="w-3.5 h-3.5 text-amber-300 shrink-0" />
            <span>{place.city}, {place.state}</span>
          </button>
          {place.unescoSite && (
            <span className="text-[11px] font-semibold text-amber-200 drop-shadow-xs">
              UNESCO Site
            </span>
          )}
        </div>
      </div>

      {/* Card Content Area (Adheres to Zero-Pill & Metadata Discipline) */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Clean Unboxed Metadata Line with typographic separators */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-1.5">
            <span className="font-medium text-amber-800">{place.category}</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>{place.zone} Zone</span>
            {place.isOffbeat && (
              <>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="text-amber-700 font-medium">Offbeat Trail</span>
              </>
            )}
          </div>

          {/* Primary Title with optional Hindi script */}
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-lg font-bold font-serif-heading text-slate-900 group-hover:text-amber-900 transition-colors line-clamp-1">
              {place.name}
            </h3>
            {place.hindiName && (
              <span className="text-xs text-slate-400 font-serif-heading shrink-0 hidden sm:inline">
                {place.hindiName}
              </span>
            )}
          </div>

          {/* Clean Proportional Excerpt */}
          <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {place.description}
          </p>

          {/* Key Quick Facts (Unboxed text) */}
          <div className="mt-3.5 pt-3 border-t border-slate-100 flex flex-col gap-1.5 text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="text-slate-700 font-medium">Best:</span>
              <span className="truncate">{place.bestTimeToVisit.months} ({place.bestTimeToVisit.season})</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="text-slate-700 font-medium">Timings:</span>
              <span className="truncate">{place.timings.split(';')[0]}</span>
            </div>
          </div>
        </div>

        {/* Footer with Entry Fee & Action */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <div>
            <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Entry Fee</span>
            <span className="font-semibold text-slate-800 font-mono tabular-nums">
              {place.entryFee.domestic.split('(')[0].trim()}
            </span>
          </div>

          <button
            type="button"
            className="flex items-center gap-1 text-xs font-semibold text-amber-800 group-hover:text-amber-950 transition-colors"
          >
            <span>Explore Factsheet</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </article>
  );
};
