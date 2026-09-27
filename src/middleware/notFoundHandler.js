import createHttpError from "http-errors";

export function notFoundHandler(req, res) {
  console.log("Route not found");
  throw new createHttpError(404, "Route not found");
}
