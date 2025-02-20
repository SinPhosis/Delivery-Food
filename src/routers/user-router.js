import { getUsers } from "../controller/get-user.js";
import { deleteUsers } from "../controller/delete-user.js";
import { createUsers } from "../controller/create-user.js";
import { putUsers } from "../controller/put-user.js";
import express from "express";
import bcrypt from "bcrypt";

const saltRounds = 10;

const testMiddleware = async (req, res, next) => {
    console.log("middleware works!");
    const cryptPassword = bcrypt.hashSync("test", saltRounds);
    const isPasswordMatching = await bcrypt.compare("test", isPasswordMatching);

    if (!isPasswordMatching) {
        res.status(400).json({ error: "Bad Request", message: "Something went wrong" });
    } else {
        next()
    }
};

export const userRouter = express.Router();
userRouter.get("/", getUsers);
userRouter.post("/", testMiddleware,createUsers);
userRouter.delete("/", deleteUsers);
userRouter.put("/", putUsers);