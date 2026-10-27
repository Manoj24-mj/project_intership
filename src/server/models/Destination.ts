import mongoose, { Schema, Document } from 'mongoose';

export interface IDestination extends Document {
  id: string;
  name: string;
  hindiName?: string;
  state: string;
  city: string;
  zone: string;
  category: string;
  description: string;
  historicalSignificance: string;
  bestTimeToVisit: {
    season: string;
    months: string;
    weatherDesc: string;
    peakMonths: string[];
  };
  timings: string;
  entryFee: {
    domestic: string;
    foreign: string;
    cameraFee?: string;
    notes?: string;
  };
  location: {
    mapUrl: string;
    lat: number;
    lng: number;
    address: string;
  };
  images: string[];
  nearbyAttractions: Array<{
    name: string;
    distance: string;
    type: string;
  }>;
  howToReach: {
    airport: string;
    railway: string;
    road: string;
  };
  localCuisine: string[];
  highlights: string[];
  tips: string[];
  isOffbeat: boolean;
  verified: boolean;
  officialWebsite?: string;
  idealTripDuration: string;
  unescoSite?: boolean;
}

const DestinationSchema = new Schema<IDestination>(
  {
    id: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true, index: true },
    hindiName: { type: String },
    state: { type: String, required: true, index: true },
    city: { type: String, required: true, index: true },
    zone: { type: String, required: true, index: true },
    category: { type: String, required: true, index: true },
    description: { type: String, required: true },
    historicalSignificance: { type: String, default: '' },
    bestTimeToVisit: {
      season: { type: String, default: 'October to March' },
      months: { type: String, default: 'Winter' },
      weatherDesc: { type: String, default: '' },
      peakMonths: [{ type: String }],
    },
    timings: { type: String, default: 'Sunrise to Sunset' },
    entryFee: {
      domestic: { type: String, default: 'Free' },
      foreign: { type: String, default: 'Free' },
      cameraFee: { type: String },
      notes: { type: String },
    },
    location: {
      mapUrl: { type: String, default: '' },
      lat: { type: Number, default: 20.5937 },
      lng: { type: Number, default: 78.9629 },
      address: { type: String, default: '' },
    },
    images: [{ type: String }],
    nearbyAttractions: [
      {
        name: { type: String },
        distance: { type: String },
        type: { type: String },
      },
    ],
    howToReach: {
      airport: { type: String, default: '' },
      railway: { type: String, default: '' },
      road: { type: String, default: '' },
    },
    localCuisine: [{ type: String }],
    highlights: [{ type: String }],
    tips: [{ type: String }],
    isOffbeat: { type: Boolean, default: false },
    verified: { type: Boolean, default: true },
    officialWebsite: { type: String },
    idealTripDuration: { type: String, default: '1 Day' },
    unescoSite: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const DestinationModel =
  mongoose.models.Destination || mongoose.model<IDestination>('Destination', DestinationSchema);
