// include react
var React = require("react");

// include link from react router to navigate without page reloads
var Link = require("react-router").Link;

//create main component
var Main = React.createClass({

    // render component
    render: function() {

        return (

        	<div className="container">
            // insert component here
            </div>

        ); // end return

    } // end render

}); // end component

// export component for use in other files
module.exports = Main;