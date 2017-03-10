import React, {Component} from 'react';

class Color extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var amount = this.props.amount
    return (
      <div className="col-md-2">
        {
          this.props.pics.map(function(image, index) {
            if(index<amount) {
              return (
                <img src={image} width="90%" height="90%"/>
              )
            }
          })
        }
      </div>
    )
  }
}

export default Color
