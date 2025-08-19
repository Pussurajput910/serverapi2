const mongoose = require("mongoose");

const connectDB = async () => {
  return mongoose.connect(process.env.Live_url)

    .then(() => {
      console.log("Database Connection successful");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connectDB;
