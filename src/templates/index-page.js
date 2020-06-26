import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";

import loadable from "@loadable/component";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const Slideshow = loadable(() => import("../components/Slideshow"));

export const IndexPageTemplate = ({ heading, description, intro, main }) => (
  <div>
    <Slideshow></Slideshow>
    <Features gridItems={intro.blurbs} />
    <section className="section section--gradient">
        <div className="section">
          <div className="columns">
              <div className="content">
                <div className="columns">
                  <div className="column is-half">
                    <PreviewCompatibleImage imageInfo={main.image1} />
                  </div>
                  <div className="column is-half">
                    <h1 className="has-text-weight-semibold is-size-2">
                      {main.image1.heading}
                    </h1>
                    <p>{main.image1.description}</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        heading={frontmatter.intro.heading}
        main={frontmatter.main}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
            lien
          }
          heading
          description
        }
        main {
          image1 {
            heading
            description
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
