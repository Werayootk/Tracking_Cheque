import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const userSchema = new mongoose.Schema({}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;

/**
 * Entity: User
 * 1. name : string, required, unique
 * 2. email : string, required, unique, valid email
 * 3. password : string, required, min 6 chars, hashed
 * 4. role : string, required, default "user"
 * 5. companyId : number, ref Company
 */