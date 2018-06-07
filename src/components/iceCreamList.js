import React, { Component } from 'react';

class IceCreamList extends Component {
  render() { 
    const { flavors } = this.props;

    return (
      <div>
        {flavors.map((flavor, index) => {
          return <p key={index}>{flavor}</p>
        })}
      </div>
    ); 
  } 
}
export default IceCreamList;
