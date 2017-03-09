import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Rainbow from './components/rainbow'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  render() {
    return (
      <div>
        <div className = 'header text-center'>
          <h2>Flickr Rainbow</h2>
          <h4>by Nicolás Gómez</h4>
          <hr/>
        </div>
        <div className = 'body'>
          <p>Search for a term and see a beautiful rainbow made out of Flickr images</p>
          <input type='text' className = 'form-control'/>
        </div>
      </div>
    );
  }
}

export default App;
