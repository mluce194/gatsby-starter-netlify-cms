import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";


import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import ContentRow from "../components/ContentRow";
import ContentRowImage from '../components/ContentRowImage'

import Contact from "../components/Contact";

import loadable from "@loadable/component";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import { map } from "lodash";

const Slideshow = loadable(() => import("../components/Slideshow"));

export const IndexPageTemplate = ({ heading, description, intro, main, contact }) => (
  <div>
    <Slideshow></Slideshow>
    <Features gridItems={intro.blurbs} />
    <section className="section section--gradient" style={{ padding: 0 }}>
      <div className="section" style={{ padding: 0 }}>
        <div className="columns">
          <div className="content">
            <div className="columns columns--lignes">

              <ContentRow heading={main.image1.heading} description={main.image1.body} size={"is-half"} />
              <ContentRowImage image={main.image1.image} size={"is-half"}/>
            </div>

            <div className="columns columns--lignes">

              <ContentRow heading={main.image2.heading} description={main.image2.body} size={"is-half"}/>
              <ContentRowImage image={main.image2.image}  size={"is-half"}/>

            </div>
            <Contact contact={contact} />

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
    body: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  contact: PropTypes.string,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        heading={frontmatter.intro.heading}
        main={frontmatter.main}
        intro={frontmatter.intro}
        contact={frontmatter.contact}
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
            body
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            heading
            body
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
        contact
      }
    }
  }
`;
