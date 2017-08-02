// include react
var React = require("react");

//create saved component
var Search = React.createclassName({

    // render component
    render: function() {

        return (

            <div className="container">
            	<div className="row">
                    <div className="col-lg-12">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h1 className="panel-title">
                                    <strong>
                                        <i className="fa fa-newspaper-o" aria-hidden="true"></i> Query
                                    </strong>
                                </h1>
                            </div>
                            <div className="panel-body">
                                <form>
                                    <div className="form-group">
                                        <h4><strong>Topic</strong></h4>
                                        <input type="text" className="form-control" id="search" required>
                                        <h4><strong>Start Year</strong></h4>
                                        <input type="number" className="form-control" id="start" required>
                                        <h4><strong>End Year</strong></h4>
                                        <input type="number" className="form-control" id="end" required>
                                    </div>
                                    <div className="pull-right">
                                        <button type="submit" className="btn btn-danger"><h4>Submit</h4></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        ); // end return

    } // end render

}); // end component

// export component for use in other files
module.exports = Search;