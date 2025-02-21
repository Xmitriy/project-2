const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // .env файлыг унших

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB холбогдлоо ✅");
  } catch (error) {
    console.error("MongoDB холбогдож чадсангүй ❌", error);
    process.exit(1);
  }
};

module.exports = connectDB;
