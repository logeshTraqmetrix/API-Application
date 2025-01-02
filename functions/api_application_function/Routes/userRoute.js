const express = require("express")
const route = express.Router()
const {userDetails} = require('../Controllers/userController')



route.route('/getuserdetails').get(userDetails)


module.exports = route