import express from "express";
import UserController from "../controllers/user_controllers.js";

const user_Express = express.Router();

user_Express.get("/", UserController.getAllUsers);
user_Express.post("/addUser", UserController.newUser);
user_Express.delete("/deleteId/:id", UserController.deleteUserById); // Add this line for the POST request
    user_Express.patch("/updated/:id" , UserController.updateUser);
    user_Express.get("/search/:character" , UserController.search);

 // Add this line for the POST request




export default user_Express;
