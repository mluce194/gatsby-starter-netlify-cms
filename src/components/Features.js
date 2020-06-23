import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { Link } from 'gatsby'


const FeatureGrid = ({ gridItems }) => (

  <div className="columns is-multiline" style={{backgroundColor: "#ECECEC"}}>
    {gridItems.map((item) => (
      <div key={item.text} className="column is-one-third">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: '96px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p style={{textAlign: 'center'}}><Link to={item.lien}>{item.text}</Link></p>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
      lien: PropTypes.string
    })
  ),
}

export default FeatureGrid
