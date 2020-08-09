import React, { Component } from 'react';
import './App.css';
import Table from 'react-bootstrap/Table';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }

  componentDidMount() {

    fetch('https://my-json-server.typicode.com/rajkamal96/leaderboard/players')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        })
      });
  }
  

  
  render() {

    var { isLoaded, items } = this.state;

    if(!isLoaded) {
      return <div>Loading...</div>
    }
    else {
      return (
        <div className="App">
          <h1>BALON DOR RANKINGS</h1>
          <Table striped bordered condensed="true" hover className="colorBlack">
            <thead>
              <tr>
                <th>#</th>
                <th>Players</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {items.map((row, index) => (
                <tr key={row.id}>
                  <td>{index + 1}</td>
                  <td>{row.name}</td>
                  <td>{row.points}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );

    }
    
  }
}

export default App;

