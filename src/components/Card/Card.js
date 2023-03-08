import React from "react";
import { nanoid } from "nanoid";
import AddCard from "../AddCard/AddCard"


class Card extends React.Component {

  render() {
    const { data } = this.props;
    const iconClose = require("./img/icon-cancel.png");
    const iconUpdate = require("./img/icon-update.png");

    const removeCard = (e) => {
      e.target.parentElement.remove();
    }
    // console.log(data)
    return (
      <div className="sectionCard">
        <p className="notesHeader">Notes
          <img className="icon-update" src={iconUpdate} alt="icon-update" />
        </p>
        <ul className="card">
          {data.map((oneCard) => (
            <li className="item-card" key={nanoid()}>{oneCard.discription}
              <img className="icon-cancel" src={iconClose} alt="icon-close" onClick={removeCard}/>
            </li>
            
          ))}
        </ul>
        {/* {console.log(data)} */}
        <AddCard data={data}/> */
        </div>
    );
  }
}
export default Card;

