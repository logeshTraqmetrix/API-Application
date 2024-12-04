// const stockDataUpload =  require('../Controllers/stockDataUploadController')
// const express = require('express')
// const route = express.Router()


// route.route('/upload-stock-data').post(stockDataUpload)



const express = require('express');
const router = express.Router();
const upload = require('../Middleware/multerConfig');
const { stockDataUpload } = require('../Controllers/stockDataUploadController');

// Define the upload route
router.post('/stockdata', upload.single('file'), stockDataUpload);

module.exports = router;

// module.exports = route