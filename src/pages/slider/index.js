import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Slider() {
  const data = useStaticQuery(graphql`
    query {
        file(relativePath: {eq: "slider1.jpg"}) {
            childImageSharp {
          # Specify a fluid image and fragment
          # The default maxWidth is 800 pixels
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div>
      <h1>Hello gatsby-image</h1>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="Gatsby Docs are awesome"
      />
    </div>
  )
}