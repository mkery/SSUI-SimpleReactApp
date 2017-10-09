import React, { Component } from 'react';
import './App.css';
import StoreItem from './StoreItem.js';
import dogCookieBackdrop from './images/dog-cookies.jpg';
import pupIcon from './images/pupIcon.svg';
import peanutButterCookie from './images/peanutButterCookie.jpg';
import baconCookie from './images/baconCookie.jpg';
import sausageCookie from './images/sausageCookie.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={dogCookieBackdrop} className="App-largeDogCookieImage" alt="dog eating cookies" />
        <div className = "App-background" />
        <div className = "App-content">
          <header className="App-header">
            <h1 className="App-title"><img src={pupIcon} className="App-pupIcon" alt="dog face" />Pip Pup Cookies</h1>
            <p className="App-intro">
              Welcome to Pip Pup Cookies! We home-bake organic dog cookies from
               only the finest ingrediants for your distinguished pup. Based out of Pittsburgh, PA,
               we ship across the US.
            </p>
          </header>
          <StoreItem
            image= {peanutButterCookie}
            altText = "dog cookie"
            description = "peanut butter dog cookie"
          />
          <StoreItem
            image= {baconCookie}
            altText = "dog cookie"
            description = "bacon dog cookie"
          />
          <StoreItem
            image= {sausageCookie}
            altText = "dog cookie"
            description = "sausage dog cookie"
          />
          <StoreItem
            image= {peanutButterCookie}
            altText = "dog cookie"
            description = "*diet* peanut butter dog cookie"
          />
        </div>
      </div>
    );
  }
}

export default App;
