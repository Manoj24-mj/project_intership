import React from 'react';
import { useTourism } from '../context/TourismContext';
import { Zone, Category } from '../types';
import { Search, MapPin, Sparkles, Filter, X, Compass, Globe, Award, ShieldCheck } from 'lucide-react';

const ZONES: Zone[] = [
  'North',
  'South',
  'West',
  'East',
  'North-East',
  'Central',
  'Islands & UTs'
];

const CATEGORIES: Category[] = [
  'Heritage & Culture',
  'Nature & Wildlife',
  'Religious & Spiritual',
  'Adventure & Hill Stations',
  'Beaches & Coastal',
  'Offbeat & Hidden Gems'
];

export const Hero: React.FC = () => {
  const {
    totalPlaces,
    totalStates,
    totalOffbeat,
    totalUnesco,
    searchQuery,
    setSearchQuery,
    selectedZone,
    setSelectedZone,
    selectedCategory,
    setSelectedCategory,
    onlyOffbeat,
    setOnlyOffbeat,
    onlyUnesco,
    setOnlyUnesco,
    resetFilters
  } = useTourism();

  const isFiltered =
    selectedZone !== 'All' ||
    selectedCategory !== 'All' ||
    onlyOffbeat ||
    onlyUnesco ||
    searchQuery.trim().length > 0;

  return (
    <div className="relative border-b border-amber-950/10 bg-gradient-to-b from-[#fbf8f3] to-[#f4eee3] overflow-hidden">
      {/* Subtle organic pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#7c2d12 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:pt-16 sm:pb-20">
        {/* Editorial Eyebrow */}
        <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-bold text-amber-900 mb-3">
          <span className="w-2 h-2 rounded-full bg-amber-700 animate-pulse" />
          <span>Incredible India Digital Encyclopedia</span>
          <span className="text-amber-400">·</span>
          <span>Verified Heritage &amp; Culture</span>
        </div>

        {/* Main Title & Subtitle */}
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-bold font-serif-heading text-slate-900 tracking-tight leading-[1.1]">
            Explore India’s Soul, <br />
            <span className="text-amber-800 italic font-medium">State by Majestic State</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A centralized digital travel repository celebrating 28 states and 8 union territories. Discover
            ancient rock-cut sanctuaries, emerald backwaters, majestic Himalayan heights, and vibrant local traditions.
          </p>
        </div>

        {/* Statistics Row */}
        <div className="mt-8 pt-6 border-t border-amber-900/10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl text-slate-700">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 font-mono tabular-nums">28 + 8</div>
            <div className="text-xs text-slate-500 mt-0.5 font-medium">States &amp; Union Territories</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 font-mono tabular-nums">{totalPlaces}</div>
            <div className="text-xs text-slate-500 mt-0.5 font-medium">Verified Destinations</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-amber-800 font-mono tabular-nums">{totalUnesco}</div>
            <div className="text-xs text-slate-500 mt-0.5 font-medium">UNESCO World Heritage</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-amber-800 font-mono tabular-nums">{totalOffbeat}</div>
            <div className="text-xs text-slate-500 mt-0.5 font-medium">Offbeat Hidden Gems</div>
          </div>
        </div>

        {/* Search & Filter Console */}
        <div className="mt-8 bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-amber-950/10 max-w-4xl">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search destinations, cities, states, or highlights (e.g. Taj Mahal, Hampi, Kerala, Varanasi)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3.5 text-sm sm:text-base bg-slate-50 hover:bg-slate-50/80 focus:bg-white text-slate-900 rounded-xl border border-slate-200 focus:border-amber-700 focus:outline-none transition-all placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Zones */}
          <div className="mt-4 pt-4 border-t border-slate-100">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Geographic Zone
              </span>
              {isFiltered && (
                <button
                  onClick={resetFilters}
                  className="text-xs text-amber-800 hover:text-amber-950 font-semibold hover:underline flex items-center gap-1"
                >
                  <X className="w-3 h-3" />
                  <span>Reset All Filters</span>
                </button>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => setSelectedZone('All')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  selectedZone === 'All'
                    ? 'bg-amber-800 text-white shadow-xs font-semibold'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All Regions
              </button>
              {ZONES.map((zone) => (
                <button
                  key={zone}
                  onClick={() => setSelectedZone(zone)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                    selectedZone === zone
                      ? 'bg-amber-800 text-white shadow-xs font-semibold'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {zone}
                </button>
              ))}
            </div>
          </div>

          {/* Categories & Toggles */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 mr-1 hidden sm:inline">
                Category:
              </span>
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                  selectedCategory === 'All'
                    ? 'bg-slate-900 text-white font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                All Categories
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                    selectedCategory === cat
                      ? 'bg-slate-900 text-white font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setOnlyUnesco(!onlyUnesco)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md border transition-colors flex items-center gap-1 ${
                  onlyUnesco
                    ? 'bg-amber-50 text-amber-900 border-amber-300 font-semibold'
                    : 'text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <span>🏛️ UNESCO Only</span>
              </button>
              <button
                onClick={() => setOnlyOffbeat(!onlyOffbeat)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md border transition-colors flex items-center gap-1 ${
                  onlyOffbeat
                    ? 'bg-amber-50 text-amber-900 border-amber-300 font-semibold'
                    : 'text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Sparkles className="w-3 h-3 text-amber-600" />
                <span>Hidden Gems</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
