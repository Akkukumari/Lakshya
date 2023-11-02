const express = require("express");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.routes");
const cors = require("cors");
const { tutorRouter } = require("./routes/tutor.routes");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/tutor", tutorRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to the DB");
    console.log(`Server is running at port ${process.env.port}`);
  } catch (err) {
    console.log(err);
    console.log("Something went wrong!!");
  }
});
