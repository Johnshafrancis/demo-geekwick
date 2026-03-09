const express = require("express");
const app = express();

app.use(express.json());

const apiRoutes = require("./routes/apiRoutes");

app.use("/api", apiRoutes);

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});