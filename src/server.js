import express from "express";
import "dotenv/config";
import cors from "cors";
import dns from "node:dns";

// .js extension is needed!
import { connectMongoDB } from "./db/connectMongoDB.js";

import { Student } from "./models/student.js";

import { errorHandler } from "./middleware/errorHandler.js";
import { notFoundHandler } from "./middleware/notFoundHandler.js";
import { logger } from "./middleware/logger.js";

const PORT = Number(process.env.PORT) || 3000;

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger);

const usersList = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

// my logs
app.use((req, res, next) => {
  const time = new Date().toLocaleString();
  console.log(time, req.hostname, req.method, req.path);
  next();
});

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello world",
  });
});

app.get("/users", (req, res) => {
  res.status(200).json(usersList);
});

app.get("/users/:userId", (req, res) => {
  const id = Number(req.params.userId);
  const user = usersList.find((user) => user.id === id);
  res.status(200).json(user);
});

app.post("/users", (req, res) => {
  const user = req.body;

  const idList = usersList.map((user) => user.id);
  const nextId = Math.max(...idList) + 1;
  const newUser = { ...user, id: nextId };
  usersList.push(newUser);

  res.status(200).json(newUser);
});

app.get("/students", async (req, res) => {
  const students = await Student.find();
  res.status(200).json(students);
});

app.get("/students/:id", async (req, res) => {
  const { id } = req.params;
  const student = await Student.findById(id);
  if (!student) {
    // // common version
    // return res.status(404).json({
    //   message: "Student not found",
    // });
    // step-by-step version
    res.status(404).json({
      message: "Student not found",
    });
    return; // stop function
  }

  res.status(200).json(student);
});

app.get("/test-error", (req, res) => {
  throw new Error("(Example) Something went wrong");
});

app.use(notFoundHandler);

// there is error handling but by defaut it returns html with stacktrace
// but this is json api and also hiding stacktrace is better
app.use(errorHandler);

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
