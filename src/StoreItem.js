import React, { Component } from 'react';
import './App.css';


class StoreItem extends Component{

  render() {
    return (
      <div className="productWrapper" onClick = {this.props.onClick}>
        <img className="productImage" src={this.props.image} alt={this.props.altText} />
        <div className="productLabel">{this.props.description}</div>
      </div>
    );
  }
}


export default StoreItem;
