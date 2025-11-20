const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://tharunyetti24:<Tharun@mongodb1>@cluster0.yzi6k.mongodb.net/");
    console.log("MongoDB successfully connected");
  } catch (err) {
    console.log("Database connection error:", err);
  }
};

module.exports = connectDB;