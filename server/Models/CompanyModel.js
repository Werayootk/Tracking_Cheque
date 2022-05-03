import mongoose from "mongoose";

const companySchema = new mongoose.Schema({}, { timestamps: true });

const Company = mongoose.model("Company", companySchema);

export default Company;

/**
 * Entity: Company
 * 1. companyName : string, required, unique
 * 2. companyAddress : string, default ""
 * 3. companyPhone : string, default "", valid phone
 * 4. chequeId : number, ref Cheque
 */