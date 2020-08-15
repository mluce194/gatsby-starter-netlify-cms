import React from 'react'

const ContentRow = class extends React.Component {

  render() {

    const ContentRowHeading = `h${this.props.priority}`;

    return (

      <div className={`column column--contenu ${this.props.size}`}>
        <ContentRowHeading className="has-text-weight-semibold entete">
          {this.props.heading}
        </ContentRowHeading>
        <p>{this.props.description}</p>
      </div>
    )

  }

 

}

ContentRow.defaultProps = {
  priority: 1
}





export default ContentRow;