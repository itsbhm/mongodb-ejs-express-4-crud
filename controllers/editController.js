import userModel from "../models/userSchema.js";

// editController
const editController = async (req, res) => {
    try {
        console.log("Edit Controller Fired");
        // console.log(req.params.id);

        const record = await userModel.findById({ '_id': req.params.id });

        if (record) {
            res.render("edit", { 'record': record });
        } else {
            res.render("edit");
        }

    } catch (getError) {
        console.log("Error: ", getError);
    }
}

// updateController
const updateController = async (req, res) => {
    try {
        console.log("Delete Controller Fired");
        const updatedRecord = await userModel.findByIdAndUpdate(req.params.id, req.body);

        if (updatedRecord) {
            res.redirect('/');
        } else {
            res.redirect('/read');
        }
    } catch (getError){
        console.log("Error: ", getError);
    }
}

// deleteController
const deleteController = async (req, res) => {
    try {
        console.log("Update Controller Fired");
        const deletedRecord = await userModel.findByIdAndDelete(req.params.id);

        if (deletedRecord) {
            res.redirect('/');
        } else {
            res.redirect('/read');
        }
    } catch (getError){
        console.log("Error: ", getError);
    }
}


export { editController, updateController, deleteController}