import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

function getCleanURI(): string {
  let uri = (process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/travelbharat').trim();
  if ((uri.startsWith('"') && uri.endsWith('"')) || (uri.startsWith("'") && uri.endsWith("'"))) {
    uri = uri.slice(1, -1).trim();
  }
  return uri;
}

let isConnected = false;

export async function connectDB(): Promise<typeof mongoose | null> {
  if (isConnected) {
    return mongoose;
  }

  const uri = getCleanURI();

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 8000,
    });
    isConnected = true;
    console.log(`[MongoDB] Connected successfully to: ${conn.connection.host}/${conn.connection.name}`);
    return conn;
  } catch (err: any) {
    console.warn(`[MongoDB] Connection warning (running in offline/local-storage mode): ${err.message}`);
    return null;
  }
}

export function getDBStatus(): { isConnected: boolean; uri: string } {
  const uri = getCleanURI();
  return {
    isConnected,
    uri: uri.replace(/:([^@]+)@/, ':****@'), // masked for security
  };
}
