import React from 'react'
import Promotions from './Promotions'

function FlightsActivities() {
  return (
    <div>
        <div className="flights-activities-promotion">
            <h3 className="flights-activities-heading">Flights & Activities Promotions</h3>
        </div>

        <div className="flight-wrapper">
            <i id="leftFlight" className="fa-solid fa-angle-left"></i> 
            <div className="flight-carousel" style={{display:"flex"}}>
            <Promotions source="https://cdn0.agoda.net/images/blt2/wcFlightsNA20230713/Desktop/en-us/Newacq_20230713.png" />
            <Promotions source="https://cdn0.agoda.net/images/blt2/wcFlightsEvergreenRebrand/Desktop/en-us/Evergreen_20230712.png" />
            <Promotions source="https://cdn0.agoda.net/images/blt2/wcActivitiesNV20230714/Web/en-us.png" />
            </div>
        </div>    
    </div>
  )
}

export default FlightsActivities
