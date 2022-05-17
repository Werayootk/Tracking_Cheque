import express from "express";
import Cheque from "../Models/ChequeModel.js";
import { admin, protect } from "../Middleware/AuthMiddleware.js";
import { asyncHandler } from "../Middleware/AsyncHandler.js";

const chequeRouter = express.Router();



export default chequeRouter;

/**
 * 1. GET /api/cheques
 * 2. GET /api/cheques/:id
 * 3. POST /api/cheques/create
 * 4. PUT /api/cheques/:id/update
 * 5. DELETE /api/cheques/:id/delete
 */
