const NODE_ENV = process.env.NODE_ENV;
const isProduction = NODE_ENV === "production";
// const isDevelopment = NODE_ENV === "development";

export async function errorHandler(err, req, res, next) {
  console.error("Error:", err.message);
  res.status(500).json({
    message: "Internal Server Error",
    error: isProduction
      ? "Something went wrong. Please try again later."
      : err.message,
  });
  // note: no `next()` here
}
