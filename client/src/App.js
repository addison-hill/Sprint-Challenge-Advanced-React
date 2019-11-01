import React from 'react';
import './App.css';
import axios from 'axios';
import Display from './Display';
import NavBar from './NavBar';

class App extends React.Component {
  state = {
    players: []
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({
          players: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Display players={this.state.players}/>
      </div>
    );
  };
};

export default App;


