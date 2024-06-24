const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: true,
      index: true,
    },
    studentId: {
      type: Number,
      required: true,
      index: true,
    },
    contact: {
      type: Number,
    },
    address: {
      type: String,
      required: true,
    },
    guardianName: {
      type: String,
      required: true,
    },
    guardianPhone: {
      type: Number,
      required: true,
    },
    Class: {
      type: String,
      required: true,
      index: true,
    },
    section: {
      type: String,
      required: true,
      index: true,
    },
    DOB: {
      type: Date,
      required: true,
    },
    enrollmentDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = {
  Student,
};
