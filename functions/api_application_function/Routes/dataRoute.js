const express = require("express")
const route = express.Router()
const stockDetails = require('../Controllers/stockController')
const pincodeData = require('../Controllers/pincodeController')


route.route('/api/v1/stockdata').get(stockDetails)

route.route('/api/v1/pincodedata').get(pincodeData)


module.exports = route