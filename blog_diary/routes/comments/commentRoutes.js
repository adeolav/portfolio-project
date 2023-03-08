const express = require('express');
const { commentCtrl, commentIdCtrl, commentDeleteCtrl, commentUpdateCtrl } = require('../../controllers/comments/commentCtrl');


const commentRouter = express.Router();

//Post/api/v1.0.0/comments
commentRouter.post('/', commentCtrl);


//Get/api/v1.0.0/comment/:id
commentRouter.get("/:id", commentIdCtrl);

//Delet/api/v1.0.0/comment/:id
commentRouter.delete("/:id", commentDeleteCtrl);

//Put/api/v1.0.0/comment/:id
commentRouter.put("/:id", commentUpdateCtrl);


module.exports = commentRouter;
