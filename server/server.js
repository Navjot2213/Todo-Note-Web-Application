const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", require("./routes/userRouter"));
app.use("/api/notes", require("./routes/noteRouter"));

const URI = "mongodb://127.0.0.1:27017/temp?directConnection=true";

mongoose.connect(URI,{
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },(err) => {
    if (err) throw err;
    console.log("Connected to MongoDB.");
  }
);

app.use(express.static("../client/dist"));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
