import mongoose from "mongoose";
const connectDB = async () => {
    const connect = await mongoose.connect("YOUR-DB-STRING-HERE/my_mdb_app");
    if(connect) {
        console.log("DB Connected");
    }else{
        console.log("DB Connection Failed ...!");
    }
}

export default connectDB;