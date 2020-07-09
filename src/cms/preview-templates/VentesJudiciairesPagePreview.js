import React from 'react'
import PropTypes from 'prop-types'
import { VentesJudiciairesPageTemplate } from '../../templates/VentesJudiciaires-page'

const VentesJudiciairesPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <VentesJudiciairesPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        heading={data.heading}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

VentesJudiciairesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default VentesJudiciairesPagePreview
