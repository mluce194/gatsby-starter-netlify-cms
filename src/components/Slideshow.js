import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SlideShow = () => {
    const [index, setIndex] = React.useState(0);
  
    React.useEffect(() => {
      const timer = setInterval(() => {
        if (index === 1) { // total number of images minus 1
          setIndex(0);
        } else {
          setIndex(prev => prev + 1);
        }
      }, 3000); //duration
      return () => clearInterval(timer); //cleanup
    }, [index]); //compare
  
    // filter by sub-directory name slideshow
    const allImagesQuery = graphql`
      query {
          allFile(filter: {relativeDirectory: {eq: "slides"}, 
              extension: {regex: "/(jpg)|(png)|(jpeg)/"}}) {
          totalCount
          edges {
              node {
              base
              childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
              }
              }
          }
          }
      }
    `
    const {
      allFile: { edges: images }, //destructuring
    } = useStaticQuery(allImagesQuery)
    
  
    return(
      <>
          <Img
              style={{height:"400px"}}
              fluid={images[index].node.childImageSharp.fluid}
              alt={images[index].node.base.split(".")[0]}
              fadeIn="true"
          />
          <h3>Filename : {images[index].node.base.split(".")[0]}</h3>
      </>
    )
  }
  
  export default SlideShow