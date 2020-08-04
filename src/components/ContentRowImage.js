import React from 'react'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import './contentRow.css'

const ContentRowImage = (props) => (

    <div className={`column column--image ${props.size}`} style={{backgroundImage: `url(${props.image.image.childImageSharp.fluid.src})`}}>
    </div>
    

)



export default ContentRowImage;