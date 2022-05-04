import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../Models/UserModel';

const protect = asyncHandler(async (req, res, next) => { 
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            console.error(error);
            res.status(401).send('Unauthorized, token failed');
            throw new Error("Unauthorized, token failed");
        }
    }
    if(!token) {
        res.status(401).send('Unauthorized, no token');
        throw new Error("Unauthorized, no token");
    }
});

const admin = (req, res, next) => {
    if (req.user.role === 'admin') {
        next();
    } else {
        res.status(401).send('Unauthorized, not admin');
        throw new Error("Unauthorized, not admin");
    }
};

export { protect, admin };