import express from "express";
import Company from "../Models/CompanyModel.js";
import { admin, protect } from "../Middleware/AuthMiddleware.js";
import { asyncHandler } from "../Middleware/AsyncHandler.js";

const companyRouter = express.Router();

// Create Company
companyRouter.post("/create", protect, admin, asyncHandler (async (req, res) => {
    const { companyName, companyAddress, companyPhone } = req.body;
    const company = await Company.create({
        companyName,
        companyAddress,
        companyPhone,
    });
    res.status(201).json({
        _id: company._id,
        companyName: company.companyName,
        companyAddress: company.companyAddress,
        companyPhone: company.companyPhone,
    });
}));

// Get Company
companyRouter.get("/", protect, admin, asyncHandler (async (req, res) => { 
    const companies = await Company.find();
    if (!companies) {
        res.status(404).json({ message: "No companies found" });
        throw new Error("No companies found");
    }
    res.status(200).json(companies);
}));

// Get Company by ID
companyRouter.get("/:id", protect, admin, asyncHandler (async (req, res) => {
    const company = await Company.findById(req.params.id);
    if (!company) { 
        res.status(404).json({ message: "Company not found" });
        throw new Error("Company not found");
    }
    res.status(200).json(company);
}));

// Update Company
companyRouter.put("/:id/update", asyncHandler (async (req, res) => {
    const company = await Company.findById(req.params.id);
    if (!company) {
        res.status(404).json({ message: "Company not found" });
        throw new Error("Company not found");
    }
    const { companyName, companyAddress, companyPhone } = req.body;
    company.companyName = companyName || company.companyName;
    company.companyAddress = companyAddress || company.companyAddress;
    company.companyPhone = companyPhone || company.companyPhone;
    await company.save();
    res.status(200).json(company);
}));

// Delete Company
companyRouter.delete("/:id/delete", protect, admin, asyncHandler(async (req, res) => {
    const company = await Company.findById(req.params.id);
    if (!company) {
        res.status(404).json({ message: "Company not found" });
        throw new Error("Company not found");
    };
    await company.remove();
    res.status(200).json({ message: "Company deleted" });
}));
export default companyRouter;
 