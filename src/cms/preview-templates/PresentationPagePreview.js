import React from 'react'
import PropTypes from 'prop-types'
import { PresentationPageTemplate } from '../../templates/presentation-page'

const PresentationPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <PresentationPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        heading={data.heading}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

PresentationPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default PresentationPagePreview
