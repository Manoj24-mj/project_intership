import React, { useState } from 'react';
import { FileText, CheckCircle2, Layers, Cpu, Database, Target, Compass, Sparkles, BookOpen } from 'lucide-react';

export const TechnicalDocsModal: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'overview' | 'scope' | 'architecture' | 'kpis'>('overview');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
      {/* Editorial Header */}
      <div className="border-b border-slate-200 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-800 uppercase mb-1">
          <FileText className="w-4 h-4 text-amber-700" />
          <span>Unified Mentor · Incredible India Technical Specification</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold font-serif-heading text-slate-900">
          TravelBharat – Project PRD &amp; Technical Architecture
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
          Comprehensive product requirements document, architectural blueprint, domain entity model,
          and evaluation metrics for the centralized state-by-state digital tourism encyclopedia.
        </p>
      </div>

      {/* Navigation tabs for PRD */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto text-xs font-medium">
        <button
          onClick={() => setActiveSection('overview')}
          className={`px-3 py-1.5 rounded-lg transition-colors shrink-0 ${
            activeSection === 'overview'
              ? 'bg-amber-800 text-white font-semibold'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          1. Context &amp; Problem Statement
        </button>
        <button
          onClick={() => setActiveSection('scope')}
          className={`px-3 py-1.5 rounded-lg transition-colors shrink-0 ${
            activeSection === 'scope'
              ? 'bg-amber-800 text-white font-semibold'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          2. Scope of Work &amp; Functional Spec
        </button>
        <button
          onClick={() => setActiveSection('architecture')}
          className={`px-3 py-1.5 rounded-lg transition-colors shrink-0 ${
            activeSection === 'architecture'
              ? 'bg-amber-800 text-white font-semibold'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          3. Tech Stack &amp; Data Model
        </button>
        <button
          onClick={() => setActiveSection('kpis')}
          className={`px-3 py-1.5 rounded-lg transition-colors shrink-0 ${
            activeSection === 'kpis'
              ? 'bg-amber-800 text-white font-semibold'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          4. KPIs, Assumptions &amp; Future Scope
        </button>
      </div>

      {/* Content Section 1: Context & Problem Statement */}
      {activeSection === 'overview' && (
        <div className="space-y-6 text-sm text-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-3">
              <h3 className="font-bold text-slate-900 text-base font-serif-heading text-amber-900">
                The Problem Statement
              </h3>
              <p className="text-xs leading-relaxed text-slate-600">
                Currently, travelers, students, and research scholars face major systemic friction when seeking
                comprehensive tourism details in India:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 list-disc list-inside">
                <li><strong>Scattered and inconsistent tourism information</strong> across dozens of disparate departmental websites.</li>
                <li><strong>Difficulty finding state-wise and city-wise destinations</strong> in a standardized taxonomy.</li>
                <li><strong>Lack of structured, verified details</strong> on exact timings, camera rules, seasonal weather patterns, and ticket costs.</li>
                <li><strong>Poor navigation across non-responsive legacy portals</strong>, resulting in user time loss and fragmented trip planning.</li>
              </ul>
            </div>

            <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-3">
              <h3 className="font-bold text-slate-900 text-base font-serif-heading text-amber-900">
                Primary &amp; Secondary Objectives
              </h3>
              <div className="space-y-2 text-xs">
                <div>
                  <h4 className="font-semibold text-slate-900">Primary Goals:</h4>
                  <p className="text-slate-600">Deliver a single authoritative digital travel encyclopedia organizing destinations across all 28 states and 8 union territories.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Promote Lesser-Known Destinations:</h4>
                  <p className="text-slate-600">Spotlight offbeat gems (Ziro Valley, Living Root Bridges, Gandikota Gorge) to prevent overtourism and support rural economies.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Student &amp; Researcher Support:</h4>
                  <p className="text-slate-600">Provide standardized citation tools, downloadable JSON datasets, and UNESCO index tables for academic reference.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content Section 2: Scope of Work */}
      {activeSection === 'scope' && (
        <div className="space-y-6 text-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-emerald-50/50 rounded-xl border border-emerald-200/60 space-y-3">
              <h3 className="font-bold text-emerald-950 text-base font-serif-heading">
                In-Scope Deliverables (Fully Implemented)
              </h3>
              <ul className="space-y-2 text-xs text-emerald-900">
                <li className="flex items-start gap-1.5">
                  <span className="font-bold">✓</span>
                  <span><strong>State-wise &amp; City-wise Catalog:</strong> Hierarchical exploration across North, South, West, East, North-East, and Central zones.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="font-bold">✓</span>
                  <span><strong>Detailed Destination Factsheets:</strong> Historical background, best seasons, entry fees breakdown, transit instructions, and cuisine.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="font-bold">✓</span>
                  <span><strong>Instant Search &amp; Multi-Tier Filtering:</strong> Search by monument name, state, city, UNESCO status, or category.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="font-bold">✓</span>
                  <span><strong>Rich Photography Gallery:</strong> High-resolution curated media carousel with thumbnail navigation and photo counts.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="font-bold">✓</span>
                  <span><strong>Admin Management Console:</strong> Complete CRUD system to create, update, delete, verify, and export tourism entries.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="font-bold">✓</span>
                  <span><strong>Saved Travel Itinerary:</strong> Persistent bookmarking allowing travelers to curate routes and print travel itineraries.</span>
                </li>
              </ul>
            </div>

            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
              <h3 className="font-bold text-slate-800 text-base font-serif-heading">
                Out-of-Scope (Phase 1 Intentional Boundaries)
              </h3>
              <p className="text-xs text-slate-600">
                Per the PRD specification, transactional booking systems, live payment gateways, and social discussion feeds are intentionally deferred to future iterations:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600 list-disc list-inside">
                <li>Payment gateway processing (Razorpay, Stripe) for ticket purchases</li>
                <li>Live hotel room booking and real-time flight inventory</li>
                <li>Public user social media comment boards and star reviews</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Content Section 3: Architecture & Data Model */}
      {activeSection === 'architecture' && (
        <div className="space-y-6 text-xs text-slate-700">
          <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-4">
            <h3 className="font-bold text-slate-900 text-base font-serif-heading">
              Domain Entity Model (`TouristPlace`)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-slate-50 rounded-lg font-mono text-[11px] space-y-1 text-slate-800">
                <p className="font-bold text-amber-800">// Core Identification</p>
                <p>id: string (unique slug)</p>
                <p>name: string ("Taj Mahal")</p>
                <p>hindiName?: string ("ताज महल")</p>
                <p>state: string ("Uttar Pradesh")</p>
                <p>city: string ("Agra")</p>
                <p>zone: 'North'|'South'|'West'|'East'|'North-East'|'Central'|'Islands'</p>
                <p>category: 'Heritage'|'Nature'|'Spiritual'|'Adventure'|'Beaches'|'Offbeat'</p>
                <p>verified: boolean</p>
                <p>unescoSite?: boolean</p>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg font-mono text-[11px] space-y-1 text-slate-800">
                <p className="font-bold text-amber-800">// Temporal &amp; Logistics Attributes</p>
                <p>bestTimeToVisit: &#123; season, months, weatherDesc, peakMonths &#125;</p>
                <p>timings: string (hours of operation)</p>
                <p>entryFee: &#123; domestic, foreign, cameraFee, notes &#125;</p>
                <p>location: &#123; mapUrl, lat, lng, address &#125;</p>
                <p>nearbyAttractions: Array&lt;&#123; name, distance, type &#125;&gt;</p>
                <p>howToReach: &#123; airport, railway, road &#125;</p>
                <p>localCuisine: string[]</p>
                <p>tips: string[]</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content Section 4: KPIs & Roadmap */}
      {activeSection === 'kpis' && (
        <div className="space-y-6 text-xs text-slate-700">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <div className="text-xl font-bold font-mono text-slate-900">&le; 2.0s</div>
              <div className="font-semibold text-slate-800 mt-1">Page Load Time (KPI 1)</div>
              <p className="text-slate-500 mt-1">Instant client-side indexing and lazy image loading ensures ultra-fast navigation.</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <div className="text-xl font-bold font-mono text-emerald-700">&ge; 98%</div>
              <div className="font-semibold text-slate-800 mt-1">Content Accuracy Rate (KPI 2)</div>
              <p className="text-slate-500 mt-1">Verified against Archaeological Survey of India (ASI) and State Tourism Boards.</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <div className="text-xl font-bold font-mono text-amber-800">100%</div>
              <div className="font-semibold text-slate-800 mt-1">Mobile Responsiveness (KPI 3)</div>
              <p className="text-slate-500 mt-1">Fluid adaptability across 320px mobile viewports up to 1440px desktop displays.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
