import React, { Component } from 'react';
import './scss/App.scss';
import Navbar from './components/Navbar/Navbar'
import { HashRouter, Switch, Route } from 'react-router-dom'
import MainContent from './components/Maincontent/MainContent'
import Mainpage from './components/mainpage/Mainpage'
import Text_area from './components/Usernotes/Text_area'
import DisplayNotes from './components/Auth/Notes/DisplayNotes'
import NoteForm from './components/Auth/Notes/NoteForm'
import WorldClock from './WorldClock'




class App extends Component {

  render() {


    return (
      <div className='App'>
        {/* <Text_area /> */}
        {/* <WorldClock />
        <br />
        <NoteForm /> */}
        <HashRouter>
          <>
            <Navbar />
            <Switch>
              <Route exact path='/' component={ Mainpage } />
              <Route path='/docs/:category/:topic?/:subtopic?' component={ MainContent } />
              <Route path='/mynotes' component={ DisplayNotes } />
            </Switch>
          </>
        </HashRouter>

      </div>

    );
  }
}

export default App;