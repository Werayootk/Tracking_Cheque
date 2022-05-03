import mongoose from "mongoose";

const connectDatabase = async () => {
    try {
        const DATABASE_MONGO_URL = process.env.MONGO_URL;
        const connection = await mongoose.connect(DATABASE_MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    
        console.log(`MongoDB Connected: ${connection.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDatabase;