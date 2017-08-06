// include react
var React = require("react");

//create saved component
var Search = React.createClass({

    // set initial state of search fields
    getInitialState: function() {
        return { topic: "", start: 0, end: 0};
    },

    // function responds to user input
    handleChange: function(event) {

        // capture any change in text to query terms
        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    },

    render: function() {

        return (

            <div>
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
                                        <input
                                            type="text"
                                            value={this.state.topic}
                                            className="form-control"
                                            id="topic"
                                            onChange={this.handleChange}
                                            required 
                                        />

                                        <h4><strong>Start Year</strong></h4>
                                        <input 
                                            type="number"
                                            value={this.state.start}
                                            className="form-control"
                                            id="start"
                                            onChange={this.handleChange}
                                            required 
                                        />

                                        <h4><strong>End Year</strong></h4>
                                        <input
                                            type="number"
                                            value={this.state.end}
                                            className="form-control"
                                            id="end"
                                            onChange={this.handleChange}
                                            required 
                                        />

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
        );
    }
});

// export component for use in other files
module.exports = Search;