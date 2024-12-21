const catalyst = require('zcatalyst-sdk-node');
const ApiDetailsTable = process.env.ApiDetailsTable || "24836000000009058";
const getMyPagedRows = require('./getAllRecords');

const AdminData = async (req, res) => {

    try {
        const catalystApp = catalyst.initialize(req);
        let dataStore = catalystApp.datastore();

        const allRows = await getMyPagedRows(dataStore, ApiDetailsTable);

        res.json(allRows);
    } catch (error) {
        res.json(error)
    }

};


module.exports = AdminData