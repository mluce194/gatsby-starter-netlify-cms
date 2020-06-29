import React from 'react'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import './contentRow.css'

const ContentRow = (props) => (


  <div className="columns columns--ContentRow">
    <div className="column is-half">
      <PreviewCompatibleImage imageInfo={props.image} />
    </div>
    <div className="column is-half">
      <h2 className="has-text-weight-semibold entete--accueil">
        {props.heading}
      </h2>
      <p>{props.description}</p>
    </div>
  </div>

)



export default ContentRow;