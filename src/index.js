import "dotenv/config";
import app from "./app.js";
import connectDB from "./config/database.js";

// Server port
const PORT = process.env.PORT || 4000;

// Connect database and start server
const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

    } catch (error) {
        console.log("Server startup failed:", error.message);
        process.exit(1);
    }
};

startServer();