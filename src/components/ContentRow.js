import React from 'react'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const ContentRow = (props) => (

    <section className="section section--gradient" style={{padding: 0}}>
        <div className="section" style={{padding: 0}}>
          <div className="columns">
              <div className="content">
                <div className="columns">
                  <div className="column is-half">
                    <PreviewCompatibleImage imageInfo={props.image} />
                  </div>
                  <div className="column is-half">
                    <h1 className="has-text-weight-semibold is-size-2">
                      {props.heading}
                    </h1>
                    <p>{props.description}</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </section>
  )



  export default ContentRow;