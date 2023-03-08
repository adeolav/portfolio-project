//Post
const postCtrl = async (req, res) =>{
    try {
        res.json({
            status: "success",
            data: "post created",
        });
    } catch (error) {
        res.json(error.message);
    }
};

//Posts/:id
const postIdCtrl = async (req, res) =>{
    try {
        res.json({
            status: "success",
            data: "post route",
        });
    } catch (error) {
        res.json(error.message);
    }
};

//Delet
const postDeleteCtrl = async (req, res) =>{
    try {
        res.json({
            status: "success",
            data: "delete posts route",
        });
    } catch (error) {
        res.json(error.message);
    }
};

//Update
const postUpdateCtrl = async (req, res) =>{
    try {
        res.json({
            status: "success",
            data: "update post route",
        });
    } catch (error) {
        res.json(error.message);
    }
};

module.exports = {
    postCtrl,
    postIdCtrl,
    postDeleteCtrl,
    postUpdateCtrl,
};
