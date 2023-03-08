const express = require("express");
const userRouter = require("./routes/users/userRoutes");
const postRouter = require("./routes/posts/postRoutes");
const commentRouter = require("./routes/comments/commentRoutes");
const categoryRouter = require("./routes/categories/categoryRoutes");
const cors = require("cors")
require("dotenv").config();
require("./config/dbConnect");

const app = express();

//------------
//middlewares
//------------
app.use(express.json()); //pass incoming payload
app.use(express.urlencoded({ extended: true }));
app.use(cors());


//-------
//Routes
//--------

//-----------
//users route
//------------
app.use('/api/v1.0.0/users/', userRouter);

//------------
//posts route
//-------------
app.use('/api/v1.0.0/posts/', postRouter);

//--------------
//comments route
//--------------
app.use('/api/v1.0.0/comments/', commentRouter);

//---------------
//categories route
//---------------
app.use('/api/v1.0.0/categories/', categoryRouter);

//Error handlers middlewars

//Listen to server
const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log(`server is up and running on ${PORT}`));
