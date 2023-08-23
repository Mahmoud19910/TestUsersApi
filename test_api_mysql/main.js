import express from "express";
import userRoute from "./routes/user_route.js";
import pareser from "body-parser";




// Create an instance of the Express application
const appExpress = express();

appExpress.use(pareser.json());
appExpress.use(pareser.urlencoded({extended:true}))
const PORT = process.env.PORT || 3000;


// Application Routes 
appExpress.use("/user" , userRoute );

appExpress.listen(PORT , () => console.log("This My Port Number " + PORT));
