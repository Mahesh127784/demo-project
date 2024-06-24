const express = require("express");
const { Student } = require("./models/students");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Running...");
});

app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(200).json({ status: false, message: error.message });
  }
});

module.exports = {
  app,
};
