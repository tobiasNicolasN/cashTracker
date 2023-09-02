import { TOKEN_SECRET } from "../config.js";
import jwt from "jsonwebtoken";

export function createAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, TOKEN_SECRET, { expiresIn: "1d" }, (error, token) => {
      if (error) reject(error);
      resolve(token);
    });
  });
}
