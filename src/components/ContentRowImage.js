import React from 'react'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import './contentRow.css'

const ContentRowImage = (props) => (

    <div className={`column ${props.size}`}>
      <PreviewCompatibleImage imageInfo={props.image} />
    </div>

)



export default ContentRowImage;