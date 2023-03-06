import React from "react";
import { nanoid } from "nanoid";


class Card extends React.Component {

  
  render() {
    const { data } = this.props;
    let iconClose = require("../img/icon-cancel.png");

    return (
        <ul className="card">
          {data.map((item) => (
            <li className="item-card" key={nanoid()}>{item.discription}
              <img className="icon-cancel" src={iconClose} alt="icon -close" />
            </li>
          ))}
        </ul>
    );
  }
}
export default Card;

