const catalyst = require('zcatalyst-sdk-node');
const CryptoJS = require('crypto-js');
const PLANVALUE = require('../Config/planValues');
const ApiDetailsTable = process.env.ApiDetailsTable || "24836000000009058";

const UserApiData = async (req, res) => {
    const randomApiKey = CryptoJS.lib.WordArray.random(27).toString(CryptoJS.enc.Hex);

    const catalystApp = catalyst.initialize(req);

    try {
        const userEmail = req.body.email;
        const planValue = req.body.planValue;

        const queryResponse = await catalystApp.zcql().executeZCQLQuery(`SELECT * FROM ApiDetailsTable WHERE userEmail = '${userEmail}'`);
        const userData = queryResponse[0]?.ApiDetailsTable;

        const createOrUpdateRow = async (data, isNew = true) => {
            const table = catalystApp.datastore().table(ApiDetailsTable);
            if (isNew) {
                return await table.insertRow(data);
            } else {
                return await table.updateRow(data);
            }
        };

        const planConfig = {
            0: {
                calls: PLANVALUE.FreePlan,
                freeTrail: true,
            },
            2: {
                calls: PLANVALUE.StandardPlan,
                freeTrail: false,
            },
            10: {
                calls: PLANVALUE.ProfessionalPlan,
                freeTrail: false,
            },
        };

        const { calls, freeTrail } = planConfig[planValue] || {};

        if (!userData) {
            // New user
            const newUserData = {
                userEmail,
                ApiKey: randomApiKey,
                pincodeTableAvailableCalls: calls,
                pincodeTableConsumedCalls: 0,
                stockAvailableCalls: calls,
                stockConsumedCalls: 0,
                freeTrail: freeTrail || false,
            };

            const response = await createOrUpdateRow(newUserData);
            console.log("API Key Created (New User):", response);

        } else {
            // Existing user
            const updateData = {
                ROWID: userData.ROWID,
                ApiKey:randomApiKey,
                pincodeTableAvailableCalls: parseInt(userData.pincodeTableAvailableCalls) + calls,
                stockAvailableCalls: parseInt(userData.stockAvailableCalls) + calls,
            };

            if (planValue === 0 && !userData.freeTrail) {
                updateData.freeTrail = true;
            }

            const response = await createOrUpdateRow(updateData, false);
            console.log("API Key Updated (Existing User):", response);
        }

        res.status(200).send({ message: "API Key processed successfully" });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
};


const getUserApiData = async (req, res) => {
    const { email } = req.query
    const catalystApp = catalyst.initialize(req)
    const queryResponse = await catalystApp.zcql().executeZCQLQuery(`SELECT * FROM ApiDetailsTable WHERE userEmail = '${email}'`);
    const userData = queryResponse[0]?.ApiDetailsTable;

    res.status(200).json(userData)

}

module.exports = { UserApiData, getUserApiData }
