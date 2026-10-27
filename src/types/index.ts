export type Zone = 
  | 'North' 
  | 'South' 
  | 'West' 
  | 'East' 
  | 'North-East' 
  | 'Central' 
  | 'Islands & UTs';

export type Category = 
  | 'Heritage & Culture'
  | 'Nature & Wildlife'
  | 'Religious & Spiritual'
  | 'Adventure & Hill Stations'
  | 'Beaches & Coastal'
  | 'Offbeat & Hidden Gems';

export interface EntryFee {
  domestic: string;
  foreign: string;
  cameraFee?: string;
  notes?: string;
}

export interface BestTimeToVisit {
  season: string;
  months: string;
  weatherDesc: string;
  peakMonths: string[];
}

export interface LocationInfo {
  mapUrl: string;
  lat: number;
  lng: number;
  address: string;
}

export interface NearbyAttraction {
  name: string;
  distance: string;
  type: string;
}

export interface HowToReach {
  airport: string;
  railway: string;
  road: string;
}

export interface TouristPlace {
  id: string;
  name: string;
  hindiName?: string;
  state: string;
  city: string;
  zone: Zone;
  category: Category;
  description: string;
  historicalSignificance: string;
  bestTimeToVisit: BestTimeToVisit;
  timings: string;
  entryFee: EntryFee;
  location: LocationInfo;
  images: string[];
  nearbyAttractions: NearbyAttraction[];
  howToReach: HowToReach;
  localCuisine: string[];
  highlights: string[];
  tips: string[];
  isOffbeat: boolean;
  verified: boolean;
  officialWebsite?: string;
  idealTripDuration: string;
  unescoSite?: boolean;
}

export interface StateInfo {
  name: string;
  code: string;
  capital: string;
  zone: Zone;
  tagline: string;
  description: string;
  heroImage: string;
  culturalHighlights: string[];
  placesCount?: number;
}

export type ActiveTab = 'explore' | 'states' | 'hiddengems' | 'analytics' | 'research' | 'admin' | 'saved' | 'docs';
