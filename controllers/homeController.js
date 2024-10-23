import userModel from '../models/userSchema.js';

const homeController = async (req, res) => {
    console.log("Home Controller Fired");
    res.render("index");
}

// createController
const createController = async (req, res) => {
    // console.log(req.body);

    const record = await userModel({
        name:req.body.name,
        city:req.body.city,
        email:req.body.email,
        contact:req.body.contact
    });
    
    if(record){
        await record.save();
        console.log("Data Saved");
    }else{
        console.log("Data not Saved");
    }

    res.render("index");

}

export {homeController, createController}