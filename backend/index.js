const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth.route");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/myapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

app.use("/api", authRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
