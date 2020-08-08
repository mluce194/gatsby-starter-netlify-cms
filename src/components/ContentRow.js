import React from 'react'

const ContentRow = (props) => (

  <div className={`column column--contenu ${props.size}`}>
    <h2 className="has-text-weight-semibold entete">
      {props.heading}
    </h2>
    <p>{props.description}</p>
  </div>

)



export default ContentRow;