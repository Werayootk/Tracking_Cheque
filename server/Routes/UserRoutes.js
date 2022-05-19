import express from 'express';
import User from '../Models/UserModel.js';
import { protect } from "../Middleware/AuthMiddleware.js";
import { asyncHandler } from "../Middleware/AsyncHandler.js";

const userRouter = express.Router();

export default userRouter;

/**
 * Routes API USER
 * 1. GET /api/users/:id => Get All Data about Company => Get All Data Cheque populate
 */