// include the react dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// include the main parent component
var Parent = require("./components/Main");

// This code here allows us to render our main component (in this case Parent)
ReactDOM.render(<Parent />, document.getElementById("app"));
