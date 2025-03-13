import jwt from "jsonwebtoken";

export const authorizationMiddleware = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.json({ message: "unauthorized!!!" });

  const token = authorization.split(" ")[1];
  console.log("Generate Token:", token);

  try {
    jwt.verify(token, "secret key");
    next();
  } catch (err) {
    return res.json({ message: "unauthorized!" });
  }
};
