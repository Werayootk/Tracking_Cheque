import express from 'express';
import asyncHandler from 'express-async-handler';
import { protect, admin } from '../Middleware/AuthMiddleware';
import generateToken from '../utils/generateToken';
import Company from '../Models/CompanyModel';

const companyRouter = express.Router();

export default companyRouter;