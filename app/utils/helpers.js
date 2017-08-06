// require axios to perform GET/POST requests
var axios = require("axios");

// ny times api key
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// variables to hold results
var topic = "";
var startYear = 0;
var endYear = 0;

var helpers = {

    runQuery: function(topic) {

        console.log(topic)

        // pull from api
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
                authKey + "&q=" + topic;

        return axios.get(queryURL).then(function(response) {

        console.log(response);

        return response.data.results;

        });
    }
}

// export object with methods for posting/getting to api
module.exports = helpers;

// {

//     // returns promise object to .then() inside parent component
//     getClicks: function() {
//         return axios.get("/api");
//     },

//     // returns promise object to .then() inside parent component
//     // takes in argument for what to post to database
//     saveClicks: function() {
//         return axios.post("/api", clickData);
//     }
// };