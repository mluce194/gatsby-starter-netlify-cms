import React from "react";

const PresentationCard = (props) => (
      <div className="column is-one-quarter">
              <h2 className="has-text-weight-semibold is-size-2">{props.heading}</h2>
              <p>{props.description}</p>
            </div>
  );
  
  export default PresentationCard;
