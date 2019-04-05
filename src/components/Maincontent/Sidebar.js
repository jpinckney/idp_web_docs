import React, { Component } from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Auth from '../Auth/Auth'


class Sidebar extends Component {

  render() {
    const { docs, match, topic } = this.props

    let sortedDocs = {}

    docs.forEach(doc => {
      if (!sortedDocs[ doc.topic ]) {
        sortedDocs[ doc.topic ] = []
      }
      sortedDocs[ doc.topic ].push(doc)
    })


    return (
     
      <div className='sidebar-wrapper'>
      
        <div className='sidebar' >
            <Route path={ `${match.path}/:category/:topic?/subtopic?` } />

            <Link to={ `/docs/react` }><h5 className='titleSubjects'>React</h5></Link>
            <Link to={ `/docs/javascript` }><h5 className='titleSubjects'>Javascript</h5></Link>
            <Link to={ `/docs/html` }><h5 className='titleSubjects' >HTML</h5></Link>

            <Auth />

            { this.makeTopicHeaders(sortedDocs) }
        </div>
      </div>
    )
  }

  makeTopicHeaders(docsByTopic) {
    let jsxArr = []
    
    for (var topic in docsByTopic) {
      jsxArr.push(
        <>
          <li className='sidebar-section-header'>{ topic }</li>
            { 
              docsByTopic[ topic ].map(doc => (
                <li >
                  <Link className='sidebarLink' to={ `/docs/${doc.category}/${doc.topic}/${doc.subtopic}` }>{ doc.subtopic }</Link>
                </li>
              ))
            }
        </>
      )
    }
    return jsxArr
  }
}

const mapStateToProps = reduxState => {
  return {
    docs: reduxState.docs
  }
}


export default withRouter(connect(mapStateToProps)(Sidebar))



// const topicLink = docs.find(i => i.topic === topic)
    // const displayTopicLink = topicLink.map(catLink => {
    //   return (
    //     <Link to={ `/docs/${docs.topic}` }></Link>
    //   )
    // })


    // const docLinksMapped = docs.map( docs => {
    //   console.log(sortedDocs)
    //   return (
    //     <li >
    //       <Link to={ `/docs/${docs.category}/${docs.topic}/${docs.subtopic}` }><br/>{docs.topic}<br />{ docs.subtopic }</Link>
    //     </li>
    //   )
    // })

/** Pseudo Code
 * Goal: I need to have nested routes for user dynamic data selection
 *
 * 1. I need to create a unique list (array) by using a filter or a find method from docs on redux
 * 2. I want to make sure that each topic (objects, arrays, tags) is displayed only once
 *  2. i need to make the topic unique
 * 3. i need to map through the newly created list and return a <Link>
 *
 * ! On the other hand
 * 1. i can code the logic above in different components
 * 2. i can return an instance of the sidebar for each nested route that i need
 *
 * sorteddocs = {
 *  string: [],
 *
 * }
 * sortedDocs.string.map
 **/

// const filteredDocLinks = docs.filter()

    // create a function that gets a unique list of categories from docs. and render the categories in the sidebar same for topic and subtopic but not here in this component one component for each