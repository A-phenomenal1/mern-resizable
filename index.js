const express = require("express");
const cors = require("cors");
const connectDB = require("./src/db/mongoose");
const path = require("path");

const formRouter = require("./src/router/formData");
const CountClick = require("./src/router/countClick");

const app = express();
connectDB();

app.use(express.json());
app.use(cors());
app.use(formRouter);
app.use(CountClick);

if (process.env.Node_ENV === "production") {
  app.use(express.static("/client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server is running at port ${port}`));
