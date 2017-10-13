import React, { Component } from 'react';
import './App.css';

import lunaImage from './images/Luna.png';
import ollieImage from './images/Ollie.png';



class About extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src={lunaImage} className="App-aboutDog" alt="Luna the dog" />
        <p className="App-aboutDog-caption">Luna is a 2 year old Maltese mix.</p>
        <img src={ollieImage} className="App-aboutDog" alt="Ollie the dog" />
        <p className="App-aboutDog-caption">Ollie is a 4 year old Havanese mix.</p>
      </div>
    );
  }
}


export default About;
