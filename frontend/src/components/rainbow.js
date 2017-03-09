import React, {Component} from 'react';
import Image from './image';

const URL = "http://localhost:8080/";

class Rainbow extends Component {

  render() {
    return(
      <div>
        <h3>Your rainbow</h3>
        <Image />
      </div>
    )
  };
}

export default Rainbow
