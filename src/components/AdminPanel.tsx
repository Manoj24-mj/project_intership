import React, { useState } from 'react';
import { useTourism } from '../context/TourismContext';
import { TouristPlace, Category, Zone } from '../types';
import { STATES_DATA } from '../data/statesData';
import {
  ShieldCheck,
  Plus,
  Edit2,
  Trash2,
  CheckCircle,
  AlertCircle,
  RotateCcw,
  Download,
  Search,
  Eye,
  X,
  MapPin,
  Check
} from 'lucide-react';

const CATEGORIES: Category[] = [
  'Heritage & Culture',
  'Nature & Wildlife',
  'Religious & Spiritual',
  'Adventure & Hill Stations',
  'Beaches & Coastal',
  'Offbeat & Hidden Gems'
];

const ZONES: Zone[] = [
  'North',
  'South',
  'West',
  'East',
  'North-East',
  'Central',
  'Islands & UTs'
];

export const AdminPanel: React.FC = () => {
  const {
    destinations,
    addDestination,
    updateDestination,
    deleteDestination,
    toggleVerifyDestination,
    resetToDefaults,
    exportDataAsJSON,
    setSelectedPlace
  } = useTourism();

  const [searchFilter, setSearchFilter] = useState('');
  const [modalMode, setModalMode] = useState<'create' | 'edit' | null>(null);
  const [editingPlace, setEditingPlace] = useState<TouristPlace | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    hindiName: '',
    state: 'Rajasthan',
    city: '',
    zone: 'West' as Zone,
    category: 'Heritage & Culture' as Category,
    description: '',
    historicalSignificance: '',
    season: 'Winter',
    months: 'October to March',
    weatherDesc: 'Pleasant temperatures and clear skies.',
    peakMonths: 'November, December, January',
    timings: '6:00 AM – 6:00 PM',
    domesticFee: '₹50',
    foreignFee: '₹500',
    cameraFee: 'Free for mobile phones',
    feeNotes: '',
    lat: '26.9124',
    lng: '75.7873',
    address: '',
    mapUrl: '',
    imageUrl1: '',
    imageUrl2: '',
    nearby1Name: '',
    nearby1Dist: '',
    nearby1Type: '',
    airport: '',
    railway: '',
    road: '',
    localCuisine: 'Dal Baati Churma, Ghevar',
    highlights: 'Historical Architecture, Cultural Heritage',
    tips: 'Visit early in the morning to avoid queues.',
    idealTripDuration: '1 Day',
    isOffbeat: false,
    unescoSite: false,
    verified: true
  });

  const openCreateModal = () => {
    setEditingPlace(null);
    setFormData({
      name: '',
      hindiName: '',
      state: 'Rajasthan',
      city: '',
      zone: 'West',
      category: 'Heritage & Culture',
      description: '',
      historicalSignificance: '',
      season: 'Winter',
      months: 'October to March',
      weatherDesc: 'Comfortable day temperatures ideal for walking tours.',
      peakMonths: 'November, December, January',
      timings: '6:00 AM – 6:00 PM',
      domesticFee: '₹50',
      foreignFee: '₹500',
      cameraFee: 'Free mobile photography',
      feeNotes: 'Entry free for children under 15.',
      lat: '26.9124',
      lng: '75.7873',
      address: '',
      mapUrl: '',
      imageUrl1: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
      imageUrl2: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
      nearby1Name: 'City Palace Complex',
      nearby1Dist: '2.5 km',
      nearby1Type: 'Palace Museum',
      airport: 'Nearest domestic airport within 25 km',
      railway: 'Major junction station connecting metros',
      road: 'Well serviced via National Highway',
      localCuisine: 'Regional Thali, Local Sweets',
      highlights: 'Historical Architecture, Heritage Walk',
      tips: 'Carry water and wear walking footwear.',
      idealTripDuration: '1 Day',
      isOffbeat: false,
      unescoSite: false,
      verified: true
    });
    setModalMode('create');
  };

  const openEditModal = (place: TouristPlace) => {
    setEditingPlace(place);
    setFormData({
      name: place.name,
      hindiName: place.hindiName || '',
      state: place.state,
      city: place.city,
      zone: place.zone,
      category: place.category,
      description: place.description,
      historicalSignificance: place.historicalSignificance,
      season: place.bestTimeToVisit.season,
      months: place.bestTimeToVisit.months,
      weatherDesc: place.bestTimeToVisit.weatherDesc,
      peakMonths: place.bestTimeToVisit.peakMonths.join(', '),
      timings: place.timings,
      domesticFee: place.entryFee.domestic,
      foreignFee: place.entryFee.foreign,
      cameraFee: place.entryFee.cameraFee || '',
      feeNotes: place.entryFee.notes || '',
      lat: place.location.lat.toString(),
      lng: place.location.lng.toString(),
      address: place.location.address,
      mapUrl: place.location.mapUrl,
      imageUrl1: place.images[0] || '',
      imageUrl2: place.images[1] || '',
      nearby1Name: place.nearbyAttractions[0]?.name || '',
      nearby1Dist: place.nearbyAttractions[0]?.distance || '',
      nearby1Type: place.nearbyAttractions[0]?.type || '',
      airport: place.howToReach.airport,
      railway: place.howToReach.railway,
      road: place.howToReach.road,
      localCuisine: place.localCuisine.join(', '),
      highlights: place.highlights.join(', '),
      tips: place.tips.join('; '),
      idealTripDuration: place.idealTripDuration,
      isOffbeat: place.isOffbeat,
      unescoSite: Boolean(place.unescoSite),
      verified: place.verified
    });
    setModalMode('edit');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.city.trim() || !formData.description.trim()) {
      return;
    }

    const images = [formData.imageUrl1, formData.imageUrl2].filter(Boolean);
    if (images.length === 0) {
      images.push('https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80');
    }

    const payloadData: Omit<TouristPlace, 'id'> = {
      name: formData.name.trim(),
      hindiName: formData.hindiName.trim() || undefined,
      state: formData.state,
      city: formData.city.trim(),
      zone: formData.zone,
      category: formData.category,
      description: formData.description.trim(),
      historicalSignificance: formData.historicalSignificance.trim(),
      bestTimeToVisit: {
        season: formData.season,
        months: formData.months,
        weatherDesc: formData.weatherDesc,
        peakMonths: formData.peakMonths.split(',').map((s) => s.trim()).filter(Boolean)
      },
      timings: formData.timings,
      entryFee: {
        domestic: formData.domesticFee,
        foreign: formData.foreignFee,
        cameraFee: formData.cameraFee,
        notes: formData.feeNotes
      },
      location: {
        mapUrl: formData.mapUrl || `https://maps.google.com/?q=${encodeURIComponent(formData.name + ', ' + formData.state)}`,
        lat: parseFloat(formData.lat) || 20.5937,
        lng: parseFloat(formData.lng) || 78.9629,
        address: formData.address || `${formData.city}, ${formData.state}`
      },
      images,
      nearbyAttractions: [
        {
          name: formData.nearby1Name || 'Surrounding Landmark',
          distance: formData.nearby1Dist || '5 km',
          type: formData.nearby1Type || 'Heritage Site'
        }
      ],
      howToReach: {
        airport: formData.airport,
        railway: formData.railway,
        road: formData.road
      },
      localCuisine: formData.localCuisine.split(',').map((s) => s.trim()).filter(Boolean),
      highlights: formData.highlights.split(',').map((s) => s.trim()).filter(Boolean),
      tips: formData.tips.split(';').map((s) => s.trim()).filter(Boolean),
      idealTripDuration: formData.idealTripDuration,
      isOffbeat: formData.isOffbeat,
      unescoSite: formData.unescoSite,
      verified: formData.verified
    };

    if (modalMode === 'create') {
      addDestination(payloadData);
    } else if (modalMode === 'edit' && editingPlace) {
      updateDestination({
        ...payloadData,
        id: editingPlace.id
      });
    }

    setModalMode(null);
  };

  const filtered = destinations.filter(
    (d) =>
      d.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      d.state.toLowerCase().includes(searchFilter.toLowerCase()) ||
      d.city.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-800 uppercase mb-1">
            <ShieldCheck className="w-4 h-4 text-amber-700" />
            <span>Content Moderation &amp; Management</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-slate-900">
            Admin Tourism Console
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Add new tourist destinations, moderate historical entries, verify factsheets, and export raw data.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={openCreateModal}
            className="px-4 py-2 bg-amber-800 hover:bg-amber-900 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Destination</span>
          </button>
          <button
            onClick={exportDataAsJSON}
            className="px-3 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-lg text-xs font-medium flex items-center gap-1.5 shadow-2xs"
            title="Download full database as JSON"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export JSON</span>
          </button>
          <button
            onClick={resetToDefaults}
            className="px-3 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-lg text-xs font-medium flex items-center gap-1.5 shadow-2xs"
            title="Reset to default dataset"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>
        </div>
      </div>

      {/* Metric Cards (Anti-Slop: clean unboxed metrics) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
          <div className="text-2xl font-bold font-mono text-slate-900 tabular-nums">{destinations.length}</div>
          <div className="text-xs text-slate-500 mt-1">Total Destinations</div>
        </div>
        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
          <div className="text-2xl font-bold font-mono text-emerald-700 tabular-nums">
            {destinations.filter((d) => d.verified).length}
          </div>
          <div className="text-xs text-slate-500 mt-1">Verified Tourism Factsheets</div>
        </div>
        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
          <div className="text-2xl font-bold font-mono text-amber-800 tabular-nums">
            {destinations.filter((d) => d.isOffbeat).length}
          </div>
          <div className="text-xs text-slate-500 mt-1">Offbeat / Hidden Gems</div>
        </div>
        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
          <div className="text-2xl font-bold font-mono text-slate-800 tabular-nums">
            {destinations.filter((d) => d.unescoSite).length}
          </div>
          <div className="text-xs text-slate-500 mt-1">UNESCO Monuments</div>
        </div>
      </div>

      {/* Destinations Management Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between gap-3">
          <div className="relative w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Filter by name, city, state..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-amber-700"
            />
          </div>
          <div className="text-xs text-slate-500 font-mono">
            Showing {filtered.length} of {destinations.length} records
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#faf8f5] border-b border-slate-200 text-slate-700 uppercase font-semibold tracking-wider text-[11px]">
              <tr>
                <th className="py-3 px-4">Place Name</th>
                <th className="py-3 px-4">Location</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Entry Fee</th>
                <th className="py-3 px-4 text-center">Verification</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              {filtered.map((place) => (
                <tr key={place.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 px-4 font-semibold text-slate-900">
                    <div className="flex items-center gap-2">
                      <img
                        src={place.images[0]}
                        alt=""
                        className="w-8 h-8 rounded object-cover shrink-0"
                      />
                      <div>
                        <div>{place.name}</div>
                        {place.hindiName && <div className="text-[11px] text-slate-400">{place.hindiName}</div>}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-slate-800">{place.city}</div>
                    <div className="text-slate-500 text-[11px]">{place.state} ({place.zone})</div>
                  </td>
                  <td className="py-3 px-4">{place.category}</td>
                  <td className="py-3 px-4 font-mono">{place.entryFee.domestic.split('(')[0]}</td>
                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={() => toggleVerifyDestination(place.id)}
                      className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                        place.verified
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100'
                          : 'bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100'
                      }`}
                      title="Click to toggle verification status"
                    >
                      {place.verified ? '✓ Verified' : 'Pending Review'}
                    </button>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => setSelectedPlace(place)}
                        className="p-1 text-slate-500 hover:text-slate-900"
                        title="Preview Entry"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => openEditModal(place)}
                        className="p-1 text-amber-700 hover:text-amber-900"
                        title="Edit Destination"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setDeleteConfirmId(place.id)}
                        className="p-1 text-rose-600 hover:text-rose-800"
                        title="Delete Destination"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirmId && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-sm w-full p-5 shadow-xl border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-2">Confirm Destination Removal</h3>
            <p className="text-xs text-slate-600 mb-4">
              Are you sure you want to delete this tourist place from the active TravelBharat catalog?
            </p>
            <div className="flex items-center justify-end gap-2">
              <button
                onClick={() => setDeleteConfirmId(null)}
                className="px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-100 rounded-md font-medium"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  deleteDestination(deleteConfirmId);
                  setDeleteConfirmId(null);
                }}
                className="px-3 py-1.5 text-xs bg-rose-600 hover:bg-rose-700 text-white rounded-md font-semibold"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add / Edit Destination Modal */}
      {modalMode && (
        <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-5 sm:p-7 shadow-2xl border border-slate-200 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-bold font-serif-heading text-slate-900">
                {modalMode === 'create' ? 'Add New Tourist Destination' : `Edit: ${editingPlace?.name}`}
              </h3>
              <button onClick={() => setModalMode(null)} className="p-1 text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
              {/* Basic Names & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Place Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-md focus:bg-white focus:border-amber-700"
                    placeholder="e.g. Qutub Minar"
                  />
                </div>
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Hindi Script Name</label>
                  <input
                    type="text"
                    value={formData.hindiName}
                    onChange={(e) => setFormData({ ...formData, hindiName: e.target.value })}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-md focus:bg-white focus:border-amber-700"
                    placeholder="e.g. क़ुतुब मीनार"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">State *</label>
                  <select
                    value={formData.state}
                    onChange={(e) => {
                      const stateObj = STATES_DATA.find((s) => s.name === e.target.value);
                      setFormData({
                        ...formData,
                        state: e.target.value,
                        zone: stateObj ? stateObj.zone : formData.zone
                      });
                    }}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-md focus:bg-white"
                  >
                    {STATES_DATA.map((s) => (
                      <option key={s.name} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">City / District *</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-md focus:bg-white"
                    placeholder="e.g. New Delhi"
                  />
                </div>
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as Category })}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-md focus:bg-white"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Descriptions */}
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Overview Description *</label>
                <textarea
                  rows={2}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full p-2 bg-slate-50 border border-slate-200 rounded-md focus:bg-white"
                  placeholder="Comprehensive description of the destination..."
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Historical Significance</label>
                <textarea
                  rows={2}
                  value={formData.historicalSignificance}
                  onChange={(e) => setFormData({ ...formData, historicalSignificance: e.target.value })}
                  className="w-full p-2 bg-slate-50 border border-slate-200 rounded-md focus:bg-white"
                  placeholder="Dates, founding dynasties, architectural style, UNESCO background..."
                />
              </div>

              {/* Timings, Fees & Season */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Timings</label>
                  <input
                    type="text"
                    value={formData.timings}
                    onChange={(e) => setFormData({ ...formData, timings: e.target.value })}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-md"
                  />
                </div>
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Domestic Ticket</label>
                  <input
                    type="text"
                    value={formData.domesticFee}
                    onChange={(e) => setFormData({ ...formData, domesticFee: e.target.value })}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-md"
                  />
                </div>
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Best Months</label>
                  <input
                    type="text"
                    value={formData.months}
                    onChange={(e) => setFormData({ ...formData, months: e.target.value })}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-md"
                    placeholder="e.g. October to March"
                  />
                </div>
              </div>

              {/* Image URLs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Primary Image URL</label>
                  <input
                    type="url"
                    value={formData.imageUrl1}
                    onChange={(e) => setFormData({ ...formData, imageUrl1: e.target.value })}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-md"
                    placeholder="https://images.unsplash.com/..."
                  />
                </div>
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Secondary Image URL</label>
                  <input
                    type="url"
                    value={formData.imageUrl2}
                    onChange={(e) => setFormData({ ...formData, imageUrl2: e.target.value })}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-md"
                    placeholder="https://images.unsplash.com/..."
                  />
                </div>
              </div>

              {/* Transit & Culture */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">How to Reach (Air)</label>
                  <input
                    type="text"
                    value={formData.airport}
                    onChange={(e) => setFormData({ ...formData, airport: e.target.value })}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-md"
                  />
                </div>
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">How to Reach (Rail)</label>
                  <input
                    type="text"
                    value={formData.railway}
                    onChange={(e) => setFormData({ ...formData, railway: e.target.value })}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-md"
                  />
                </div>
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Local Delicacies (comma separated)</label>
                  <input
                    type="text"
                    value={formData.localCuisine}
                    onChange={(e) => setFormData({ ...formData, localCuisine: e.target.value })}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-md"
                  />
                </div>
              </div>

              {/* Checkboxes */}
              <div className="flex items-center gap-6 pt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.isOffbeat}
                    onChange={(e) => setFormData({ ...formData, isOffbeat: e.target.checked })}
                    className="rounded text-amber-700 focus:ring-amber-700"
                  />
                  <span className="font-semibold text-slate-700">Offbeat / Hidden Gem</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.unescoSite}
                    onChange={(e) => setFormData({ ...formData, unescoSite: e.target.checked })}
                    className="rounded text-amber-700 focus:ring-amber-700"
                  />
                  <span className="font-semibold text-slate-700">UNESCO World Heritage Site</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.verified}
                    onChange={(e) => setFormData({ ...formData, verified: e.target.checked })}
                    className="rounded text-emerald-700 focus:ring-emerald-700"
                  />
                  <span className="font-semibold text-emerald-700">Verified Factsheet</span>
                </label>
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center justify-end gap-2 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setModalMode(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-semibold bg-amber-800 hover:bg-amber-900 text-white rounded-lg transition-colors shadow-xs"
                >
                  {modalMode === 'create' ? 'Save Destination' : 'Update Destination'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
