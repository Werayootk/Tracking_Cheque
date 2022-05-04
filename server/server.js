/**
 * Routes API ADMIN
 * 1. GET /api/admin/users
 * 2. GET /api/admin/users/:id
 * 3. DELETE /api/admin/users/:id/delete
 * 4. PUT /api/admin/users/:id/update
 * 5. POST /api/admin/users/create
 * 
 * 6. GET /api/companies
 * 7. GET /api/companies/:id
 * 8. POST /api/companies/create
 * 9. PUT /api/companies/:id/update
 * 10. DELETE /api/companies/:id/delete
 * 
 * 11. GET /api/cheques
 * 12. GET /api/cheques/:id
 * 13. POST /api/cheques/create
 * 14. PUT /api/cheques/:id/update
 * 15. DELETE /api/cheques/:id/delete
 */

/**
 * Routes API USER
 * 16. GET /api/users/:id
 * 17. GET /api/users/:id/cheques
 */
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import connectDatabase from './config/MongoDb.js';
import { errorHandler, notFound } from './Middleware/Errors.js';

dotenv.config();
connectDatabase();
const app = express();
app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));
app.use(express.json());
  
// API ADMIN


// API USER


// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3002;

app.listen(PORT, console.log(`server started on port ${PORT}`));