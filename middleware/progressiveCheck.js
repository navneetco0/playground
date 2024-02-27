const probe = require('probe-image-size');
const util = require('util');
const fs = require('fs');

// Promisify fs.readFile
const checkProgressive = async (req, res, next) => {
  try {
    if (!req.files || !req.files[0]) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Read the uploaded image buffer
    const imageData = req.files[0].buffer;
    console.log(imageData);

    // Probe the image size and properties
    const result = await probe(imageData);

    console.log(result);

    // Check if the image is progressive
    const isProgressive = result.isProgressive || false;

    // Store the result in req.body
    req.body.isProgressive = isProgressive;
    console.log(isProgressive);

    // Continue to the next middleware
    next();
  } catch (error) {
    res.status(500).send(error );
  }
};

module.exports = checkProgressive;
