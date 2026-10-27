import React, { useState } from 'react';
import { useTourism } from '../context/TourismContext';
import { Download, Copy, Check, Search, FileText, School } from 'lucide-react';

export const StudentResearchHub: React.FC = () => {
  const { destinations, exportDataAsJSON, setSelectedPlace, showToast } = useTourism();
  const [researchSearch, setResearchSearch] = useState('');
  const [citationFormat, setCitationFormat] = useState<'APA' | 'MLA' | 'Chicago'>('APA');
  const [copiedCitation, setCopiedCitation] = useState(false);

  const unescoPlaces = destinations.filter((d) => d.unescoSite);

  const filteredDestinations = destinations.filter((d) => {
    const q = researchSearch.toLowerCase();
    return (
      d.name.toLowerCase().includes(q) ||
      d.state.toLowerCase().includes(q) ||
      d.category.toLowerCase().includes(q) ||
      d.historicalSignificance.toLowerCase().includes(q)
    );
  });

  const getCitationText = () => {
    const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    if (citationFormat === 'APA') {
      return `TravelBharat Editorial Board. (2026). Digital Travel Encyclopedia of India: State-wise Heritage, Biodiversity, and Tourism Analysis. Retrieved ${today}, from ${window.location.origin}`;
    }
    if (citationFormat === 'MLA') {
      return `TravelBharat Editorial Board. "Digital Travel Encyclopedia of India: State-wise Heritage and Tourism Insights." TravelBharat Tourism Portal, 2026, ${window.location.origin}. Accessed ${today}.`;
    }
    return `TravelBharat Editorial Board. 2026. "Digital Travel Encyclopedia of India." Unified Tourism Knowledge Repository. Accessed ${today}. ${window.location.origin}.`;
  };

  const copyCitation = () => {
    navigator.clipboard.writeText(getCitationText());
    setCopiedCitation(true);
    showToast(`Copied ${citationFormat} citation to clipboard!`, 'success');
    setTimeout(() => setCopiedCitation(false), 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-800 uppercase mb-2">
            <School className="w-4 h-4 text-amber-700" />
            <span>Academic &amp; Student Project Portal</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif-heading text-slate-900">
            Tourism Research &amp; Scholarly Factsheet
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
            Curated statistical datasets, UNESCO heritage matrices, and standardized academic citations
            engineered specifically to support students, tourism researchers, and regional historians.
          </p>
        </div>

        {/* Export dataset CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={exportDataAsJSON}
            className="px-4 py-2.5 bg-amber-800 hover:bg-amber-900 text-white rounded-lg text-xs font-semibold flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Export Raw JSON Dataset</span>
          </button>
        </div>
      </div>

      {/* 1. Academic Citation Generator */}
      <div className="p-6 bg-white rounded-xl border border-slate-200/90 shadow-xs">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-amber-800" />
            <h3 className="text-sm font-bold text-slate-900 font-serif-heading">
              Standardized Scholarly Citation Generator
            </h3>
          </div>
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg text-xs font-medium">
            {(['APA', 'MLA', 'Chicago'] as const).map((fmt) => (
              <button
                key={fmt}
                onClick={() => setCitationFormat(fmt)}
                className={`px-3 py-1 rounded-md transition-colors ${
                  citationFormat === fmt
                    ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {fmt}
              </button>
            ))}
          </div>
        </div>

        <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200/80 font-mono text-xs text-slate-800 leading-relaxed select-all">
          {getCitationText()}
        </div>

        <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
          <span>Use this citation in project bibliographies, research papers, and case studies.</span>
          <button
            onClick={copyCitation}
            className="flex items-center gap-1 text-amber-800 font-semibold hover:text-amber-950 cursor-pointer"
          >
            {copiedCitation ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedCitation ? 'Copied Citation!' : 'Copy Citation'}</span>
          </button>
        </div>
      </div>

      {/* 2. UNESCO World Heritage Master Index */}
      <div>
        <div className="mb-4">
          <h3 className="text-lg font-bold font-serif-heading text-slate-900">
            UNESCO World Heritage Sites Index
          </h3>
          <p className="text-xs text-slate-500">
            Recognized by the United Nations Educational, Scientific and Cultural Organization for universal cultural and natural value.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {unescoPlaces.map((place) => (
            <div
              key={place.id}
              onClick={() => setSelectedPlace(place)}
              className="p-4 bg-white rounded-xl border border-slate-200 hover:border-amber-700/50 cursor-pointer shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-[11px] font-semibold text-amber-800 uppercase tracking-wider mb-1">
                  {place.state} · {place.category}
                </div>
                <h4 className="font-bold text-slate-900 font-serif-heading text-base">{place.name}</h4>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                  {place.historicalSignificance}
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Coordinates:</span>
                <span>{place.location.lat.toFixed(2)}°N, {place.location.lng.toFixed(2)}°E</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Comprehensive Searchable Data Table for Analysis */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <h3 className="text-lg font-bold font-serif-heading text-slate-900">
              Comparative Destinations Data Table
            </h3>
            <p className="text-xs text-slate-500">
              Total {filteredDestinations.length} records available for cross-state comparative analysis.
            </p>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Filter table rows..."
              value={researchSearch}
              onChange={(e) => setResearchSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-amber-700"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#faf8f5] border-b border-slate-200 text-slate-700 uppercase font-semibold tracking-wider text-[11px]">
                <tr>
                  <th className="py-3 px-4">Place Name</th>
                  <th className="py-3 px-4">State</th>
                  <th className="py-3 px-4">City</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Best Season</th>
                  <th className="py-3 px-4">Entry Fee (Domestic)</th>
                  <th className="py-3 px-4 text-center">Status</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                {filteredDestinations.map((place) => (
                  <tr key={place.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4 font-semibold text-slate-900">
                      {place.name}
                      {place.unescoSite && (
                        <span className="ml-1.5 text-[10px] text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded font-mono">
                          UNESCO
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-slate-800">{place.state}</td>
                    <td className="py-3 px-4">{place.city}</td>
                    <td className="py-3 px-4">{place.category}</td>
                    <td className="py-3 px-4">{place.bestTimeToVisit.season}</td>
                    <td className="py-3 px-4 font-mono">{place.entryFee.domestic.split('(')[0]}</td>
                    <td className="py-3 px-4 text-center">
                      <span className="text-[11px] text-emerald-700 font-medium">Verified</span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => setSelectedPlace(place)}
                        className="text-amber-800 hover:text-amber-950 font-semibold hover:underline cursor-pointer"
                      >
                        Inspect
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
