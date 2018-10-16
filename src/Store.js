import React, { Component } from 'react';
import './App.css';
import StoreItem from './StoreItem.js';
import DetailItemView from './DetailItemView.js'

import peanutButterCookie from './images/peanutButterCookie.jpg';
import baconCookie from './images/baconCookie.jpg';
import sausageCookie from './images/sausageCookie.jpg';


class Store extends Component{
  constructor(props) {
    super(props);
    var peanutButter = {image: peanutButterCookie, altText: "dog cookie", description: "($2/lb) peanut butter dog cookie"}
    var bacon = {image: baconCookie, altText: "dog cookie", description: "($2/lb) bacon dog cookie"}
    var sausage = {image: sausageCookie, altText: "dog cookie", description: "($3/lb) sausage dog cookie"}
    var dietPeanut = {image: peanutButterCookie, altText: "dog cookie", description: "($3/lb) *diet* peanut butter dog cookie"}

    this.state = {
      inventory: [peanutButter, bacon, sausage, dietPeanut],
      detail: null,
    }
  }


  selectItem(id) {
    console.log("selected ",id)
    var item = this.state.inventory[id]
    var detailView = <DetailItemView onClose = {(ev) => this.setState({detail: null})} image = {item.image} altText = {item.altText} description = {item.description} />
    this.setState({detail: detailView})
  }


  renderDetailView() {
    if(this.state.detail !== null)
    {
      return this.state.detail
    }
  }


  renderInventory() {
    var elements = []
    for(var i=0; i < this.state.inventory.length; i++)
    {
      var item = this.state.inventory[i]
      elements.push(<StoreItem onClick = {this.selectItem.bind(this, i)} image = {item.image} altText = {item.altText} description = {item.description} />)
    }
    return (
      <div>
        {elements}
        {this.renderDetailView()}
      </div>
    )
  }


  render() {
    return (
      this.renderInventory()
    );
  }
}


export default Store;
