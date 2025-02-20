import express from "express";
import userGet from "./src/controller/user data/user-get.js";
import userPost from "./src/controller/user data/user-post.js";
import DB from "./src/models/controller/test.js";

// "DB url - mongoDB" ++++> connecter ==>mongoose  === Schema(collection structure) ++++> server

const connectDb = (DB)

connectDb();

const app = express();
const port = 1000;
app.use(express.json());

app.get("/users", userGet)
app.post("/users", userPost)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
