const mongoose = require("mongoose");
const uri =
  "mongodb+srv://maheshnaik:DuhcqMuPkXHgfNGv@maheshnaik.ujhjf6i.mongodb.net/test";

const connectDB = async () => {
  await mongoose
    .connect(uri)
    .then(() => {
      console.log("connected to mongoDB successfully !! ");
    })
    .catch((err) => {
      console.log("error in mongodb connection : " + err);
      process.exit(1);
      //process is nodejs feature,to stop the code if data base doesnt connect we use one of exit method
    });
};

module.exports = {
  connectDB,
};
