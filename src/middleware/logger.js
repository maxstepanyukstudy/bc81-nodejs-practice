import pino from "pino-http";

export const logger = pino({
  level: "info",
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      translateTime: "yyyy-mm-dd HH:MM:ss",
      ignore: "pid",
      hideObject: true,
      messageFormat:
        "{req.method} {req.url} {res.statusCode} - {responseTime}ms",
    },
  },
});
