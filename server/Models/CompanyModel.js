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
