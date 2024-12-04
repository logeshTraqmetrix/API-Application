const express = require('express')
const route = express.Router()
const UserApiData = require('../Controllers/createApiController')

route.route('/userApi').post(UserApiData)

module.exports = route