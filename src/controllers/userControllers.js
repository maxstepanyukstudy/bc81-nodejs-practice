import { usersList } from "../db/usersList.js";

export async function getAllUsers(req, res) {
  res.status(200).json(usersList);
}

export async function getUserById(req, res) {
  const id = Number(req.params.userId);
  const user = usersList.find((user) => user.id === id);
  res.status(200).json(user);
}

export async function addUser(req, res) {
const user = req.body;

  const idList = usersList.map((user) => user.id);
  const nextId = Math.max(...idList) + 1;
  const newUser = { ...user, id: nextId };
  usersList.push(newUser);

  res.status(200).json(newUser);
}
