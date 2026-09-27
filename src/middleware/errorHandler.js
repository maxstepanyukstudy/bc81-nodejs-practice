import { HttpError } from "http-errors";

const NODE_ENV = process.env.NODE_ENV;
const isProduction = NODE_ENV === "production";
// const isDevelopment = NODE_ENV === "development";

export function errorHandler(err, req, res, next) {
  const status = err.status || 500;
  console.error("Error:", status, err.message);

  if (err instanceof HttpError) {
    return res.status(status).json({
      message: err.message,
    });
  }

  res.status(status).json({
    message: isProduction
      ? "Something went wrong. Please try again later."
      : err.message,
  });
  // note: no `next()` here
}
