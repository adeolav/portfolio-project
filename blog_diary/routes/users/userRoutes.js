const express = require('express');
const { userRegisterCtrl, userLoginCtrl, userCtrl, userProfileCtrl, userDeleteCtrl, userUpdateCtrl,  } = require('../../controllers/users/userCtrl');


const userRouter = express.Router();

//Post/api/v1.0.0/users/register
userRouter.post("/register", userRegisterCtrl);

//Post/api/v1.0.0/users/login
userRouter.post("/login", userLoginCtrl);

//Get/api/v1.0.0/users/
userRouter.get('/', userCtrl);

//Get/api/v1.0.0/users/profile/:id
userRouter.get("/profile/:id", userProfileCtrl);

//Delete/api/v1.0.0/users/:id
userRouter.delete("/:id", userDeleteCtrl);

//Put/api/v1.0.0/users/:id
userRouter.put("/:id", userUpdateCtrl);

module.exports = userRouter;
