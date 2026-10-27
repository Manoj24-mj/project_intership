import React from 'react';
import { useTourism } from '../context/TourismContext';
import { Compass, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setActiveTab, setSelectedState, setSelectedCategory, resetFilters } = useTourism();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStateClick = (state: string) => {
    resetFilters();
    setSelectedState(state);
    setActiveTab('explore');
    scrollToTop();
  };

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-700 flex items-center justify-center text-white">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold font-serif-heading text-white tracking-tight">
                Travel<span className="text-amber-500">Bharat</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              A centralized digital travel encyclopedia presenting verified state-wise and city-wise
              attractions, cultural heritage, and travel wisdom across India.
            </p>
            <div className="text-[11px] text-amber-500 font-medium">
              अतिथि देवो भव · Atithi Devo Bhava
            </div>
          </div>

          {/* Featured Regional Hubs */}
          <div>
            <h4 className="text-white font-semibold mb-3 uppercase tracking-wider text-[11px]">
              Explore by State
            </h4>
            <ul className="space-y-1.5">
              {['Rajasthan', 'Kerala', 'Himachal Pradesh', 'Meghalaya', 'Tamil Nadu', 'Karnataka'].map((st) => (
                <li key={st}>
                  <button
                    onClick={() => handleStateClick(st)}
                    className="hover:text-amber-400 transition-colors text-left"
                  >
                    {st} Tourism
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tourism Themes */}
          <div>
            <h4 className="text-white font-semibold mb-3 uppercase tracking-wider text-[11px]">
              Tourism Categories
            </h4>
            <ul className="space-y-1.5">
              {['Heritage & Culture', 'Nature & Wildlife', 'Religious & Spiritual', 'Adventure & Hill Stations', 'Offbeat & Hidden Gems'].map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => {
                      resetFilters();
                      setSelectedCategory(cat as any);
                      setActiveTab('explore');
                      scrollToTop();
                    }}
                    className="hover:text-amber-400 transition-colors text-left"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Research & Platform */}
          <div>
            <h4 className="text-white font-semibold mb-3 uppercase tracking-wider text-[11px]">
              Platform &amp; Project
            </h4>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => {
                    setActiveTab('research');
                    scrollToTop();
                  }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Student Research Hub
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('hiddengems');
                    scrollToTop();
                  }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Hidden Gems Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('docs');
                    scrollToTop();
                  }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Technical PRD &amp; Architecture
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('admin');
                    scrollToTop();
                  }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Content Admin Portal
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} TravelBharat. Developed for Unified Mentor &amp; Incredible India Initiative.
          </div>

          <div className="flex items-center gap-4">
            <span>Verified Tourism Factsheets</span>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
