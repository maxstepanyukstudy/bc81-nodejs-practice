export function notFoundHandler(req, res) {
  console.log("Route not found");
  res.status(404).json({ message: "Route not found" });
}
