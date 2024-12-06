const catalyst = require('zcatalyst-sdk-node');
const QueryGenerator = require('../Static/queryGenerator');
const apiMiddleware = require('../Middleware/apiMiddleware');

const stockDetails = async (req, res) => {
    apiMiddleware(req, res, async () => {

        try {
            const catalystApp = catalyst.initialize(req);
            const userData = req.apiDetails

            if (userData.stockAvailableCalls > 0) {
                catalystApp.datastore().table("ApiDetailsTable").updateRow({
                    ROWID: userData.ROWID,
                    stockAvailableCalls: parseInt(userData.stockAvailableCalls) - 1,
                    stockConsumedCalls: parseInt(userData.stockConsumedCalls) + 1
                }).then(async (response3) => {

                    console.log('response from updating the api count', response3)

                    const sqlQuery = QueryGenerator("StocksTable", req.query);

                    const response2 = await catalystApp.zcql().executeZCQLQuery(sqlQuery);
                    res.status(200).json({ message: "success", data: response2 });

                }).catch((error) => {
                    console.log('error in updating the api count', error)
                })
            } else {
                res.status(410).json({ message: "Please Subscribe plan to continue" })
            }

        } catch (error) {
            console.error('Error fetching stock details:', error);
            res.status(500).send('Server error');
        }

    });
};

module.exports = stockDetails;