// include react
var React = require("react");

//create saved component
var Results = React.createClass({

    render: function() {

        return (

            <div>
            	<div className="row">
                    <div className="col-lg-12">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h1 className="panel-title">
                                    <strong>
                                        <i className="fa fa-list-alt"></i> Results
                                    </strong>
                                </h1>
                            </div>
                            <div className="panel-body">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <h3>
                                            <span>
                                                <em>{this.props.title}</em>
                                            </span>
                                            <span className="btn-group pull-right">
                                                <a href="#" className="btn btn-default" target="_blank">View Article</a>
                                                <a href="#" className="btn btn-primary">Save</a>
                                            </span>
                                        </h3>
                                        <p>Date Published: {this.props.date}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

// export component for use in other files
module.exports = Results;