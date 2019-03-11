import React, { Component } from 'react'
// import Navbar from '../Navbar/Navbar'
// import Sidebar from '../Sidebar/Sidebar'
import { react_original, javascript_plain, css3_plain_wordmark, git_plain_wordmark, github_original_wordmark, nodejs_original_wordmark, html5_plain_wordmark } from '../../icons/icons'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { upload_data } from '../../ducks/reducer'



// https://icongr.am/devicon

class Mainpage extends Component {
constructor(props) {
  super(props);
  this.state = {
    category: []
  }
}


  render() {
    return (
      <div>
        <Link to={ `/docs/${'reactjs'}` }>
          <svg className='devicons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" enable-background="new 0 0 128 128"><g fill="#61DAFB"><circle cx="64" cy="64" r="11.4" /><path d={ `${react_original}` } /></g></svg>
        </Link>
        <Link to={ `/docs/${'javascript'}` }>
          <svg className='devicons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#F0DB4F" d={ `${javascript_plain}` } /></svg>
        </Link>

        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" d={`${css3_plain_woodmark}`}></svg> */ }
        <Link to={ `/docs/${'html'}` }>
          <svg className='devicons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#E44D26" d={ `${html5_plain_wordmark}` } /></svg>
        </Link>
      </div>
    )
  }
}


const mapStateToProps = reduxState => {
  return {
    category: reduxState.category
  }
}
const mapDispatchToProps = {
  upload_data
}


export default connect(mapStateToProps, mapDispatchToProps)(Mainpage)