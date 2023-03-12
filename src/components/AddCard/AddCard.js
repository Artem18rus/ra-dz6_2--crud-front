import React, { useState } from "react";
import { nanoid } from "nanoid";

class AddCard extends React.Component {
  // state = {this.props.data}
  constructor(props) {
    super(props);
    // console.log(this.props.data)
    this.state = '';
    this.field = null;
  }
  
  render() {
    // setState(this.props.data)

    // const [fields, setFields] = useState([]);
    // console.log(this.state)
    const iconSend = require("./img/icon-send.png");


    // const [newName, setNewName] = useState("");
    // const [newTimeZone, setNewTimeZone] = useState("");
  
    const handlerSubmit = (e) => {
      e.preventDefault();
      // console.log(this.state.value)
      fetch('http://localhost:7777/notes', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "id": 0,
          "content": this.state.value,
        })
      })

      // .then(res => res.json())
      // .then(res => console.log(res))

      // fetch('http://localhost:7777/notes')
      // .then((result) => result.json())
      // .then((result) => {
      //     console.log(result)

      //   })
      console.log(this.props.data)
    };
  
    // const changeName = (e) => {
    //   setNewName(e.target.value);
    // };
  
    const changeCard = (e) => {
      this.setState({value: e.target.value});
      // console.log(this.state)
    };
    return (
      <form onSubmit={handlerSubmit} className="addCard">
          <p>New note</p>
          <textarea rows="5" cols="50"
            type="text"
            className="inputField"
            // value={newTimeZone}
            placeholder="Введите новой описание карточки"
            onChange={changeCard}
          />
          <button><img className="icon-send" src={iconSend} alt="icon-send"/></button>
      </form>
    );
  }
}
export default AddCard;