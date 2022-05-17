import express from 'express';
import User from '../Models/UserModel.js';
import { admin, protect } from "../Middleware/AuthMiddleware.js";
import { asyncHandler } from "../Middleware/AsyncHandler.js";

const userRouter = express.Router();

export default userRouter;

/**
 * Routes API USER
 * 6. GET /api/users/:id
 * 7. GET /api/users/:id/cheques
 */