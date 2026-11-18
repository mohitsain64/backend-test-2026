import express from "express";

import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";

// Create Express application
const app = express();

// Read JSON request data
app.use(express.json());

// User API routes
app.use("/api/users", userRoutes);

// Post API routes
app.use("/api/posts", postRoutes);

// Home route
app.get("/", (req, res) => {
    res.send("Backend API is running successfully!");
});

export default app;