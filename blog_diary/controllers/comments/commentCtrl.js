//Comments
const commentCtrl = async (req, res) =>{
    try {
        res.json({
            status: "success",
            data: "comment created",
        });
    } catch (error) {
        res.json(error.message);
    }
};


//CommentId
const commentIdCtrl = async (req, res) =>{
    try {
        res.json({
            status: "success",
            data: "comment route",
        });
    } catch (error) {
        res.json(error.message);
    }
};

//Delet
const commentDeleteCtrl =  async (req, res) =>{
    try {
        res.json({
            status: "success",
            data: "delete comment route",
        });
    } catch (error) {
        res.json(error.message);
    }
};

//Update
const commentUpdateCtrl =  async (req, res) =>{
    try {
        res.json({
            status: "success",
            data: "update comment route",
        });
    } catch (error) {
        res.json(error.message);
    }
};


module.exports = {
    commentCtrl,
    commentIdCtrl,
    commentDeleteCtrl,
    commentUpdateCtrl,
};
