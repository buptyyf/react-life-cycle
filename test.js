var React = require("react");
var ReactDOM = require("react-dom");
console.log(React);
var ChildComponent = React.createClass({
    componentWillReceiveProps: function () {
        console.log("call componentWillReceiveProps");
    },
    shouldComponentUpdate: function () {
        console.log("call shouldComponentUpdate");
        return true;
    },
    componentWillUpdate: function () {
        console.log("call componentWillUpdate");
    },
    componentDidUpdate: function () {
        console.log("call componentDidUpdate");
    },
    componentWillUnmount: function () {
        console.log("call componentWillUnmount");
    },
    render: function () {
        console.log("call render");
        return (
            <div>
                {this.props.data}
            </div>
        )
    }
    
});
var MyComponent = React.createClass( {
    getDefaultProps: function () {
        // console.log("call getDefaultProps");
        return {
            className: "test"
        };
    },
    getInitialState: function () {
        // console.log("call getInitialState");
        // console.log("log prop: ", this.props);
        return {
            text: "something"
        };
    },
    componentWillMount: function () {
        console.log("call componentWillMount");
    },
    componentDidMount: function () {
        console.log("call componentDidMount");
    },
    componentWillUnmount: function () {
        console.log("call componentWillUnmount");
    },
    render: function () {
        console.log("call render");
        var child;
        if (this.state.text === "after click") {
            child = null;
        } else {
            child = <ChildComponent data={this.state.text} />;
        }
        return (
            <div className={this.props.className} onClick={this.handleClick}>
                {child}
            </div>
        );
    },
    handleClick: function () {
        this.setState({
            text: "after click"
        });
    }
});
ReactDOM.render(
    <MyComponent />,
    document.getElementById("container")
);