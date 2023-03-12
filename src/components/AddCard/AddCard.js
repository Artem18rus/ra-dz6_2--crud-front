import React from "react";
class AddCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = '';
  }

  render() {
    const iconSend = require("./img/icon-send.png");
  
    const handlerSubmit = (e) => {
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
    };

    const changeCard = (e) => {
      this.setState({value: e.target.value});
    };
    
    return (
      <form onSubmit={handlerSubmit} className="addCard">
          <p>New note</p>
          <textarea rows="5" cols="50"
            type="text"
            className="inputField"
            placeholder="Введите новой описание карточки"
            onChange={changeCard}
          />
          <button><img className="icon-send" src={iconSend} alt="icon-send"/></button>
      </form>
    );
  }
}
export default AddCard;