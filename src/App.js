import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import routes  from './routes'
import Mainpage from './components/Mainpage/Mainpage'

class App extends Component {

  render() {


    return (
      <div className="App">
        <Navbar />
        { routes }
        <Mainpage/> 
      </div>
      
      
    );
  }
}

export default App;
