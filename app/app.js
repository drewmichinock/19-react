// include the react dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// include the main parent component
var Parent = require("./components/Main");

// Creating an App component which renders a ListContainer inside of a Container


// This code here allows us to render our main component (in this case Parent)
ReactDOM.render(<Main />, document.getElementById("app"));
