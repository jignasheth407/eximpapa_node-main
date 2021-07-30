const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./models/connection");
const app = express();
PORT=process.env.PORT||8000
app.use(cors());
app.use(express.json());
app.use("./assets/uploads", express.static("uploads"));
require('./routes/api-routes')(app);


app.listen(PORT, () => {
  console.log(`Server is Running On Port ${PORT}`);
});
