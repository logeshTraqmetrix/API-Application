// const catalyst = require('zcatalyst-sdk-node')
// const QueryGenerator = require('../Static/queryGenerator')
// const apiMiddleware = require('../Middleware/apiMiddleware')

// const stockDetails = async (req, res) => {

//     apiMiddleware(req, res).then((response) => {

       
//         const sqlQuery = QueryGenerator("StocksTable", req.query)
//         const catalystApp = catalyst.initialize(req)
//         catalystApp.zcql().executeZCQLQuery(sqlQuery).then((response2)=>{
//             res.status(200).json({ message: "success", data: response2 })
//         })
//     }).catch((error1)=>{
//         console.log('error')
//         res.send(error1)
//     })

// }

// module.exports = stockDetails




const catalyst = require('zcatalyst-sdk-node');
const QueryGenerator = require('../Static/queryGenerator');
const apiMiddleware = require('../Middleware/apiMiddleware');

const stockDetails = async (req, res) => {
    apiMiddleware(req, res, async () => {  

        try {

            const userData = req.apiDetails
            const sqlQuery = QueryGenerator("StocksTable", req.query);
            const catalystApp = catalyst.initialize(req);
            const response2 = await catalystApp.zcql().executeZCQLQuery(sqlQuery);
            res.status(200).json({ message: "success", data: response2 });
        } catch (error) {
            console.error('Error fetching stock details:', error);
            res.status(500).send('Server error');
        }

    });
};

module.exports = stockDetails;
