const express = require('express');
const app = express();
const cors= require("cors");
const productroute = require("./routes/ProductRoutes.js");

const categoryroute = require("./routes/CatRoute.js");

require("dotenv").config();
app.use(cors());


port = process.env.PORT || 8080;
app.use(express.json())
app.use(express.json()); // Add this line to parse JSON bodies
require("./database/connection.js");

app.use("/category",categoryroute);
app.use("/product",productroute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});