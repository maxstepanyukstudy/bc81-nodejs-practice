import express from "express";

const message = "Hello world";
console.log(message);
const PORT = 3000;

const app = express();

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
