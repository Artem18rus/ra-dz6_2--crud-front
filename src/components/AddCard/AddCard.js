import React, { useState } from "react";
import { nanoid } from "nanoid";

class AddCard extends React.Component {

  // constructor(props) {
  //   super(props);
  //   console.log(this.props)
  //   // this.state = this.props.data;
  //   // this.field = null;
  // }
  
  render() {
    console.log(this.props)
    // const [fields, setFields] = useState([]);
    // console.log(this.state)
    const iconSend = require("./img/icon-send.png");


    // const [newName, setNewName] = useState("");
    // const [newTimeZone, setNewTimeZone] = useState("");
  
    const handlerSubmit = (e) => {
      e.preventDefault();
      //console.log(e);
      // const newFields = {
      //   id: nanoid(),
      //   name: newName,
      //   zone: newTimeZone
      // };
      // setFields((prevField) => {
      //   return [...prevField, newFields];
      // });
    };
  
    // const changeName = (e) => {
    //   setNewName(e.target.value);
    // };
  
    const changeCard = (e) => {
      //console.log(e.target.value);
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