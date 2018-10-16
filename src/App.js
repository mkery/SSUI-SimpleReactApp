import React, { Component } from 'react';
import './App.css';
import Store from './Store.js';
import About from './About.js';
import dogCookieBackdrop from './images/dog-cookies.jpg';
import pupIcon from './images/pupIcon.svg';
import boneIcon from './images/bone.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
    };
  }


  navToShopPage() {
    this.setState({page: 0})
  }

  renderPageView() {
    if(this.state.page === 0)
      return <Store/>
    if(this.state.page === 1)
      return <About/>
  }


  render() {
    return (
      <div className="App">
        <img src={dogCookieBackdrop} className="App-largeDogCookieImage" alt="dog eating cookies" />
        <div className = "App-background" />
        <div className = "App-content">
          <div className = "App-navMenu">
            <div className = {"App-navMenu-button" + (this.state.page === 0 ? " active" : "")} onClick={this.navToShopPage.bind(this)}>Shop</div>
            <div className = {"App-navMenu-button" + (this.state.page === 1 ? " active" : "")} onClick={(ev) => this.setState({page: 1})} >About</div>
            <div className = "App-navMenu-button"><img src={boneIcon} className="App-boneIcon" alt="dog bone cart" />0</div>
          </div>
          <header className="App-header">
            <h1 className="App-title"><img src={pupIcon} className="App-pupIcon" alt="dog face" />Pip Pup Cookies</h1>
            <p className="App-intro">
              Welcome to Pip Pup Cookies! We home-bake organic dog cookies from
               only the finest ingrediants for your distinguished pup. Based out of Pittsburgh, PA,
               we ship across the US.
            </p>
          </header>
          {this.renderPageView()}
        </div>
      </div>
    );
  }
}

export default App;
