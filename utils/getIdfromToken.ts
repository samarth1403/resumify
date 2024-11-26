import jwt from "jsonwebtoken";

export const getIdfromToken = (token: string) => {
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: string;
    };
    return decodedToken.userId;
  } catch (error) {
    return "";
  }
};
