import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
    console.error("MongoDB connection error: MONGO_URI is not defined.");
    process.exit(1);
}

// ✅ Fix: Remove deprecated options
mongoose.connect(mongoURI)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
