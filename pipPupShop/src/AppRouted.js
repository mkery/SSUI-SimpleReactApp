import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
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


  render() {
    return (
      <Router>
        <div className="App">
          <img src={dogCookieBackdrop} className="App-largeDogCookieImage" alt="dog eating cookies" />
          <div className = "App-background" />
          <div className = "App-content">
            <div className = "App-navMenu">
              <div className = {"App-navMenu-button" + (this.state.page === 0 ? " active" : "")} onClick={(ev) => this.setState({page: 0})}><Link to="/">Shop</Link></div>
              <div className = {"App-navMenu-button" + (this.state.page === 1 ? " active" : "")} onClick={(ev) => this.setState({page: 1})}><Link to="/about">About</Link></div>
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

            <Route exact path="/" component={Store}/>
            <Route path="/about" component={About}/>

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
