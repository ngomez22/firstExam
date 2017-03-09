import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Rainbow from './components/rainbow'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: '',
      pictures: []
    };
  }

  updateTerm(newTerm) {
    this.setState({
      term: newTerm
    });
  }

  getPictures() {
    axios.get(URL+"/rainbow/" + this.props.term).then(response => {
      this.setState({
        pics: response.data
      });
    });
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
          <input type='text' className = 'form-control' onClick={(event) => {
            this.updateState(event.target.value);
          }}/>
        </div>
      </div>
    );
  }
}

export default App;
