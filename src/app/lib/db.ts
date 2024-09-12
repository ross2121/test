import mongoose,{Mongoose} from "mongoose";
const MONGO_URL:any=process.env.MONGO_URL
interface Mongooses{
    conn:Mongoose|null,
promise:Promise<Mongoose>|null,
}
let cached:Mongooses=(global as any).mongoose;
if(!cached){
    cached=(global as any).mongoose={
        conn:null,
        promise:null,
    }
}
export const Connect=async()=>{
    if(cached.conn)return cached.conn;
    cached.promise=cached.promise||mongoose.connect(MONGO_URL,{
        dbName:"Video calling app",
        bufferCommands:false,
        connectTimeoutMS:3000,
    });
    cached.conn=await cached.promise;
}
