import React from 'react';
import { useTourism } from '../context/TourismContext';
import { Sparkles, MapPin, Compass, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

export const HiddenGems: React.FC = () => {
  const { destinations, setSelectedPlace } = useTourism();

  const offbeatPlaces = destinations.filter((d) => d.isOffbeat);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* Editorial Header */}
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-800 uppercase mb-2">
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span>Secondary Tourism Mission</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-serif-heading text-slate-900 leading-tight">
          Lesser-Known Wonders <br />
          <span className="text-amber-800 italic font-medium">&amp; Offbeat Trails</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
          Beyond the marquee golden triangles lie India’s best-kept secrets: living bio-engineered bridges,
          meteorite impact lakes in basalt rock, painted open-air haveli museums, and deep river gorges.
          Promoting these destinations alleviates overtourism and brings sustainable economic support directly
          to local communities.
        </p>
      </div>

      {/* Offbeat Showcase Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offbeatPlaces.map((place) => (
          <article
            key={place.id}
            onClick={() => setSelectedPlace(place)}
            className="group bg-white rounded-xl border border-slate-200 hover:border-amber-700/40 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden">
                <img
                  src={place.images[0]}
                  alt={place.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-amber-900/90 text-amber-100 text-xs font-semibold backdrop-blur-xs flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  <span>Hidden Gem</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-xs text-amber-300 font-medium flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>{place.city}, {place.state}</span>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider mb-1">
                  {place.category}
                </div>
                <h3 className="text-lg font-bold font-serif-heading text-slate-900 group-hover:text-amber-900 transition-colors">
                  {place.name}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                  {place.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Best Season: <strong>{place.bestTimeToVisit.season}</strong></span>
                  <span className="font-mono text-slate-700 font-medium">{place.idealTripDuration}</span>
                </div>
              </div>
            </div>

            <div className="px-5 py-3 bg-[#faf9f6] border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-amber-800 group-hover:text-amber-950">
              <span>Read Full Discovery Story</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </article>
        ))}
      </div>

      {/* Sustainable Offbeat Travel Charter */}
      <div className="mt-14 p-6 sm:p-8 bg-amber-50/70 rounded-2xl border border-amber-900/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold font-serif-heading text-slate-900">
            The TravelBharat Sustainable Travel Charter
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-700 max-w-2xl leading-relaxed">
            When visiting offbeat regions, honor indigenous traditions, avoid single-use plastics in fragile
            mountain and forest ecosystems, patronize local village homestays, and hire certified community guides.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 bg-white px-4 py-2.5 rounded-xl border border-amber-200 shadow-2xs">
            <Heart className="w-4 h-4 text-rose-600 fill-rose-600" />
            <span>Community-First Tourism</span>
          </div>
        </div>
      </div>
    </div>
  );
};
