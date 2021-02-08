const express = require("express");
const multer = require("multer");
const app = express();
const config = require('./config');
const folder = require('./folder');
const port = 3000;

app.use(config.destinationName, express.static(config.destinationFolder));
folder.check();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    console.log(file);
     cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

//Upload route
app.post("/uploads", upload.single("file"), (req, res, next) => {
  try {
    return res.status(201).json({
      message: "File uploded successfully",
    });
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Starting on port ${port}`);
});
