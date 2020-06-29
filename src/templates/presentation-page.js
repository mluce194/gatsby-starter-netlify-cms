import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";


import loadable from "@loadable/component";
import { map } from "lodash";

const Slideshow = loadable(() => import("../components/Slideshow"));

export const PresentationPageTemplate = () => (
  <div>
    <Slideshow></Slideshow>
    <section className="section section--gradient" style={{ padding: 0 }}>
      <div className="section" style={{ padding: 0 }}>
        <div className="columns">
          <div className="content">
   
            Page de présentation
          </div>
        </div>
      </div>
    </section>
  </div>
);

PresentationPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,

  main: PropTypes.shape({
    heading: PropTypes.string,
    body: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  contact: PropTypes.string,
};

const PresentationPage = () => {

  return (
    <Layout>
      <PresentationPageTemplate

      />
    </Layout>
  );
};



export default PresentationPage;


