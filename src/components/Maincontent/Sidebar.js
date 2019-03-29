import React, { Component } from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Sidebar extends Component {

  render() {
    const { docs, match, topic } = this.props
    console.log(this.props)

    // const topicLink = docs.find(i => i.topic === topic)
    // const displayTopicLink = topicLink.map(catLink => {
    //   return (
    //     <Link to={ `/docs/${docs.topic}` }></Link>
    //   )
    // })

    let sortedDocs = {}
    docs.forEach(doc => {
      if (!sortedDocs[ doc.topic ]) {
        sortedDocs[ doc.topic ] = []
      }
      sortedDocs[ doc.topic ].push(doc)
    })

    function makeTopicHeaders(docsObj) {
      let jsxArr = []
      for (var key in docsObj) {
        jsxArr.push(
          <>
            <h2 style={ { fontSize: "25px" } }>{ docsObj[ key ][ 0 ].topic }</h2>
            <>
              {
                docsObj[ key ].map(doc => {
                  return (
                    <li >
                      <Link to={ `/docs/${doc.category}/${doc.topic}/${doc.subtopic}` }>{ doc.subtopic }</Link>
                    </li>
                  )
                })
              }
            </>
          </>
        )
      }
      return jsxArr
    }

    // const docLinksMapped = docs.map( docs => {
    //   console.log(sortedDocs)
    //   return (
    //     <li >
    //       <Link to={ `/docs/${docs.category}/${docs.topic}/${docs.subtopic}` }><br/>{docs.topic}<br />{ docs.subtopic }</Link>
    //     </li>
    //   )
    // })

    return (
      <div className='border'>
        <Route path={ `${match.path}/:category/:topic?/subtopic?` } />

        {/** ! Permanent Links */ }
        <Link to={ `/docs/react` }><h5>React</h5></Link>
        <Link to={ `/docs/javascript` }><h5>Javascript</h5></Link>
        <Link to={ `/docs/html` }><h5>HTML</h5></Link>
        {/** ! Permanent Links */ }
        { makeTopicHeaders(sortedDocs) }

        {/* { docLinksMapped } */ }

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