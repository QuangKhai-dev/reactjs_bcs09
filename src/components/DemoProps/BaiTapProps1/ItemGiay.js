import React, { Component } from 'react';

export default class ItemGiay extends Component {
  render() {
    console.log(this.props);
    const { image, name, price } = this.props.giay;
    return (
      <div className="col-4">
        <img className="w-100" src={image} alt="" />
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
    );
  }
}
