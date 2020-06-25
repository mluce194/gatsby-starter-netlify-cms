import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";

<<<<<<< HEAD
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import loadable from '@loadable/component';


const Slideshow = loadable(() => import('../components/Slideshow'))



export const IndexPageTemplate = ({
  image,
  title,
  heading,
  description,
  main,
  intro,
}) => (
=======
import loadable from "@loadable/component";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const Slideshow = loadable(() => import("../components/Slideshow"));

export const IndexPageTemplate = ({ heading, description, intro, main }) => (
>>>>>>> 62265b055ceaf78aa1d9d5adb01a20c3b273c327
  <div>
    <div>{console.log("Mes données", { main })}</div>
    <Slideshow></Slideshow>
    <Features gridItems={intro.blurbs} />
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="columns">
<<<<<<< HEAD
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                      <br />
                      <PreviewCompatibleImage imageInfo={main.image1} />
                    </h3>
                    <p>{description}</p>
=======
                  <div className="column is-6">
                    <PreviewCompatibleImage imageInfo={main.image1} />
>>>>>>> 62265b055ceaf78aa1d9d5adb01a20c3b273c327
                  </div>
                  <div className="column is-6">
                    <h1 className="has-text-weight-semibold is-size-2">
                      {main.image1.heading}
                    </h1>
                    <p>{main.image1.description}</p>
                  </div>
                </div>
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
<<<<<<< HEAD
  image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
=======
>>>>>>> 62265b055ceaf78aa1d9d5adb01a20c3b273c327
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
<<<<<<< HEAD
        title={frontmatter.title}
        heading={frontmatter.heading}
        main={frontmatter.main}
        description={frontmatter.description}
=======
        heading={frontmatter.intro.heading}
        main={frontmatter.main}
>>>>>>> 62265b055ceaf78aa1d9d5adb01a20c3b273c327
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
<<<<<<< HEAD
        heading
        description
        main {
          heading
          description
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
        }
=======
        description
>>>>>>> 62265b055ceaf78aa1d9d5adb01a20c3b273c327
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
<<<<<<< HEAD
`

=======
`;
>>>>>>> 62265b055ceaf78aa1d9d5adb01a20c3b273c327
