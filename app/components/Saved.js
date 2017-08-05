// include react
var React = require("react");

//create saved component
var Saved = React.createClass({

    render: function () {

        return (

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h1 className="panel-title">
                                    <strong>
                                        <i className="fa fa-download"></i> Saved
                                    </strong>
                                </h1>
                            </div>
                            <div className="panel-body">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <h3>
                                            <span>
                                                <em>Title</em>
                                            </span>
                                            <span className="btn-group pull-right">
                                                <a href="#" className="btn btn-default" target="_blank">View Article</a>
                                                <a href="#" className="btn btn-primary">Delete</a>
                                            </span>
                                        </h3>
                                        <p>Date Published: #</p>
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
module.exports = Saved;