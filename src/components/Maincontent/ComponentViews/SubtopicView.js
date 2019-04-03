import React, { Component } from 'react'


export default class SubtopicView extends Component {


  render() {
    const { subtopic } = this.props
    console.log(subtopic)
    return (
      <div className='subtopicView'>
<h1>
        { subtopic.subtopic }
</h1>
        {/* <br /> */}
        {/* <strong>1 sentence description of the subtopic</strong> */}
        <p>

        { subtopic.subtopic_description }
        </p>
        {/* <br /> */}
        {/* <strong>Basic use case example</strong> */}
        <br />
        <p>

        { subtopic.example }
        </p>
        {/* <br /> */}
        { subtopic.syntax }
        {/* <br /> */}
        { subtopic.syntax_explaination }
        {/* <br /> */}
        {/* <strong>In depth subtopic description</strong> */}
        {subtopic.subtopic_description}
        {/* <br /> */}
        {/* <strong> this one should be additional examples from the same example column on the subtopic table</strong> */}
        { subtopic.example }


      </div>
    )
  }
}