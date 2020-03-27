import React, {Component} from 'react';

class productItem extends Component{
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(){
    const {onDelete, name} = this.props;
    onDelete(name);
  }
  render(){
      const {name, price} = this.props;
    return(
        <div>
            <span>{name}</span>{' : '} 
            <span>{price}</span>
            <button onClick = {this.onClick}>Delete</button>
        </div>     
    );
  }
}

export default productItem;
