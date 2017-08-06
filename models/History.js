// require dependencies
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// create new schema
var HistorySchema = new Schema({

    title: {
        type: String
    },

    date: {
        type: String
    },

    url: {
        type: String
    }

});

// create model
var History = mongoose.model("History", HistorySchema);

// export for use elsewhere
module.exports = History;