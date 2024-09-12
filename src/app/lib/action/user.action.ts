"use server";
import User from "../models/user";
import { Connect } from "../db";
interface UserType {
  name: string;
  email: string;
  password: string
}

export async function createUser(user: UserType) {
  try {
    await Connect();
    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}
