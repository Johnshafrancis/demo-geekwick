const express = require("express");
const app = express();

app.use(express.json());

const taskRoutes = require("./routes/taskRoutes");

app.use("/api", taskRoutes);

app.listen(5000,() => {
    console.log("Server is running on port 5000");
});