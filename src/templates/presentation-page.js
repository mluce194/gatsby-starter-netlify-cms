import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import Layout from "../components/Layout";
import ContentRow from "../components/ContentRow";
import ContentRowImage from "../components/ContentRowImage";




export const PresentationPageTemplate = ({ image, heading, main1, main2 }) => (
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
        className="is-size-1 bannerTitle">
        {heading}
      </h1>
    </div>
    <section>
      <h2 className="titrePrincipal entete">{main1.title}</h2>

      <div className="columns">

        <ContentRowImage size="is-one-third" image={main1.image}></ContentRowImage>
        <ContentRow size="is-one-third" heading={main1.description1.heading} description={main1.description1.text} priority={3}></ContentRow>
        <ContentRow size="is-one-third" heading={main1.description2.heading} description={main1.description2.text} priority={3}></ContentRow>
        <ContentRow size="is-one-third" heading={main1.description3.heading} description={main1.description3.text} priority={3}></ContentRow>
        <ContentRow size="is-one-third" heading={main1.description4.heading} description={main1.description4.text} priority={3}></ContentRow>
        <ContentRowImage size="is-one-third" image={main2.image}></ContentRowImage>

      </div>


      <h2 className="titrePrincipal entete">{main2.title}</h2>


      <div className="columns">

        <ContentRow size="is-half" heading={main2.description1.heading} description={main2.description1.text} priority={3}></ContentRow>
        <ContentRow size="is-half" heading={main2.description2.heading} description={main2.description2.text} priority={3}></ContentRow>
        <ContentRow size="is-half" heading={main2.description3.heading} description={main2.description3.text} priority={3}></ContentRow>
      </div>


    </section>
  </div>
);

PresentationPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  main1: PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
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
  main2: PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
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
  }),
};

const PresentationPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;


  return (
    <Layout>
      <PresentationPageTemplate
        image={frontmatter.image}
        heading={frontmatter.heading}
        main1={frontmatter.main1}
        main2={frontmatter.main2}

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
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
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
        main2 {
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
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