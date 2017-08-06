// require dependencies
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// create new schema
var ArticleSchema = new Schema({

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
var Article = mongoose.model("Article", ArticleSchema);

// export for use elsewhere
module.exports = Article;