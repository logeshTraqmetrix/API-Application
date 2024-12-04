const catalyst = require('zcatalyst-sdk-node')
const bcrypt = require('bcrypt')
const CryptoJS = require('crypto-js')

const UserApiData = async (req, res) => {

    const randomApiKey = CryptoJS.lib.WordArray.random(27).toString(CryptoJS.enc.Hex);

    let hashedApiKey = await bcrypt.hash(randomApiKey, 10)

    let data = {
        userEmail: req.body.email,
        ApiKey: randomApiKey
    };

    res.send(data)
}


module.exports = UserApiData