const NODE_ENV = process.env.NODE_ENV;
const isProduction = NODE_ENV === "production";
// const isDevelopment = NODE_ENV === "development";

export function errorHandler(err, req, res, next) {
  const status = err.status || 500;
  console.error("Error:", status, err.message);
  res.status(status).json({
    message: "Internal Server Error",
    error: isProduction
      ? "Something went wrong. Please try again later."
      : err.message,
  });
  // note: no `next()` here
}
