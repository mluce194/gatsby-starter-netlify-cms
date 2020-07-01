import React from 'react'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import './contentRow.css'
import ContentRowImage from '../components/ContentRowImage'

const ContentRow = (props) => (
<<<<<<< HEAD
          <div className="columns columns--ContentRow">
=======

    <div>
>>>>>>> d710054677d88674fddc679118ababb2de8cbac6
    <div className="column is-half">
      <PreviewCompatibleImage imageInfo={props.image} />
    </div>
    <div className="column is-half">
      <h2 className="has-text-weight-semibold entete--accueil">
        {props.heading}
      </h2>
      <p>{props.description}</p>
    </div>
    <ContentRowImage image={props.image} />
    </div>

)



export default ContentRow;