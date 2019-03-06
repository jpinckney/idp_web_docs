import React, { Component } from 'react';
import './App.css';
import Navbar from './components/nav/Navbar'
import routes  from './routes'

class App extends Component {

  render() {


    return (
      <div className="App">
        <Navbar />
        { routes }
        {/* <Login /> */}
      </div>
    );
  }
}

export default App;
