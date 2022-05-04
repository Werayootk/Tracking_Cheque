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
