import React from 'react'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import './contentRow.css'

const ContentRow = (props) => (


  <div className="columns">
    <div className="column is-half">
      <PreviewCompatibleImage imageInfo={props.image} />
    </div>
    <div className="column is-half">
      <h1 className="has-text-weight-semibold is-size-2">
        {props.heading}
      </h1>
      <p>{props.description}</p>
    </div>
  </div>

)



export default ContentRow;