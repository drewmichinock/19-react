// require axios to perform GET/POST requests
var axios = require("axios");

// export object with methods for posting/getting to api
module.exports = {

    // returns promise object to .then() inside parent component
    getClicks: function() {
        return axios.get("/api");
    },

    // returns promise object to .then() inside parent component
    // takes in argument for what to post to database
    saveClicks: function() {
        return axios.post("/api", clickData);
    }
};