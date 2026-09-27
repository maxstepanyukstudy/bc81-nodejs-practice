import { Router } from "express";

const usersRouter = Router();

const usersList = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

usersRouter.get("/users", (req, res) => {
  res.status(200).json(usersList);
});

usersRouter.get("/users/:userId", (req, res) => {
  const id = Number(req.params.userId);
  const user = usersList.find((user) => user.id === id);
  res.status(200).json(user);
});

usersRouter.post("/users", (req, res) => {
  const user = req.body;

  const idList = usersList.map((user) => user.id);
  const nextId = Math.max(...idList) + 1;
  const newUser = { ...user, id: nextId };
  usersList.push(newUser);

  res.status(200).json(newUser);
});

export default usersRouter;
