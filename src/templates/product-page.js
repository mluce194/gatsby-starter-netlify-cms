import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ContentRow from '../components/ContentRow'
import ContentRowImage from '../components/ContentRowImage'

export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  main,
}) => (
    <div className="content">
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
        }}
      >
        <h1
          className="has-text-weight-bold is-size-1"
          style={{
            boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
            backgroundColor: '#f40',
            color: 'white',
            padding: '1rem',
          }}
        >
          {title}
        </h1>
      </div>
      <section className="section section--gradient">
        <div className="columns">
          <div className="column is-7 is-offset-1">
            <h2 className="has-text-weight-semibold is-size-2">{heading}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="columns columns--ContentRow">
          <ContentRow description={main.description1.body} heading={main.description1.heading} size={"is-one-quarter"} />
          <ContentRowImage image={main.image1} size={"is-one-quarter"} />
          <ContentRow description={main.description2.body} heading={main.description2.heading} size={"is-one-quarter"} />
          <ContentRowImage image={main.image2} size={"is-one-quarter"} />
        </div>
        <div className="columns columns--ContentRow">

          <ContentRow description={main.description3.body} heading={main.description3.heading} size={"is-one-quarter"} />
          <ContentRowImage image={main.image3} size={"is-one-quarter"} />
          <ContentRow description={main.description4.body} heading={main.description4.heading} size={"is-one-quarter"} />
          <ContentRowImage image={main.image2} size={"is-one-quarter"} />
        </div>

        <div className="columns columns--ContentRow">

          <ContentRow description={main.description5.body} heading={main.description5.heading} size={"is-one-quarter"} />
          <ContentRowImage image={main.image2} size={"is-one-quarter"} />
          <ContentRow description={main.description6.body} heading={main.description6.heading} size={"is-one-quarter"} />
          <ContentRowImage image={main.image2} size={"is-one-quarter"} />
        </div>
        <div className="columns columns--ContentRow">

          <ContentRow description={main.description7.body} heading={main.description7.heading} size={"is-one-quarter"} />
          <ContentRowImage image={main.image2} size={"is-one-quarter"} />
        </div>


      </section>
    </div>
  )

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    description1: PropTypes.array,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        main={frontmatter.main}
      />
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        main {
          heading
          description1 {
            heading
            body
          }
          description2 {
            heading
            body
          }
          description3 {
            heading
            body
          }
          description4 {
            heading
            body
          }
          description5 {
            heading
            body
          }
          description6 {
            heading
            body
          }
          description7 {
            heading
            body
          }
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }

      }
    }
  }
`