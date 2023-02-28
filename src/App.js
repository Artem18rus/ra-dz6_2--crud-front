import React from "react";
import "./App.css";
import Card from "./components/Card/Card";

class App extends React.Component {
  static async download() {
    // const xhr = new XMLHttpRequest();

    // xhr.onreadystatechange = () => {
    //   if (xhr.readyState !== 4) return;
    //   const data = JSON.parse(xhr.responseText);
    //   console.log(data)
      
    // };
    // xhr.open('GET', 'http://localhost:7777/notes');
    // xhr.send();
    let response = await fetch('http://localhost:7777/notes');
    let responseJson = response.json();
    return responseJson;
  //console.log(response.json())
// if (response.ok) { // если HTTP-статус в диапазоне 200-299
//   // получаем тело ответа (см. про этот метод ниже)
//   let json = await response.json();
//   // console.log(json)
// } else {
//   alert("Ошибка HTTP: " + response.status);
// }
  }

  render() {
    // console.log(App.download())
  return (
    <div className="container">
      <Card responseJson = {App.download()}/>
    </div>
  );
  }
}

export default App;