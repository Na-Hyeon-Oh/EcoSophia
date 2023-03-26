import dotenv from "dotenv";

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();
if(envFound.error) {
    // crash whole process
    throw new Error("️  Couldn't find .env file    ");
}

export default {
    port: parseInt(process.env.PORT as string, 10) as number,
    //mongoURI: process.env.MONGODB_URI as string,
};