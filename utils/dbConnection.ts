import mongoose, { Connection } from "mongoose";

export const dbConnection = async (): Promise<void> => {
  try {
    const url = process.env.MONGODB_URL;

    if (!url) {
      throw new Error("MONGODB_URL environment variable is not defined.");
    }

    console.log(` Attempting to connect to MongoDB with URL: ${url}`);

    await mongoose.connect(url, {
      // Optional: Add mongoose connection options if needed
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });

    const connection: Connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Connected to database");
    });

    connection.on("error", (error: Error) => {
      console.error("Error connecting to database");
      console.error(error.message);
      process.exit(1); // Use non-zero exit code for errors
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
      console.error("Error connecting to database");
      console.error(error.message);
    } else {
      console.error("Unknown error occurred");
    }
    process.exit(1); // Exit with failure
  }
};
