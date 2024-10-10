import mongoose, { Connection } from "mongoose";

export const dbConnection = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGODB_URL! || "");

    const connection: Connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Connected to database");
    });

    connection.on("error", (error: Error) => {
      console.log("Error connecting to database");
      console.log(error.message);
      process.exit();
    });

    process.on("SIGINT", async () => {
      await connection.close();
      console.log("MongoDB connection closed due to application termination");
      process.exit(0);
    });

    process.on("SIGTERM", async () => {
      await connection.close();
      console.log("MongoDB connection closed due to application termination");
      process.exit(0);
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("Error connecting to database");
      console.log(error.message);
    } else {
      console.log("Unknown error occurred");
    }
  }
};
