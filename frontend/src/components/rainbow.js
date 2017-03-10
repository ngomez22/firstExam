import React, {Component} from 'react';
import Color from './color';
import Image from './image';

class Rainbow extends Component {

  constructor(props) {
    super(props);
  };

  render() {
    return(
      <div className = "body">
        <h3>Your rainbow</h3>
        <div className="row">
        {
          this.props.pics.map((array, i) => {
            return (
              <Color key={i} pics={array} amount={this.props.amount}/>
            )
          })
        }
        </div>
      </div>
    )
  };
}

export default Rainbow
