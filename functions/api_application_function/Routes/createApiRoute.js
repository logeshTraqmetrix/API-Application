const express = require('express')
const route = express.Router()
const {UserApiData, getUserApiData} = require('../Controllers/createApiController')
const AdminData = require('../Controllers/adminDataController')

route.route('/userApi').post(UserApiData)

route.route('/getUserApi').get(getUserApiData)

// route.route('/getAdminData').get(AdminData)

route.route('/getAllUserDetails').get(AdminData)

module.exports = route