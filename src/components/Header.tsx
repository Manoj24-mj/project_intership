import React, { useState } from 'react';
import { useTourism } from '../context/TourismContext';
import { Compass, Bookmark, Search, ShieldCheck, BookOpen, Sparkles, MapPin, Menu, X, FileText, BarChart3 } from 'lucide-react';

interface HeaderProps {
  onOpenSavedDrawer: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSavedDrawer }) => {
  const {
    activeTab,
    setActiveTab,
    savedPlaceIds,
    searchQuery,
    setSearchQuery,
    resetFilters
  } = useTourism();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-amber-950/10">
      {/* Top micro-bar for Incredible India & Cultural ethos */}
      <div className="bg-[#8b2500] text-amber-50 px-4 py-1 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 tracking-wide font-medium">
            <span className="text-amber-300">अतुल्य भारत</span>
            <span className="text-amber-200/50">·</span>
            <span>Incredible India Digital Travel Encyclopedia</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-amber-100/80">
            <span>Official State Tourism Directory</span>
            <span className="text-amber-200/50">·</span>
            <span>28 States & 8 Union Territories</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Mark */}
          <button
            onClick={() => {
              resetFilters();
              handleTabClick('explore');
            }}
            className="flex items-center gap-3 text-left group transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 rounded-md"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-amber-600 via-orange-600 to-amber-800 flex items-center justify-center text-white shadow-sm shadow-orange-950/20 group-hover:shadow-md transition-shadow">
              <Compass className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl sm:text-2xl font-bold font-serif-heading tracking-tight text-slate-900">
                  Travel<span className="text-amber-700">Bharat</span>
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-wider uppercase">
                Explore India State by State
              </p>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
            <button
              onClick={() => handleTabClick('explore')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                activeTab === 'explore'
                  ? 'text-amber-800 bg-amber-50 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              All Destinations
            </button>
            <button
              onClick={() => handleTabClick('states')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                activeTab === 'states'
                  ? 'text-amber-800 bg-amber-50 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              State Directory
            </button>
            <button
              onClick={() => handleTabClick('hiddengems')}
              className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
                activeTab === 'hiddengems'
                  ? 'text-amber-800 bg-amber-50 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Hidden Gems</span>
            </button>
            <button
              onClick={() => handleTabClick('analytics')}
              className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
                activeTab === 'analytics'
                  ? 'text-amber-800 bg-amber-50 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5 text-amber-700" />
              <span>Tourism Stats</span>
            </button>
            <button
              onClick={() => handleTabClick('research')}
              className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
                activeTab === 'research'
                  ? 'text-amber-800 bg-amber-50 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-slate-500" />
              <span>Research Hub</span>
            </button>
            <button
              onClick={() => handleTabClick('docs')}
              className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
                activeTab === 'docs'
                  ? 'text-amber-800 bg-amber-50 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-slate-500" />
              <span>PRD</span>
            </button>
            <button
              onClick={() => handleTabClick('admin')}
              className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
                activeTab === 'admin'
                  ? 'text-amber-800 bg-amber-50 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
              <span>Admin</span>
            </button>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenSavedDrawer}
              className="relative flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg bg-amber-50 hover:bg-amber-100/80 text-amber-900 border border-amber-200/60 transition-all"
              title="View your saved places & travel itinerary"
            >
              <Bookmark className="w-4 h-4 text-amber-700 fill-amber-700" />
              <span className="hidden sm:inline">My Itinerary</span>
              {savedPlaceIds.length > 0 && (
                <span className="w-5 h-5 rounded-full bg-amber-700 text-white text-[10px] font-bold flex items-center justify-center">
                  {savedPlaceIds.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Links */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-3 border-t border-slate-100 flex flex-col gap-1 text-sm font-medium">
            <button
              onClick={() => handleTabClick('explore')}
              className={`px-3 py-2 text-left rounded-md ${
                activeTab === 'explore' ? 'bg-amber-50 text-amber-900 font-semibold' : 'text-slate-700'
              }`}
            >
              All Destinations
            </button>
            <button
              onClick={() => handleTabClick('states')}
              className={`px-3 py-2 text-left rounded-md ${
                activeTab === 'states' ? 'bg-amber-50 text-amber-900 font-semibold' : 'text-slate-700'
              }`}
            >
              State Directory
            </button>
            <button
              onClick={() => handleTabClick('hiddengems')}
              className={`px-3 py-2 text-left rounded-md flex items-center gap-2 ${
                activeTab === 'hiddengems' ? 'bg-amber-50 text-amber-900 font-semibold' : 'text-slate-700'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Hidden Gems</span>
            </button>
            <button
              onClick={() => handleTabClick('analytics')}
              className={`px-3 py-2 text-left rounded-md flex items-center gap-2 ${
                activeTab === 'analytics' ? 'bg-amber-50 text-amber-900 font-semibold' : 'text-slate-700'
              }`}
            >
              <BarChart3 className="w-4 h-4 text-amber-700" />
              <span>Tourism Statistics</span>
            </button>
            <button
              onClick={() => handleTabClick('research')}
              className={`px-3 py-2 text-left rounded-md ${
                activeTab === 'research' ? 'bg-amber-50 text-amber-900 font-semibold' : 'text-slate-700'
              }`}
            >
              Research Hub
            </button>
            <button
              onClick={() => handleTabClick('admin')}
              className={`px-3 py-2 text-left rounded-md ${
                activeTab === 'admin' ? 'bg-amber-50 text-amber-900 font-semibold' : 'text-slate-700'
              }`}
            >
              Admin Portal
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
