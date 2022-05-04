import express from 'express';
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../Models/UserModel.js';

const adminRouter = express.Router();
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// LOGIN
adminRouter.post('/login', asyncHandler(async (req, res) => { 
    const { emailOrUsername, password } = req.body;
    const isEmail = emailFormat.test(emailOrUsername);

    let user;
    if (isEmail) { 
        user = await User.findOne({ email: emailOrUsername });
    } else {
        user = await User.findOne({ username: emailOrUsername });
    }

    if (!user) { 
        res.status(400).json({ message: 'User not found' });
        throw new Error('User not found');
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) { 
        res.status(400).json({ message: 'Invalid credentials' });
        throw new Error('Invalid credentials');
    } else {
        return res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
            token: generateToken(user._id),
        });
    }
}));

// REGISTER
adminRouter.post('/register', asyncHandler(async (req, res) => { 
    const { username, email, password, role } = req.body;

    const userExistsEmail = await User.findOne({ email });
    const userExistsUsername = await User.findOne({ username });

    if (userExistsEmail) { 
        res.status(400).json({ message: 'Email already exists' });
        throw new Error("Email already exists");
    }

    if (userExistsUsername) { 
        res.status(400).json({ message: 'Username already exists' });
      throw new Error("Username already exists");

    }

    const user = await User.create({ username, email, password, role });

    if (user) {
        return res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
            token: generateToken(user._id),
        });
    } else {
        res.status(400).json({ message: 'User not created' });
        throw new Error("User not created");
    }
}));

export default adminRouter;

/**
 * Routes API ADMIN
 * 1. GET /api/admin/users
 * 2. GET /api/admin/users/:id
 * 3. DELETE /api/admin/users/:id/delete
 * 4. PUT /api/admin/users/:id/update
 * 5. POST /api/admin/users/create
 * 6. POST /api/admin/login
 * 7. POST /api/admin/register
 */

/**
 * Test cases:
 * 1. GET /api/admin/login
 * - login with username and password
 * - login with email and password
 * - login with invalid credentials
 * 2. GET /api/admin/register
 * - register with username, email, password, and role
 * - register with username, email, password, and invalid role
 */