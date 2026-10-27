# Implementation Plan - TravelBharat Advanced Enhancements

## User Requirements & Clarifications
1. **Three.js 3D Scene**: Interactive 3D monument and landscape viewer using procedural geometries, PBR lighting, and damped OrbitControls.
2. **Firebase Auth & Firestore**: Connect Firebase for secure Google Sign-in and cloud persistence of saved user itineraries and custom notes.
3. **Gemini AI Image Generation & Editing**: AI travel poster and photo enhancer using `@google/genai` (Imagen / Gemini model).
4. **Google Maps Grounding**: Utilize Gemini with Google Maps tool / grounding where relevant for up-to-date destination facts and location context.

---

## Proposed Changes

### 1. Dependencies & Configuration
- Install `three`, `@types/three`, `firebase`.
- Update `.env.example` with Firebase config keys and Gemini API key.

### 2. Firebase & Firestore Integration
- Create `/src/firebase/config.ts` to initialize Firebase App, Auth (Google Auth Provider), and Firestore.
- Create a user context/hook to manage authenticated user state and sync user saved itineraries with Firestore.

### 3. Three.js 3D Monument & Landscape Viewer Component
- Create `/src/components/ThreeDViewer.tsx` featuring:
  - Composite 3-12 part procedural models representing iconic Indian monuments (Stupa / Temple dome structure with pillars and stepped bases).
  - Studio PBR lighting (`ACESFilmicToneMapping`, directional sun key light, hemisphere fill, soft radial shadows).
  - Smooth damped OrbitControls and 60fps lossless animation loop.
  - Floating control dock to customize lighting, wireframe, and camera rotation.

### 4. Gemini AI Travel Studio & Photo Editor Component
- Create `/src/components/AiStudioModal.tsx` leveraging `@google/genai` to:
  - Generate stunning AI travel posters and itineraries based on custom destination prompts.
  - Enhance and edit travel photographs with AI instructions.

### 5. Google Maps Grounding & AI Assistant Integration
- Create `/src/components/MapsGroundingAssistant.tsx` using `@google/genai` with Google Maps tool grounding to provide live travel recommendations, route directions, and local insights.

### 6. App Integration & UI Refinement
- Update `Header.tsx` to include Firebase Sign-In / User Profile avatar and new navigation tabs for the 3D Monument Viewer and AI Travel Studio.
- Update `App.tsx` and `TourismContext.tsx` to seamlessly integrate cloud persistence and new modals.
