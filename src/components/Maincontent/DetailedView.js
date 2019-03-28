import React, { Component } from 'react'
// import axios from 'axios'


export default class DetailedView extends Component {


  render() {
    const { doc } = this.props
    return (
      <div className='detailedView'>


        { doc.example }
        { doc.syntax_explaination }

        {/* broken because in Doc.js it will only render when subtopic in the docs array is === subtopic on match.params
        
        am i going to need a separate component for each view???

        ie change doc.js to Subtopic.js and create a TopicView.js and CategoryView.js

        then in the DetailedView component is where i will have probably an if statement that will conditionally render each component if the url params are true??? something like that

        */}

      </div>
    )
  }
}