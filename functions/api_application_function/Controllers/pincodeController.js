const catalyst = require('zcatalyst-sdk-node');
// const QueryGenerator = require('../Static/queryGenerator');
const apiMiddleware = require('../Middleware/apiMiddleware');

const pincodeData = async (req, res) => {

    let tableName = "PincodeTable"

    apiMiddleware(req, res, async () => {

        try {
            const catalystApp = catalyst.initialize(req);
            const userData = req.apiDetails

            if (parseInt(userData.pincodeTableAvailableCalls) > 0) {
                catalystApp.datastore().table("ApiDetailsTable").updateRow({
                    ROWID: userData.ROWID,
                    pincodeTableAvailableCalls: parseInt(userData.pincodeTableAvailableCalls) - 1,
                    pincodeTableConsumedCalls: parseInt(userData.pincodeTableConsumedCalls) + 1
                }).then(async (response3) => {

                    console.log('response from updating the api count', response3)

                    // const sqlQuery = QueryGenerator(tableName, req.query);
                    let { pincode } = req.query

                    if (!pincode) {
                        res.status(400).json({ message: "Please Enter the pincode" })
                    }

                    const response2 = await catalystApp.zcql().executeZCQLQuery(`Select * from ${tableName} where pincode = ${pincode};`);
                    res.status(200).json({ message: "success", data: response2 });

                }).catch((error) => {
                    console.log('error in updating the api count', error)
                })
            }else{
                res.status(410).json({message:"Please Subscribe plan to continue"})
            }

        } catch (error) {
            console.error('Error fetching stock details:', error);
            res.status(500).send('Server error');
        }

    });
};

module.exports = pincodeData