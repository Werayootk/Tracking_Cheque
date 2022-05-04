import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import connectDatabase from './config/MongoDb.js';
import { errorHandler, notFound } from './Middleware/Errors.js';
import userRouter from './Routes/UserRoutes.js';
import adminRouter from './Routes/AdminRoutes.js';
import companyRouter from './Routes/CompanyRoutes.js';
import chequeRouter from './Routes/ChequeRoutes.js';

dotenv.config();
connectDatabase();
const app = express();
app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));
app.use(express.json());
  
// API ADMIN
app.use("/api/admin", adminRouter);
app.use("/api/companies", companyRouter);
app.use("/api/cheques", chequeRouter);
// API USER
app.use("/api/users", userRouter);

// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3002;

app.listen(PORT, console.log(`server started on port ${PORT}`));