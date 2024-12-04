const catalyst = require('zcatalyst-sdk-node')

const userDetails = async (req, res) => {
    var catalystApp = catalyst.initialize(req);

    // get the details of the current user as a promise
    let userManagement = catalystApp.userManagement();
    let userPromise = userManagement.getCurrentUser();
    userPromise.then(currentUser => {
        console.log("Login details", currentUser);
        res.send(currentUser)
    });
}

module.exports = userDetails