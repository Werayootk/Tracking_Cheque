import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
    },
    companyAddress: {
        type: String,
        default: "",
    },
    companyPhone: {
        type: String,
        default: "",
    },
    cheque: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cheque",
    }]
}, { timestamps: true });

const Company = mongoose.model("Company", companySchema);

export default Company;

/**
 * Entity: Company
 * 1. companyName : string, required, unique
 * 2. companyAddress : string, default ""
 * 3. companyPhone : string, default "", valid phone
 * 4. chequeId : number, ref Cheque
 */