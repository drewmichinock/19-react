// include react
var React = require("react");

//create saved component
var Query = React.createClass({

    // render component
    render: function() {

        return (

        	<div className="container">
                <ul className="list-group">
                    <li className="list-group-item">
                        <h3>
                            <span>
                                <em>Enter search terms to begin...</em>
                            </span>
                        </h3>
                    </li>
                </ul>
            </div>

        ); // end return

    } // end render

}); // end component

// export component for use in other files
module.exports = Query;