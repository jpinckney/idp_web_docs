import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Maincontent from './components/Maincontent/Main_content'
import Mainpage from './components/Mainpage/Mainpage'

export default (
  <Switch>
    <Route exact path='/' component={ Mainpage } />
    <Route path='/docs/:category/:topic/:subtopic' component={Maincontent} /> 
  </Switch>
)