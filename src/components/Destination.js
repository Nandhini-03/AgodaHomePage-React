import React from 'react'
import './styles.css'

function Destination({source,name,acc}) {
  console.log("image container");
  return (
    <div className="Sites-info">
        <img className="Destination-image" src={source} />
        <p className="Destination-city">{name}</p>
        <p className="Destination-accomodations">{acc}</p>
    </div>
  )
}

export default Destination