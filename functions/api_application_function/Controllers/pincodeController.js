const catalyst = require('zcatalyst-sdk-node')

const pincodeData = async(req,res)=>{
    res.status(200).json({message:"pincode data"})
}

module.exports = pincodeData