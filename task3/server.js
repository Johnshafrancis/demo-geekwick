const express = require("express");
const app = express();

app.use(express.json());

const studentRoutes = require("./routes/studentRoutes"); //here in studentRoutes R is capital because we used camelcase 

app.use("/api", studentRoutes);

app.listen(5000, () => {
 console.log("Server running on port 5000");
});