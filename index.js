const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const taskRoutes = require('./routes/task');

const SERVER_PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/to_do_start";

const app = express();

app.use(cors());
app.use(bodyParser.json());
const server = require("http").createServer(app);

app.use("/task", taskRoutes);

if (!mongoose.connection.readyState) {
  mongoose
    .connect(MONGO_URI, { useNewUrlParser: true })
    .then((res) => {
      console.log("connected to db");
    })
    .catch((err) => console.log(err));
}

server.listen(SERVER_PORT, () =>
  console.log(`Server running on port ${SERVER_PORT}`)
);
