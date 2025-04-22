const express = require("express");
const cors = require("cors");
const multer = require("multer");
const bodyParser = require("body-parser");
const path = require("path");

const port = process.env.PORT;

const app = express();

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Directory where files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`); // Unique filename
  },
});

// Create the multer upload middleware
const upload = multer({ storage: storage });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/upload/pdf", upload.single("file"), (req, res) => {
  const file = req.file; // Access the uploaded file through req.file

  if (!file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  console.log("File uploaded:", file);

  // Respond with file details
  return res.json({
    message: "File uploaded successfully",
    file: file,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
