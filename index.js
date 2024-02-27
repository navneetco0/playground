const express = require("express");
const connectDB = require("./config");
const singleUpload = require("./middleware/upload");
const multer = require("multer");
const checkProgressive = require("./middleware/progressiveCheck");
const port = 3005;


const app = express();
const upload = multer({ storage: multer.memoryStorage() });
app.use(upload.any());

app.use(express.static('uploads'));

app.post("/upload-single", singleUpload, async (req, res) => {
  res.send("File Uploaded Successfully");
});

app.post("/check-progressive", checkProgressive, async (req, res) => {
  res.send(req.body);
});

app.use(express.json());


app.get("/", async (req, res) => res.send("Api is running..."));

app.listen(port, async () => {
  await connectDB();
  console.log(`Server is running at http://localhost:${port}`);
});
