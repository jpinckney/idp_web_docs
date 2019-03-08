import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import routes from './routes'
import Mainpage from './components/Mainpage/Mainpage'
import Text_area from './components/Usernotes/Text_area'

class App extends Component {

  render() {


    return (
      <div className="App">
        <Navbar />
        { routes }
        <Mainpage>
          {/*props.children?*/}
        </Mainpage>
        <Text_area />
      </div>


    );
  }
}

export default App;
