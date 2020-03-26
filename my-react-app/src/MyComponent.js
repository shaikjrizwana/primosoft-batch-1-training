import React, {Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    name : PropTypes.string.isRequired,
    title : PropTypes.any,
    onClicked : PropTypes.func
  };
const defaultProps = {
    name : 'Default property'
};
class MyComponent extends Component{
    
  render(){
    const {title, name, onClick} = this.props;
    return(
      <div className="MyComponent" >
          <h1>Title: {title}</h1>
          <h1>Name: {name}</h1>
          <button onClick = {onClick}>Click Here</button>
      </div>
    )
  }
}
MyComponent.PropTypes = propTypes;
MyComponent.defaultProps = defaultProps;
export default MyComponent;
