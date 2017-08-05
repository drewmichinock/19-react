// include react
var React = require("react");

// include link from react router to navigate without page reloads
var Link = require("react-router").Link;

// include all the sub-components
var Query = require("./Query");
var Results = require("./Results");
var Saved = require("./Saved");
var Search = require("./Search");

// require helper for api calls
var helpers = require("../utils/helpers");

//create main component
var Main = React.createClass({

    render: function() {

		console.log("working...");

        return (

        <div className="container">
	        <div className="row">
	            <div className="col-lg-12">
	                <nav className="navbar navbar-default">
	                    <div className="container-fluid">
	                        <div className="navbar-header">
	                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
	                                <span className="sr-only">Toggle navigation</span>
	                                <span className="icon-bar">#</span>
	                                <span className="icon-bar">#</span>
	                                <span className="icon-bar">#</span>
	                            </button>
	                            <a className="navbar-brand" href="/">NYT-React</a>
	                        </div>
	                        <div className="collapse navbar-collapse navbar-ex1-collapse">
	                            <ul className="nav navbar-nav navbar-right">
	                                <li><a href="/search">Search</a></li>
	                                <li><a href="/saved">Saved Articles</a></li>
	                            </ul>
	                        </div>
	                    </div>
	                </nav>
	            </div>
        	</div>
	        <div className="row">
	            <div className="col-lg-12">
	                <div className="jumbotron">
	                    <div className="container">
	                        <h2 className="text-center"><strong>(ReactJS) New York Times Article Scrubber</strong></h2>
	                        <h3 className="text-center">Search for and save articles of interest.</h3>
	                    </div>
	                </div>
	            </div>
	        </div>

			{/* Search component goes here */}
			{/* Added this.props.children to dump all of the child components into place */}
			<Query />
            {this.props.children}
			
			<div className="row">
	            <div className="col-lg-12">
		            <footer>
		                <hr />
		                <p className="pull-right">
		                    <i className="fa fa-github" aria-hidden="true"></i> Proudly built using React.js
		                </p>
		            </footer>
		        </div>
		    </div>
        </div>
        );
    }
});

// export component for use in other files
module.exports = Main;