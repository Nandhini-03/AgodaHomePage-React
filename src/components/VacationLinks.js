import React from 'react'

function VacationLinks(props) {
  return (
    <div className="travel-vacation-rentals-image">
        <div className="image-box-style">
            <img src={props.source} className="image-style" />
        </div>
        <div className="image-content">
            <div className="image-type">{props.name}</div>
            <div className="total-properties">{props.properties}</div>
        </div>
    </div>
  )
}

export default VacationLinks
