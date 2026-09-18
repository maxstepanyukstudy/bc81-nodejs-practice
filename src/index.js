import express from "express";

const message = "Hello world";
console.log(message);
const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  console.log("hostname:", req.hostname);
  res.status(200).json({
    message: "Hello world",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
