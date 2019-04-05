import React, { Component } from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import Auth from '../components/Auth/Auth'
import { connect } from 'react-redux'

class MobileSidebar extends Component {
  render() {
    const { docs, match, topic } = this.props

    let docsByTopic = {}

    docs.forEach(doc => {
      if (!docsByTopic[ doc.topic ]) {
        docsByTopic[ doc.topic ] = []
      }
      docsByTopic[ doc.topic ].push(doc)
    })

    console.log(docsByTopic);
    
    const classList = [
      'sidebar-mobile'
    ];

    if (this.props.mobileNavIsVisible) {
      classList.push('open');
    }

    return (
      <div className={classList.join(' ')}>
        <Route path={ `${match.path}/:category/:topic?/subtopic?` } />

        <Auth />
        { this.makeTopicHeaders(docsByTopic) }
      </div>
    )
  }

  makeTopicHeaders(docsByTopic) {
    let jsxArr = []
    
    for (var topic in docsByTopic) {
        jsxArr.push(
            <>
            <li className='sidebar-section-header'>
                <Link to={`/docs/${docsByTopic[topic][0].category}/${docsByTopic[topic][0].topic}/`}>{ topic }</Link>
            </li>
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
      docs: reduxState.docs,
      mobileNavIsVisible: reduxState.mobileNavIsVisible
    }
  }
  
  
export default withRouter(connect(mapStateToProps)(MobileSidebar))
  