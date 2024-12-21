// const catalyst = require('zcatalyst-sdk-node')

// const apiMiddleware = async (req, res, next) => {

//     const authHeader = req.headers['authorization'];

//     if (!authHeader) {
//         return res.status(403).json({ message: 'No authorization header provided' });
//     }

//     const Api = authHeader.split(' ')[1];

//     if (!Api) {
//         return res.status(403).json({ message: 'No Api provided' });
//     }
//     const catalystApp = catalyst.initialize(req)
//     const queryResponse = await catalystApp.zcql().executeZCQLQuery(`SELECT * FROM ApiDetailsTable WHERE ApiKey = '${Api}'`);
//     console.log('user data for api key validation', queryResponse)

//     if (queryResponse.length == 1) {
//         return queryResponse[0].ApiDetailsTable
//     } else {
//         res.status(401).json({ message: "Invalid API KEY" })
//     }


// };

// module.exports = apiMiddleware;










// const catalyst = require('zcatalyst-sdk-node');

// const apiMiddleware = async (req, res, next) => {
//     const authHeader = req.headers['authorization'];

//     if (!authHeader) {
//         return res.status(403).json({ message: 'No authorization header provided' });
//     }

//     const Api = authHeader.split(' ')[1];

//     if (!Api) {
//         return res.status(403).json({ message: 'No Api provided' });
//     }

//     const catalystApp = catalyst.initialize(req);
//     const queryResponse = await catalystApp.zcql().executeZCQLQuery(`SELECT * FROM ApiDetailsTable WHERE ApiKey = '${Api}'`);
//     console.log('user data for api key validation', queryResponse);

//     if (queryResponse.length === 1) {
//         // Pass the valid API details to the next middleware/controller
//         req.apiDetails = queryResponse[0].ApiDetailsTable;  // Example, you can pass whatever data you need
//         next();
//     } else {
//         res.status(401).json({ message: "Invalid API KEY" });
//     }
// };

// module.exports = apiMiddleware;









const catalyst = require('zcatalyst-sdk-node');

const apiMiddleware = async (req, res, next) => {
    const authHeader = req.headers['api_key'];

    console.log('request header',req.headers)

    if (!authHeader) {
        return res.status(403).json({ message: 'No authorization header provided' });
    }

    const Api = authHeader.split(' ')[1];

    if (!Api) {
        return res.status(403).json({ message: 'No Api provided' });
    }

    const catalystApp = catalyst.initialize(req);
    const queryResponse = await catalystApp.zcql().executeZCQLQuery(`SELECT * FROM ApiDetailsTable WHERE ApiKey = '${Api}'`);
    console.log('user data for api key validation', queryResponse);

    if (queryResponse.length === 1) {
        // Pass the valid API details to the next middleware/controller
        req.apiDetails = queryResponse[0].ApiDetailsTable;  // Example, you can pass whatever data you need
        next();
    } else {
        res.status(401).json({ message: "Invalid API KEY" });
    }
};

module.exports = apiMiddleware;
