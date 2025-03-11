import jwt from "jsonwebtoken";

export const authorizationMiddleware = (req, res, next) => {
  const { authorization } = req.headers; // Fixed: req.headers, not req.header

  if (!authorization) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  // Check if the header starts with "Bearer " and extract the token
  if (!authorization.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Unauthorized: Invalid token format" });
  }

  const token = authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: Token missing" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "nuuts"); // Use env variable
    req.user = decoded; // Optionally attach decoded data (e.g., user ID) to req
    next();
  } catch (err) {
    return res
      .status(401)
      .json({ message: "Unauthorized: Invalid or expired token" });
  }
};
