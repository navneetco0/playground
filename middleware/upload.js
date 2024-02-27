const sharp = require("sharp");
const fs = require("fs");

const upload = async (req, res, next) => {
  try {
    if (!req.files || !req.files[0]) {
      return res.status(400).send({ error: 'No file uploaded' });
    }

    const file = req.files[0];
    const data = await sharp(file.buffer)
      .jpeg({ quality: 100, progressive: true })
      .toBuffer();

    // Create the 'uploads' directory if it doesn't exist
    const directory = 'uploads';
    if (!fs.existsSync(directory)){
      fs.mkdirSync(directory);
    }

    // Write the processed image buffer to the output file
    await fs.promises.writeFile(`${directory}/output.jpg`, data);

    // Send a success response
    res.status(200).send({ message: 'Image uploaded and processed successfully' });
  } catch (error) {
    // Handle errors
    console.error('Error occurred:', error);
    res.status(500).send({ error: 'Internal server error' });
  }
};

module.exports = upload;