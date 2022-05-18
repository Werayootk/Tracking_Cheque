import express from "express";
import Cheque from "../Models/ChequeModel.js";
import { admin, protect } from "../Middleware/AuthMiddleware.js";
import { asyncHandler } from "../Middleware/AsyncHandler.js";

const chequeRouter = express.Router();

// Create Cheque
chequeRouter.post("/create", protect, admin, asyncHandler(async (req, res) => {
    const { chequeNumber, chequeDate, chequeAmount, chequeStatus, getChequeDate, getChequePlace, getChequeDueDate } = req.body;
    const cheque = await Cheque.create({
        chequeNumber,
        chequeDate,
        chequeAmount,
        chequeStatus,
        getChequeDate,
        getChequePlace,
        getChequeDueDate,
    });
    res.status(201).json({
        _id: cheque._id,
        chequeNumber: cheque.chequeNumber,
        chequeDate: cheque.chequeDate,
        chequeAmount: cheque.chequeAmount,
        chequeStatus: cheque.chequeStatus,
        getChequeDate: cheque.getChequeDate,
        getChequePlace: cheque.getChequePlace,
        getChequeDueDate: cheque.getChequeDueDate,
    });
}));

// Get Cheque
chequeRouter.get("/", protect, admin, asyncHandler(async (req, res) => {
    const cheques = await Cheque.find();
    if (!cheques) {
        res.status(404).json({ message: "No cheques found" });
        throw new Error("No cheques found");
    }
    res.status(200).json(cheques);    
}));

// Get Cheque by ID
chequeRouter.get("/:id", protect, admin, asyncHandler(async (req, res) => {
    const cheque = await Cheque.findById(req.params.id);
    if (!cheque) {
        res.status(404).json({ message: "Cheque not found" });
        throw new Error("Cheque not found");
    }
    res.status(200).json(cheque);
}));

// Update Cheque
chequeRouter.put("/:id/update", asyncHandler(async (req, res) => {
    const cheque = await Cheque.findById(req.params.id);
    if (!cheque) {
        res.status(404).json({ message: "Cheque not found" });
        throw new Error("Cheque not found");
    }
    const { chequeNumber, chequeDate, chequeAmount, chequeStatus, getChequeDate, getChequePlace, getChequeDueDate } = req.body;
    cheque.chequeNumber = chequeNumber || cheque.chequeNumber;
    cheque.chequeDate = chequeDate || cheque.chequeDate;
    cheque.chequeAmount = chequeAmount || cheque.chequeAmount;
    cheque.chequeStatus = chequeStatus || cheque.chequeStatus;
    cheque.getChequeDate = getChequeDate || cheque.getChequeDate;
    cheque.getChequePlace = getChequePlace || cheque.getChequePlace;
    cheque.getChequeDueDate = getChequeDueDate || cheque.getChequeDueDate;
    await cheque.save();
    res.status(200).json(cheque);
}));

// Delete Cheque
chequeRouter.delete("/:id/delete", protect, admin, asyncHandler(async (req, res) => {
    const cheque = await Cheque.findById(req.params.id);
    if (!cheque) {
        res.status(404).json({ message: "Cheque not found" });
        throw new Error("Cheque not found");
    }
    await cheque.remove();
    res.status(200).json({ message: "Cheque deleted" });
}));

export default chequeRouter;
