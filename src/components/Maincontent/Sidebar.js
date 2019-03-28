import React, { Component } from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Sidebar extends Component {

  render() {
    const { docs, match } = this.props
    console.log(this.props)

    const docLinksMapped = docs.map(docs => {
      // console.log(docs)
      return (
        <Link to={ `/docs/${docs.category}/${docs.topic}/${docs.subtopic}` }>{ docs.topic }<br />{ docs.subtopic }</Link>
      )
    })
    
    // const filteredDocLinks = docs.filter()

// create a function that gets a unique list of categories from docs. and render the categories in the sidebar same for topic and subtopic but not here in this component one component for each
    

    return (
      <div className='border'>
        <Route path={ `${match.path}/:category/:topic?/subtopic?` } />

        {/** ! Permanent Links */ }
        <Link to={ `/docs/react` }><h5>React</h5></Link>
        <Link to={ `/docs/javascript` }><h5>Javascript</h5></Link>
        <Link to={ `/docs/html` }><h5>HTML</h5></Link>
        {/** ! Permanent Links */ }

        { docLinksMapped }

      </div>
    )
  }
}

const mapStateToProps = reduxState => {
  return {
    docs: reduxState.docs
  }
}


export default withRouter(connect(mapStateToProps)(Sidebar))






{/* <h1>{ this.props.topic }</h1>
<h2>{ this.props.subtopic }</h2>



 <div className='topicLinks'>
  <Link to={ `/docs/javascript/objects` }><h4>Objects</h4></Link>
  <Link to={ `/docs/javascript/arrays` }><h4>Arrays</h4></Link>
  <Link to={ `/docs/javascript/strings` }><h4>Strings</h4></Link>
</div>

<div className='subtopicLinks'>
  <Link to={ `/docs/javascript/objects/object.assign` }><h6>Object.Assign</h6></Link>
  <Link to={ `/docs/javascript/objects/object.create` }><h6>Object.Create</h6></Link>


  <Link to={ `/docs/javascript/arrays/array.map` }><h6>Array.map</h6></Link>
  <Link to={ `/docs/javascript/arrays/array.filter` }><h6>Array.filter</h6></Link>
  <Link to={ `/docs/javascript/arrays/array.splice` }><h6>Array.splice</h6></Link>


  <Link to={ `/docs/javascript/strings/string.length` }><h6>String.length</h6></Link>
  <Link to={ `/docs/javascript/strings/string.toUpperCase` }><h6>String.toUpperCase</h6></Link>
  <Link to={ `/docs/javascript/strings/string.toLowerCase` }><h6>String.toLowerCase</h6></Link>
</div>
</div> */}





