import mongoose from 'mongoose';

const db_name = 'taskManagementDb'
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URL}/${db_name}`
        )
        console.log('MongoDB connected successfully', connectionInstance.connection.host)
  
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}
export default connectDB;