import express from "express";
import cors from "cors";
import connecToMongo from "./db.js";
import notesRoutes from "./Routes/notes.js";
import userRoutrs from "./Routes/user.js";

const PORT = process.env.PORT || 4545;
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1", notesRoutes);
app.use("/api/v1", userRoutrs);

// Connect to DB, then start server
const startServer = async () => {
  try {
    await connecToMongo(); // Wait for DB connection
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1); // Exit process on failure
  }
};

startServer();
