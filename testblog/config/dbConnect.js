const mongoose = require("mongoose");

//function to connect

const dbConnect = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.createConnection(process.env.MONGODB_URL);
    console.log("DB connected Successfully");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

dbConnect();
