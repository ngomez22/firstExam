import React, {Component} from 'react';
import axios from 'axios';
import Image from './image';

class Rainbow extends Component {

  render() {
    return(
      <div>
        <h3>Your rainbow</h3>
        <Image />
      </div>
    )
  }

}

export default Rainbow
