import React from "react";

class Card extends React.Component {

  render() {
    this.props.responseJson.then(
      function(result) { console.log('sdfsdf') },
    )
    return (
        <div className="card">dfb</div>
    );
  }
}
export default Card;