import React, { Component } from 'react'
// import Navbar from '../Navbar/Navbar'
// import Sidebar from '../Sidebar/Sidebar'
import {react_original, javascript_plain, css3_plain_wordmark, git_plain_wordmark, github_original_wordmark, nodejs_original_wordmark, html5_plain_wordmark} from '../../icons/icons'



// https://icongr.am/devicon

export default class Mainpage extends Component {
  render() {
   
    return (
      <div>

  <svg className='devicons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" enable-background="new 0 0 128 128"><g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"/><path d={`${react_original}`}/></g></svg>

<svg className='devicons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#F0DB4F" d={`${javascript_plain}`}/></svg>

{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" d={`${css3_plain_woodmark}`}></svg> */}

<svg className='devicons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#E44D26" d={`${html5_plain_wordmark}`}/></svg>

 


        {/* <Navbar />
        <Sidebar /> */}
        {this.props.children}
      </div>
    )
  }
}
