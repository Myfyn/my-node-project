import express from "express";
//import { serverLogger } from "./middleware/middleware.js";
import router from './routes/test.routes.js'

const app = express();
app.use(express.json()); //middleware

//app.use(serverLogger());

app.get("/", (req, res) => {
  res.send("Hello, world");
});

// app.get("/api/hello", (req, res) => {
//   res.json({ message: "Hello from API" });
// });

// app.get("/api/movie/:id", (req, res) => {
//   const id = req.params.id;
//   console.log(req.query);
//   res.json({ message: "Hello, from our API", userId: id });
// });

// app.post("/api/movie", (req, res) => {
//   const user = req.body;
//   const result = { message: "User created" };
//   res.status(201).json({ ...user, ...result });
// });

app.use("/", router)

app.listen(3000, () => {
  console.log("Server run on http://localhost:3000");
});
