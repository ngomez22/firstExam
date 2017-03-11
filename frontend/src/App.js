import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Rainbow from './components/rainbow'

const URL = "https://flickrainbowapi.herokuapp.com/";
var rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: '',
      amount: 10,
      pics: [],
      order: []
    };
    this.updateTerm = this.updateTerm.bind(this);
    this.updateAmount = this.updateAmount.bind(this);
    this.getColors = this.getColors.bind(this);
  };

  updateTerm(newTerm) {
    this.setState({
      term: newTerm
    });
  };

  updateAmount(newAmt) {
    this.setState({
      amount: newAmt
    });
  };

  getColors() {
    var self = this;
    var term = self.state.term
    var colors = [];
    var order = [];
    if(term) {
      var counter = 0;
      rainbow.map((color, i) => {
        axios.get(URL + term + "-" + color).then( response => {
          colors[i] = response.data;
          if(++counter == rainbow.length) {
            self.setState({
              pics: colors
            });
          }
        })
      });
    }
  }

  render() {
    var self = this;
    return (
      <div>
        <div className = 'header text-center'>
          <h1>Flickr Rainbow</h1>
          <h3>by Nicolás Gómez</h3>
          <hr/>
        </div>
        <div className = 'body row'>
          <div className='col-xs-10 col-xs-offset-1'>
            <p>Search for a term and see a beautiful rainbow made out of Flickr images</p>
            <input type='text' placeholder='Search term' className = 'form-control' onInput={(event) => {
              this.updateTerm(event.target.value);
            }}/>
          </div>
          <div className='col-xs-10 col-xs-offset-1'>
            <br/><br/>
            <p>How many pictures would you like for each color? Currently: {this.state.amount}</p>
            <input type="range" min="1" max="100" step="1" defaultValue="10" onChange = {(event) => {
              if(event.target.type == 'range'){
                this.updateAmount(event.target.value);
              }
            }}/>
            <br/>
          </div>
          <button className="btn btn-lg btn-success col-lg-2 col-lg-offset-5" onClick={() => {
            this.getColors();
          }}>Go!</button>
        </div>
        {/* Render the rainbow */}
        <div className="row">
          <Rainbow pics={this.state.pics} amount={this.state.amount} />
        </div>
      </div>
    );
  }
}

export default App;
