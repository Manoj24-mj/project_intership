import React, { useState } from 'react';
import { useTourism } from '../context/TourismContext';
import { STATES_DATA } from '../data/statesData';
import { Zone } from '../types';
import { MapPin, Compass, ArrowRight, Search } from 'lucide-react';

const ZONES: (Zone | 'All')[] = [
  'All',
  'North',
  'South',
  'West',
  'East',
  'North-East',
  'Central',
  'Islands & UTs'
];

export const StateExplorer: React.FC = () => {
  const { destinations, setSelectedState, setActiveTab } = useTourism();
  const [activeZone, setActiveZone] = useState<Zone | 'All'>('All');
  const [stateSearch, setStateSearch] = useState('');

  // Count destinations per state
  const stateCounts = destinations.reduce<Record<string, number>>((acc, curr) => {
    acc[curr.state] = (acc[curr.state] || 0) + 1;
    return acc;
  }, {});

  const filteredStates = STATES_DATA.filter((state) => {
    const matchesZone = activeZone === 'All' || state.zone === activeZone;
    const matchesSearch =
      state.name.toLowerCase().includes(stateSearch.toLowerCase()) ||
      state.capital.toLowerCase().includes(stateSearch.toLowerCase()) ||
      state.tagline.toLowerCase().includes(stateSearch.toLowerCase());
    return matchesZone && matchesSearch;
  });

  const handleSelectState = (stateName: string) => {
    setSelectedState(stateName);
    setActiveTab('explore');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="text-xs font-semibold tracking-wider text-amber-800 uppercase mb-1">
            Territorial Directory
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif-heading text-slate-900">
            Explore India State by State
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-1.5 max-w-2xl">
            Navigate through India’s rich geographical mosaic across Northern mountain passes,
            Southern backwaters, Western deserts, Eastern mangroves, and North-Eastern cloud valleys.
          </p>
        </div>

        {/* State Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search state or capital..."
            value={stateSearch}
            onChange={(e) => setStateSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-amber-700 shadow-2xs"
          />
        </div>
      </div>

      {/* Zone Filter Segmented Controls */}
      <div className="flex flex-wrap items-center gap-1.5 mb-8 p-1.5 bg-slate-100/80 rounded-xl w-fit">
        {ZONES.map((zone) => (
          <button
            key={zone}
            onClick={() => setActiveZone(zone)}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              activeZone === zone
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {zone === 'All' ? 'All Zones' : `${zone} India`}
          </button>
        ))}
      </div>

      {/* States Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStates.map((state) => {
          const count = stateCounts[state.name] || 0;
          return (
            <div
              key={state.code}
              onClick={() => handleSelectState(state.name)}
              className="group bg-white rounded-xl border border-slate-200/90 hover:border-amber-700/40 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* State Hero Thumbnail */}
                <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                  <img
                    src={state.heroImage}
                    alt={state.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                  
                  {/* State Name & Zone on Image */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <div className="text-[11px] font-medium text-amber-300 uppercase tracking-wider">
                      {state.zone} Zone · Capital: {state.capital}
                    </div>
                    <h3 className="text-xl font-bold font-serif-heading drop-shadow-xs">
                      {state.name}
                    </h3>
                  </div>

                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/60 text-white text-[11px] font-mono backdrop-blur-xs">
                    {count} {count === 1 ? 'place' : 'places'}
                  </div>
                </div>

                {/* State Body Content */}
                <div className="p-4 sm:p-5">
                  <p className="text-xs italic font-medium text-amber-900/90 mb-2">
                    &ldquo;{state.tagline}&rdquo;
                  </p>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {state.description}
                  </p>

                  {/* Cultural highlights tags */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                    {state.culturalHighlights.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="px-4 py-3 bg-[#faf9f6] border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-amber-800 group-hover:text-amber-950">
                <span>Browse {state.name} Destinations</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>

      {filteredStates.length === 0 && (
        <div className="text-center py-16 bg-white rounded-xl border border-slate-200">
          <Compass className="w-10 h-10 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-800">No states found</h3>
          <p className="text-xs text-slate-500 mt-1">
            Try adjusting your search query or selecting a different geographic zone.
          </p>
        </div>
      )}
    </div>
  );
};
