import React from 'react'
import './contentRow.css'


const ContentRowImage = (props) => (

    <div className={`column column--image ${props.size}`} style={{ backgroundImage: `url(${props.image.childImageSharp.fluid.src})`}}>
    </div>

)


export default ContentRowImage;