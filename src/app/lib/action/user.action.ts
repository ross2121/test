"use server";
import User from "@/app/lib/models/user.modal";
import { connect } from "@/app/lib/db";
interface User{
    name:string,
    email:string,
    Password:string
}

export async function createUser(user:User) {
  try {
    await connect();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}
