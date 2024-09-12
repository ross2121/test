import mongoose, { Mongoose } from "mongoose";
const MONGO_URL: string | undefined = process.env.MONGO_URL;
if (!MONGO_URL) {
    throw new Error("Please define the MONGO_URL environment variable.");
}
interface Cached {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

declare global {
    var mongoose: Cached;
}

const cached: Cached = global.mongoose || { conn: null, promise: null };
global.mongoose = cached;

export const Connect = async (): Promise<Mongoose> => {
    if (cached.conn) return cached.conn;
    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGO_URL, {
            dbName: "Video calling app",
            bufferCommands: false,
            connectTimeoutMS: 3000,
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
};
