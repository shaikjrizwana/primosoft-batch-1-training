import React, { Component } from "react";
import PropTypes from 'prop-types'

const propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
}
const defaultProps = {
    name: "Default name of App"
}
class MyComponent extends Component {
    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log(this.props, this.state, nextProps, nextState)
    }
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

MyComponent.propTypes = propTypes;
MyComponent.defaultProps = defaultProps;

export default MyComponent;
