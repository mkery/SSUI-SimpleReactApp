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
        <p className="App-aboutUs">
          More about us! Here at Pip Pup Shop, our happy pups taste-test all our recipes. Here are the owners dogs, Luna and Ollie.
        </p>
        <img src={lunaImage} className="App-aboutDog" alt="Luna the dog" />
        <p className="App-aboutDog-caption">Luna is a 2 year old Maltese mix.</p>
        <img src={ollieImage} className="App-aboutDog" alt="Ollie the dog" />
        <p className="App-aboutDog-caption">Ollie is a 4 year old Havanese mix.</p>
      </div>
    );
  }
}


export default About;
