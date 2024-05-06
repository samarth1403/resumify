import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export const getIdfromToken = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: string;
    };
    return decodedToken.userId;
  } catch (error) {
    return "";
  }
};
