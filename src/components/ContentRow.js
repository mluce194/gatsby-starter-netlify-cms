import React from 'react'

const ContentRow = (props) => (

  <div className={`column ${props.size}`}>
    <h2 className="has-text-weight-semibold entete--accueil">
      {props.heading}
    </h2>
    <p>{props.description}</p>
  </div>

)



export default ContentRow;