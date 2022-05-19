import express from 'express';
import User from '../Models/UserModel.js';
import { protect } from "../Middleware/AuthMiddleware.js";
import { asyncHandler } from "../Middleware/AsyncHandler.js";

const userRouter = express.Router();

// GET /api/users/:id
userRouter.get("/:id", protect, asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).populate({
        path: "company",
        populate: {
            path: "cheque",
            model: "Cheque",
        },
    });
    if (!user) {
        return res.status(404).send("User not found");
    }
    res.status(200).json(user);
}));

export default userRouter;

/**
 * Routes API USER
 * 1. GET /api/users/:id => Get All Data about Company => Get All Data Cheque populate
 */