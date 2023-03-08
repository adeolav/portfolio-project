const User = require("../../model/User/User");
const bcrypt = require('bcryptjs');
const generateToken = require("../../utils/generateToken");


//Register
const userRegisterCtrl = async (req, res) =>{
    const { username, firstname, lastname, profilePhoto, email, password} = req.body;
    try {
        //Check if username exist
        const userFound = await User.findOne({username});
        if (userFound){
            return res.json({
                msg: 'Username Alread Exist'
            })
        }
        //Check if email exist
        const userEmail = await User.findOne({email});
        if (userEmail){
            return res.json({
                msg: 'Email Alread Exist'
            })
        }
        
        // hash password

        //create the user
        const user = await User.create({
            username,
            firstname,
            lastname,
            email,
            password,
        });
        res.json({
            status: "success",
            data: user,
        });
    } catch (error) {
        res.json(error.message);
    }
};


//Login
const userLoginCtrl = async (req, res) =>{
    const { email, password, username } = req.body;
    try {
        //Check if email exist
        const userFound = await User.findOne({ email });
        const userNameMatched = await User.findOne({ username }); //validaity the Username
        const isPasswordMatched = await bcrypt.compare(
            password,
            userFound.password
          ); //verify password
        if (!userFound && !userNameMatched || !isPasswordMatched){
            return res.json({
                msg: "Login failed. Incorrect username/email",
            });
        }
        
      if (!isPasswordMatched) {
        if (!userFound) {
            return res.json({
                                 msg: "Wrong login credentials",
                             });
        }
      }
  
      res.json({
        status: "success",
        data: {
          firstname: userFound.firstname,
          lastname: userFound.lastname,
          email: userFound.email,
          isAdmin: userFound.isAdmin,
          token: generateToken(userFound._id),
        },
      });
    } catch (error) {
      next(appErr(error.message));
    }
};

//All users
const userCtrl = async (req, res) =>{
    try {
        res.json({
            status: "success",
            data: "all users route",
        });
    } catch (error) {
        res.json(error.message);
    }
};

//Profile
const userProfileCtrl = async (req, res) =>{
    try {
        res.json({
            status: "success",
            data: "profile route",
        });
    } catch (error) {
        res.json(error.message);
    }
};

//Delete
const userDeleteCtrl = async (req, res) =>{
    try {
        res.json({
            status: "success",
            data: "delete user route",
        });
    } catch (error) {
        res.json(error.message);
    }
};

//Update
const userUpdateCtrl = async (req, res) =>{
    try {
        res.json({
            status: "success",
            data: "update user route",
        });
    } catch (error) {
        res.json(error.message);
    }
};

module.exports = {
    userRegisterCtrl,
    userCtrl,
    userProfileCtrl,
    userLoginCtrl,
    userUpdateCtrl,
    userDeleteCtrl

};