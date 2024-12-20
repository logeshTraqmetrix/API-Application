const catalyst = require('zcatalyst-sdk-node');
const ApiDetailsTable = process.env.ApiDetailsTable || "24836000000009058";

const AdminData = async (req, res) => {

    const catalystApp = catalyst.initialize(req);
    res.status(200).json({ data: 'data' })
};


module.exports = AdminData