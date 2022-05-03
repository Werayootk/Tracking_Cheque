import mongoose from "mongoose";

const chequeSchema = new mongoose.Schema({
    chequeNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    chequeAmount: {
        type: Number,
        required: true,
    },
    chequeDate: {
        type: Date,
        required: true,
    },
    chequeStatus: {
        type: String,
        default: "pending",
    },
    getChequeDate: {
        type: Date,
        required: true,
    },
    getChequePlace: {
        type: String,
        required: true,
    },
    getChequeDueDate: {
        type: Date,
        required: true,
    }
}, { timestamps: true });

const Cheque = mongoose.model("Cheque", chequeSchema);

export default Cheque;

/**
 * Entity: Cheque
 * 1. chequeNumber : number, required, unique
 * 2. chequeAmount : number, required
 * 3. chequeDate : date, required
 * 4. chequeStatus : string, required, default "pending"
 * 5. getChequeDate : date, required 
 * 6. getChequePlace : string, required
 * 7. getChequeDueDate : date, required
 */