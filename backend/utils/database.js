const mongoose = require("mongoose");
const dotenv = require('dotenv')

dotenv.config({
    path: "../.env"
});

const databaseConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1); // Exit process with failure
    }
};

module.exports = databaseConnection;
