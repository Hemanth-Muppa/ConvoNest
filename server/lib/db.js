import mongoose from "mongoose";
import "dotenv/config";

export const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/chat-app`);
        console.log('Database Connected');
    } catch (error) {
        console.log(error);
    }
};