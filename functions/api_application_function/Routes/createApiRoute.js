const express = require('express')
const route = express.Router()
const {UserApiData, getUserApiData} = require('../Controllers/createApiController')

route.route('/userApi').post(UserApiData)

route.route('/getUserApi').get(getUserApiData)

module.exports = route