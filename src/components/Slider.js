import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"




const Slider = ({ data }) => {
    return (
      <div>
        <Img
          fixed={data.file.childImageSharp.fixed}
          alt=""
        />
      </div>
    )
  }


  export const query = graphql`
  query {
    file(relativePath: { eq: "slider1.jpg" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`


export default Slider