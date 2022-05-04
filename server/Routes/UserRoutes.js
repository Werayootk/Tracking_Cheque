import express from 'express';
import asyncHandler from 'express-async-handler';
import { protect, admin } from '../Middleware/AuthMiddleware';
import generateToken from '../utils/generateToken';
import User from '../Models/UserModel';

const userRouter = express.Router();

export default userRouter;