import React, {Component} from 'react';

class Image extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src={this.props.url} />
      </div>
    )
  }
}

export default Image
