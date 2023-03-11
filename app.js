import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-route";

const app = express();
// to get json data 
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);
mongoose
    .connect(
        "mongodb+srv://chavi5050chauhan:cTIkUCNEJ0tre4su@cluster0.vmkdde2.mongodb.net/Blogs?retryWrites=true&w=majority"
    )
    .then(() => app.listen(2000))
    .then(() => console.log("Connected to db on 2000 port")
    )
    .catch((err) => console.log(err));
// cTIkUCNEJ0tre4su
