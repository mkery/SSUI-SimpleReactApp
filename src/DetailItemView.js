import React, { Component } from 'react';
import './App.css';


class DetailItemView extends Component{

  render() {
    return (
      <div className="detailPane">
        <div className="Xout" onClick={this.props.onClose}>X</div>
        <div className="detailPane-inner">
          <img className="productImage" src={this.props.image} alt={this.props.altText} />
          <div className="productLabel">{this.props.description}</div>
          <p>This is a detail view for this product! bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark</p>
        </div>
      </div>
    );
  }
}


export default DetailItemView;
