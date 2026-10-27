import dotenv from 'dotenv';
import { connectDB } from './db';
import { DestinationModel } from './models/Destination';
import { INITIAL_DESTINATIONS } from '../data/destinations';

dotenv.config();

async function seed() {
  console.log('[Seed] Connecting to MongoDB...');
  const conn = await connectDB();
  if (!conn) {
    console.error('[Seed] Could not connect to MongoDB. Check MONGODB_URI in your .env file.');
    process.exit(1);
  }

  try {
    console.log(`[Seed] Seeding ${INITIAL_DESTINATIONS.length} tourist places...`);
    let inserted = 0;
    let updated = 0;

    for (const place of INITIAL_DESTINATIONS) {
      const res = await DestinationModel.findOneAndUpdate(
        { id: place.id },
        { $set: place },
        { upsert: true, new: true }
      );
      if (res) {
        inserted++;
      }
    }

    console.log(`[Seed] Complete! Upserted ${inserted} records into MongoDB successfully.`);
    process.exit(0);
  } catch (err: any) {
    console.error(`[Seed] Error during seeding: ${err.message}`);
    process.exit(1);
  }
}

seed();
