// // middleware/authenticate.ts

// import { Request, Response, NextFunction } from "express";
// import jwt from "jsonwebtoken";
// const JWT_SECRET = process.env.JWT_SECRET || "jwt_token";

// export const authenticate = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const token = req.cookies.access_token;
//   if (!token) {
//     return res.status(401).json({ message: "Not authenticated" });
//   }

//   try {
//     const decoded = jwt.verify(token, JWT_SECRET) as IUser;
//     req.user = decoded;
//     next();
//   } catch (error) {
//     return res.status(401).json({ message: "Invalid token" });
//   }
// };
