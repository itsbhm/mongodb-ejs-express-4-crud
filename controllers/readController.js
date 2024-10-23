import userModel from '../models/userSchema.js';
const readController = async (req, res) => {
    try {
        console.log("Read Controller Fired");
        const records = await userModel.find({});

        if (records){
            res.render("read", {'records': records});
        }else{
            res.render("read");
        }
    } catch (getError){
        console.log("Error: ", getError);
    }
}


export {readController}