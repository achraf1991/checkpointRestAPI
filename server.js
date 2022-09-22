const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

const port = process.env.PORT;

const user = require("./models/User");

// connection to the data base

const DBconnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Data base is connected");
  } catch (error) {
    console.log(error);
  }
};

DBconnect();
app.use(express.json());
app.use("/user", require("./routes/userRoute"));


// const abd = new user({
//   user_name: "achraafff",
//   age: 30,
//   user_email: "achraf@gmail.com",
//   user_password: "******",
// });

// abd
//   .save()
//   .then((el) => console.log(el))
//   .catch((err) => console.error(err));



app.listen(port, () => {
  console.log(
    " server is running, " +
      " please, open your browser at http://localhost:%s",
    port
  );
});
