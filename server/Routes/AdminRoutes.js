import express from "express";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../Models/UserModel.js";
import { admin, protect } from "../Middleware/AuthMiddleware.js";
import Company from "../Models/CompanyModel.js";

const adminRouter = express.Router();
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// LOGIN
adminRouter.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { emailOrUsername, password } = req.body;
    const isEmail = emailFormat.test(emailOrUsername);

    let user;
    if (isEmail) {
      user = await User.findOne({ email: emailOrUsername });
    } else {
      user = await User.findOne({ username: emailOrUsername });
    }

    if (!user) {
      res.status(400).json({ message: "User not found" });
      throw new Error("User not found");
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      res.status(400).json({ message: "Invalid credentials" });
      throw new Error("Invalid credentials");
    } else {
      return res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });
    }
  })
);

// REGISTER
adminRouter.post(
  "/register",
  asyncHandler(async (req, res) => {
    const { username, email, password, role } = req.body;

    const userExistsEmail = await User.findOne({ email });
    const userExistsUsername = await User.findOne({ username });

    if (userExistsEmail) {
      res.status(400).json({ message: "Email already exists" });
      throw new Error("Email already exists");
    }

    if (userExistsUsername) {
      res.status(400).json({ message: "Username already exists" });
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
      res.status(400).json({ message: "User not created" });
      throw new Error("User not created");
    }
  })
);

// GET ALL USERS
adminRouter.get("/users", protect, admin,asyncHandler(async (req, res) => { 
    const users = await User.find();
    return res.status(200).json(users);
}));

// GET USER BY ID
adminRouter.get("/users/:id", protect, admin, asyncHandler(async (req, res) => { 
    const user = await User.findById(req.params.id);
    if (user) {
        return res.status(200).json(user);
    } else { 
        res.status(400).json({ message: "User not found" });
        throw new Error("User not found");
    }
}));

// UPDATE USER BY ID
adminRouter.put("/users/:id/update", protect, admin, asyncHandler(async (req, res) => { 
    const user = await User.findById(req.params.id);
    if (user) { 
        const { username, email, role, password } = req.body;
        user.username = username || user.username;
        user.email = email || user.email;
        user.role = role || user.role;
        user.password = password || user.password;
        await user.save();
        return res.status(200).json(user);
    } else {
        res.status(400).json({ message: "User not found" });
        throw new Error("User not found");
    }
}));

// DELETE USER BY ID
adminRouter.delete("/users/:id", protect, admin, asyncHandler(async (req, res) => { 
    const user = await User.findById(req.params.id);
    if (user) { 
        await user.remove();
        return res.status(200).json({ message: "User deleted" });
    } else {
        res.status(400).json({ message: "User not found" });
        throw new Error("User not found");
    }
}));

// PUT Company to user
adminRouter.put("/users/:id/company", protect, admin, asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
        const { company } = req.body;
        const companies = await Company.find(company);
        user.company.push(companies);
        await user.save();
        return res.status(200).json(user);
    } else {
        res.status(400).json({ message: "User not found" });
        throw new Error("User not found");
    }
}));

export default adminRouter;