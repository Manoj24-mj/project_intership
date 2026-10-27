import React, { useState } from 'react';
import { STATE_TOURISM_STATS, FOREIGN_DEMO_STATS } from '../data/tourismStats';
import { BarChart3, TrendingUp, Users, Globe, Search, ArrowUpDown } from 'lucide-react';

export const TourismAnalytics: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'states' | 'demographics'>('states');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState<'domestic2018' | 'growthDomestic' | 'stateUT'>('domestic2018');
  const [sortAsc, setSortAsc] = useState(false);

  const filteredStates = STATE_TOURISM_STATS.filter((st) =>
    st.stateUT.toLowerCase().includes(searchQuery.toLowerCase())
  ).sort((a, b) => {
    let valA = a[sortField];
    let valB = b[sortField];
    if (typeof valA === 'string') {
      return sortAsc ? (valA as string).localeCompare(valB as string) : (valB as string).localeCompare(valA as string);
    }
    return sortAsc ? (valA as number) - (valB as number) : (valB as number) - (valA as number);
  });

  const totalDomestic2018 = STATE_TOURISM_STATS.reduce((acc, curr) => acc + curr.domestic2018, 0);
  const totalForeign2018 = STATE_TOURISM_STATS.reduce((acc, curr) => acc + curr.foreign2018, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-800 uppercase mb-1">
            <BarChart3 className="w-4 h-4 text-amber-700" />
            <span>Official Ministry of Tourism Datasets</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif-heading text-slate-900">
            India Tourism Statistics &amp; Analytics Dashboard
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            Explore state-wise domestic and foreign tourist arrival figures (2017 vs 2018) along with international
            visitor demographic age distributions.
          </p>
        </div>

        {/* Sub-tab toggle */}
        <div className="flex items-center gap-1 p-1 bg-slate-200/80 rounded-xl text-xs font-medium shrink-0">
          <button
            onClick={() => setActiveSubTab('states')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeSubTab === 'states' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            State-wise Arrivals (2017-2018)
          </button>
          <button
            onClick={() => setActiveSubTab('demographics')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeSubTab === 'demographics' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Foreign Tourist Demographics
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
          <div className="flex items-center gap-2 text-amber-800 text-xs font-bold uppercase tracking-wider mb-1">
            <Users className="w-4 h-4" />
            <span>Total Domestic Arrivals (2018)</span>
          </div>
          <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-900">
            {(totalDomestic2018).toLocaleString()}
          </div>
          <div className="text-xs text-emerald-700 font-medium mt-1">↑ +11.91% growth rate across India</div>
        </div>

        <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
          <div className="flex items-center gap-2 text-amber-800 text-xs font-bold uppercase tracking-wider mb-1">
            <Globe className="w-4 h-4" />
          <span>Total Foreign Arrivals (2018)</span>
          </div>
          <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-900">
            {(totalForeign2018).toLocaleString()}
          </div>
          <div className="text-xs text-emerald-700 font-medium mt-1">↑ +7.39% growth rate across India</div>
        </div>

        <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
          <div className="flex items-center gap-2 text-amber-800 text-xs font-bold uppercase tracking-wider mb-1">
            <TrendingUp className="w-4 h-4" />
            <span>Top Performing State (2018)</span>
          </div>
          <div className="text-xl font-bold text-slate-900">Uttar Pradesh &amp; Tamil Nadu</div>
          <div className="text-xs text-slate-500 mt-1">Leading domestic and international footfall</div>
        </div>
      </div>

      {/* Tab 1: State Arrivals Table */}
      {activeSubTab === 'states' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search state or UT..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-amber-700 shadow-2xs"
              />
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-600">
              <span className="font-medium">Sort By:</span>
              <select
                value={sortField}
                onChange={(e) => setSortField(e.target.value as any)}
                className="p-1.5 bg-white border border-slate-200 rounded-lg text-xs font-semibold focus:outline-none"
              >
                <option value="domestic2018">2018 Domestic Arrivals</option>
                <option value="growthDomestic">Domestic Growth Rate (%)</option>
                <option value="stateUT">State / UT Name (A-Z)</option>
              </select>
              <button
                onClick={() => setSortAsc(!sortAsc)}
                className="p-1.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50"
                title="Toggle sort direction"
              >
                <ArrowUpDown className="w-4 h-4 text-slate-600" />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#faf8f5] border-b border-slate-200 text-slate-700 uppercase font-semibold tracking-wider text-[11px]">
                  <tr>
                    <th className="py-3 px-4">S.No</th>
                    <th className="py-3 px-4">State / UT</th>
                    <th className="py-3 px-4 text-right">2017 Domestic</th>
                    <th className="py-3 px-4 text-right">2018 Domestic</th>
                    <th className="py-3 px-4 text-right">Domestic Growth</th>
                    <th className="py-3 px-4 text-right">2017 Foreign</th>
                    <th className="py-3 px-4 text-right">2018 Foreign</th>
                    <th className="py-3 px-4 text-right">Foreign Growth</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 font-mono">
                  {filteredStates.map((st) => (
                    <tr key={st.sNo} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-400">{st.sNo}</td>
                      <td className="py-3 px-4 font-sans font-semibold text-slate-900">{st.stateUT}</td>
                      <td className="py-3 px-4 text-right">{st.domestic2017.toLocaleString()}</td>
                      <td className="py-3 px-4 text-right font-bold text-amber-900">{st.domestic2018.toLocaleString()}</td>
                      <td className={`py-3 px-4 text-right font-semibold ${st.growthDomestic >= 0 ? 'text-emerald-700' : 'text-rose-600'}`}>
                        {st.growthDomestic > 0 ? `+${st.growthDomestic}%` : `${st.growthDomestic}%`}
                      </td>
                      <td className="py-3 px-4 text-right">{st.foreign2017.toLocaleString()}</td>
                      <td className="py-3 px-4 text-right font-bold text-slate-900">{st.foreign2018.toLocaleString()}</td>
                      <td className={`py-3 px-4 text-right font-semibold ${st.growthForeign >= 0 ? 'text-emerald-700' : 'text-rose-600'}`}>
                        {st.growthForeign > 0 ? `+${st.growthForeign}%` : `${st.growthForeign}%`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Foreign Demographics Table */}
      {activeSubTab === 'demographics' && (
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#faf8f5] border-b border-slate-200 text-slate-700 uppercase font-semibold tracking-wider text-[11px]">
                  <tr>
                    <th className="py-3 px-4">Region</th>
                    <th className="py-3 px-4">Country</th>
                    <th className="py-3 px-4 text-right">Total Arrivals</th>
                    <th className="py-3 px-4 text-right">0-14 yrs</th>
                    <th className="py-3 px-4 text-right">15-24 yrs</th>
                    <th className="py-3 px-4 text-right">25-34 yrs</th>
                    <th className="py-3 px-4 text-right">35-44 yrs</th>
                    <th className="py-3 px-4 text-right">45-54 yrs</th>
                    <th className="py-3 px-4 text-right">55-64 yrs</th>
                    <th className="py-3 px-4 text-right">65+ yrs</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 font-mono">
                  {FOREIGN_DEMO_STATS.map((demo, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3 px-4 font-sans text-slate-500">{demo.region}</td>
                      <td className="py-3 px-4 font-sans font-semibold text-slate-900">{demo.country}</td>
                      <td className="py-3 px-4 text-right font-bold text-amber-900">{demo.arrivals.toLocaleString()}</td>
                      <td className="py-3 px-4 text-right">{demo.age0_14}%</td>
                      <td className="py-3 px-4 text-right">{demo.age15_24}%</td>
                      <td className="py-3 px-4 text-right">{demo.age25_34}%</td>
                      <td className="py-3 px-4 text-right">{demo.age35_44}%</td>
                      <td className="py-3 px-4 text-right">{demo.age45_54}%</td>
                      <td className="py-3 px-4 text-right">{demo.age55_64}%</td>
                      <td className="py-3 px-4 text-right">{demo.age65Plus}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
