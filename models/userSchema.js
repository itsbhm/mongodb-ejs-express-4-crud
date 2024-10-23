import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    'name': {
        type:String,
        require:true
    },
    'city': {
        type:String,
        require:true
    },
    'email':{
        type:String,
        require:true
    },
    'contact':{
        type:String,
        require:true
    }
});


const userModel = new mongoose.model('crud', userSchema);

export default userModel;