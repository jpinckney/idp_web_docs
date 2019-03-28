import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import DetailedView from './DetailedView';


class Doc extends Component {


  render() {
    const { docs } = this.props
    const { subtopic, topic, category } = this.props.match.params

    // filter using this.props.match.params
    // const filteredDocs = docs.filter(doc => {

    // })

   

    const doc = docs.find(i => i.subtopic === subtopic);
    
    return (
      <div>
        <DetailedView 
        doc={doc}
        
        />
      </div>
    )
  }
}



const mapStateToProps = reduxState => {
  return {
    docs: reduxState.docs
  }
}
const mapDispatchToProps = dispatch => {

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Doc))

