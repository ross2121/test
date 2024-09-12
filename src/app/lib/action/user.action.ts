import User from "../models/user"
import { Connect } from "../db"
import { connect } from "http2"
export async function createuser(user:any){
    try {
        await Connect();
        const newuSer=await User.create(user);
        return JSON.parse(JSON.stringify(newuSer));

    } catch (error) {
        console.log(error);
    }
}