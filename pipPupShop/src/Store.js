import React, { Component } from 'react';
import './App.css';
import StoreItem from './StoreItem.js';

import peanutButterCookie from './images/peanutButterCookie.jpg';
import baconCookie from './images/baconCookie.jpg';
import sausageCookie from './images/sausageCookie.jpg';


class Store extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <StoreItem
          image= {peanutButterCookie}
          altText = "dog cookie"
          description = "($2/lb) peanut butter dog cookie"
        />
        <StoreItem
          image= {baconCookie}
          altText = "dog cookie"
          description = "($2/lb) bacon dog cookie"
        />
        <StoreItem
          image= {sausageCookie}
          altText = "dog cookie"
          description = "($3/lb) sausage dog cookie"
        />
        <StoreItem
          image= {peanutButterCookie}
          altText = "dog cookie"
          description = "($3/lb) *diet* peanut butter dog cookie"
        />
      </div>
    );
  }
}


export default Store;
