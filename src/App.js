import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card/Card";




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    data: [],
    }
}
  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    const url = 'http://localhost:7777/notes';

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          data: result,
        })

      })

  }

  render() {
    const { data } = this.state;

    return  <div className="container">
              <Card data={data} />
            </div>
}
}

export default App;