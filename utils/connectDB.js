import mongoose from "mongoose";

const connectDB = async() =>{
    try{
        const MONGODB_URI = "mongodb+srv://komalkhandelwal:komalkomal@cluster0.izn9ril.mongodb.net/?retryWrites=true&w=majority";
        await mongoose.connect(MONGODB_URI,{
            useNewUrlParser :true,
            useUnifiedTopology :true,
        });
        console.log('Database connected successfully');
    }
    catch(error){
        console.error('Failed to Connect to MongoDB' ,error);
        return;
    }
};
connectDB();
export default connectDB;
