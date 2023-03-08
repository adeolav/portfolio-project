const express = require('express');
const { postCtrl, postIdCtrl, postDeleteCtrl, postUpdateCtrl } = require('../../controllers/posts/postCtrl');


const postRouter = express.Router();

//Post/api/v1.0.0/posts
postRouter.post('/', postCtrl);

//Get/api/v1.0.0/posts/:id
postRouter.get("/:id", postIdCtrl);

//Delet/api/v1.0.0/posts/:id
postRouter.delete("/:id", postDeleteCtrl);

//Put/api/v1.0.0/post/:id
postRouter.put("/:id", postUpdateCtrl);

module.exports = postRouter;
