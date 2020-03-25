import React, { Component } from "react";
const defaultProps = {
    name: 'mahendra'
}
class MyComponent extends Component {
    render() {
        const { title, name, onClick } = this.props;
        return (
            <div className="Component">
                <h1>{title}</h1>
                <h2>{name}</h2>
                <button onClick={onClick}>click to update!</button>
            </div>
        );
    }
}

MyComponent.defaultProps = defaultProps;

export default MyComponent;
