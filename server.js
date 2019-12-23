const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const productsRouter = require("./routes/products");
const platformsRouter = require("./routes/platforms");
const topicsRouter = require("./routes/topics");
const issuesRouter = require("./routes/issues");
const emailRouter = require("./routes/email");

app.use("/products", productsRouter);
app.use("/platforms", platformsRouter);
app.use("/topics", topicsRouter);
app.use("/issues", issuesRouter);
app.use("/email", emailRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
