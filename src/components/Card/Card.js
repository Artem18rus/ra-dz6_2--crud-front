import React from "react";
import { nanoid } from "nanoid";
import AddCard from "../AddCard/AddCard"



const fetchApi = () => fetch('http://localhost:7777/notes');

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.fetchApi = fetchApi;
    this.state = {
      data: [],
    }
    this.removeCard = this.removeCard.bind(this)
    this.updateCard = this.updateCard.bind(this)
}

loadData() {
    this.fetchApi().then((result) => result.json()).then((result) => {
      this.setState({
        data: result,
      })
    })
}

componentDidMount() {
  this.loadData()
}

componentDidUpdate(oldProps, oldState) {
  if(oldState.data !== this.state.data) {
    //console.log(oldState.data, this.state.data)
  }
}

removeCard(e) {
  const targetIdx = Number(e.target.parentElement.getAttribute('index'));
  let val = this.state.data.find((item, idx) => item.id === targetIdx)
  fetch(`http://localhost:7777/notes/${val.id}`, {
    method: 'DELETE',
  }).then(() => {
    this.loadData()
  })
}

updateCard(e) {
  this.loadData()
}

  render() {
    const { data } = this.state;
    const iconClose = require("./img/icon-cancel.png");
    const iconUpdate = require("./img/icon-update.png");

    return (
      <div className="sectionCard">
        <p className="notesHeader">Notes
          <img className="icon-update" src={iconUpdate} alt="icon-update" onClick={this.updateCard}/>
        </p>
        <ul className="card">
          {data.map((oneCard) => (
            <li className="item-card" index={oneCard.id} key={nanoid()}>{oneCard.content}
              <img className="icon-cancel" src={iconClose} alt="icon-close" onClick={this.removeCard}/>
            </li>
            
          ))}
        </ul>
        <AddCard />
      </div>
    );
  }
}
export default Card;

