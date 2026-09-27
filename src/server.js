import express from "express";
import "dotenv/config";
import cors from "cors";
import dns from "node:dns";

// .js extension is needed!
import { connectMongoDB } from "./db/connectMongoDB.js";

import { errorHandler } from "./middleware/errorHandler.js";
import { notFoundHandler } from "./middleware/notFoundHandler.js";
import { logger } from "./middleware/logger.js";
import studentsRouter from "./routes/studentsRouter.js";
import usersRouter from "./routes/usersRoute.js";

const PORT = Number(process.env.PORT) || 3000;

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const app = express();

app.use(logger);
app.use(
  express.json({
    type: [
      "application/json",
      // "application/vnd.api+json"
    ],
    limit: "100kb",
  }),
);
app.use(cors());

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

app.use("/users", usersRouter);
app.use("/students", studentsRouter);

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
