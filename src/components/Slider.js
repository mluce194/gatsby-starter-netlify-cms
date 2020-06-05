import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Slider() {
  const data = useStaticQuery(graphql`
    query {
        file(relativePath: {eq: "slider1.jpg"}) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                  }
            }
      }
    }
  `)
  return (
    <div>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="Gatsby Docs are awesome"
      />
    </div>
  )
}