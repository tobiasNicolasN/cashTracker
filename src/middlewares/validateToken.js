import { TOKEN_SECRET } from "../config.js";
import jws from "jsonwebtoken";

export const validateToken = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: "No Token available" });

  jws.verify(token, TOKEN_SECRET, (error, user) => {
    if (error) return res.status(403).json({ message: "Invalid token" });

    req.user = user;

    next();
  });
};
