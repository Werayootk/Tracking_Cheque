import express from 'express';
import asyncHandler from 'express-async-handler';
import { protect, admin } from '../Middleware/AuthMiddleware';
import generateToken from '../utils/generateToken';
import Cheque from '../Models/ChequeModel';

const chequeRouter = express.Router();

export default chequeRouter;