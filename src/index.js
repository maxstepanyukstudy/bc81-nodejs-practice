import express from "express";
import cors from "cors";

const message = "Hello world";
console.log(message);
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());

const usersList = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

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

app.get("/test-error", (req, res) => {
  throw new Error("(Example) Something went wrong");
});

app.use((req, res) => {
  console.log("Route not found");
  res.status(404).json({ message: "Route not found" });
});

// there is error handling but by defaut it returns html with stacktrace
// but this is json api and also hiding stacktrace is better
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({
    message: "Internal Server Error",
    error: err.message,
  });
  // note: no `next()` here
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
