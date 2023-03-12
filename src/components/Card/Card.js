import React from "react";
import { nanoid } from "nanoid";
import AddCard from "../AddCard/AddCard"
import RemoveCard from "../RemoveCard/RemoveCard"



const fetchApi = () => fetch('http://localhost:7777/notes');

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.fetchApi = fetchApi;
    this.state = {
      data: [],
    }
    this.removeCard = this.removeCard.bind(this)
}

loadData() {
  // setTimeout(() => {
    this.fetchApi().then((result) => result.json()).then((result) => {
      this.setState({
        data: result,
      })
    })
  // }, 100)

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
  console.log(e.target.parentElement);
  fetch(`http://localhost:7777/notes/id`, {
    method: 'DELETE',
    // body: JSON.stringify({
    //   "id": 0,
    //   "content": this.state.value,
    // })
  })
  // .then(response => console.log(response));
}

  render() {
    const { data } = this.state;
    // console.log(data)
    const iconClose = require("./img/icon-cancel.png");
    const iconUpdate = require("./img/icon-update.png");

    return (
      <div className="sectionCard">
        <p className="notesHeader">Notes
          <img className="icon-update" src={iconUpdate} alt="icon-update" />
        </p>
        <ul className="card">
          {data.map((oneCard) => (
            <li className="item-card" name={this.state.data.id} key={nanoid()}>{oneCard.content}
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

