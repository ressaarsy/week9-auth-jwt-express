require("dotenv").config();
const express = require("express");
const app = express();
const authRoutes = require("./src/routes/authRoutes");
const userRoutes = require("./src/routes/userRoutes");

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/user", userRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
