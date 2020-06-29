import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import Layout from "../components/Layout";



export const PresentationPageTemplate = ({image, heading, main1}) => (
  <div className="content">
    <div>{console.log("Mon image", image)}</div>

    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
          backgroundColor: '#f40',
          color: 'white',
          padding: '1rem',
        }}
      >
        {heading}
      </h2>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-7 is-offset-1">
              <h2 className="has-text-weight-semibold is-size-2">{main1.description1.heading}</h2>
              <p>{main1.description1.text}</p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-3">
                    {main1.description2.heading}
                  </h3>
                  <p>{main1.description2.text}</p>
                </div>
              </div>
          
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

PresentationPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  main1: PropTypes.shape({
    heading: PropTypes.string,
    description1: PropTypes.shape({
      heading: PropTypes.string,
      text: PropTypes.string,
    }),
    description2: PropTypes.shape({
      heading: PropTypes.string,
      text: PropTypes.string,
    }),
    description3: PropTypes.shape({
      heading: PropTypes.string,
      text: PropTypes.string,
    }),
    description4: PropTypes.shape({
      heading: PropTypes.string,
      text: PropTypes.string,
    }),
  }),
};

const PresentationPage = ( {data} ) => {
  const { frontmatter } = data.markdownRemark;


  return (
    <Layout>
      <PresentationPageTemplate
        image={frontmatter.image}
        heading={frontmatter.heading}
        main1={frontmatter.main1}
      />
    </Layout>
  );
};

PresentationPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};


export default PresentationPage;

export const pageQuery = graphql`
  query PresentationPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "presentation-page" } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        main1 {
          description1 {
            heading
            text
          }
          description2 {
            heading
            text
          }
          description3 {
            heading
            text
          }
          description4 {
            heading
            text
          }
        }
      }
    }
  }
`;


