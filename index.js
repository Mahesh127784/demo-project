const { app } = require("./src/app.js");
const { connectDB } = require("./src/db/index.js");
connectDB()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running at port : ", 3000);
    });
  })
  .catch((err) => {
    console.log("Mongodb connection failed : ", err);
  });
