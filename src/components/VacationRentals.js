import React from 'react'
import VacationLinks from './VacationLinks'

function VacationRentals() {
    const array=[
        {
            source:"https://cdn6.agoda.net/images/accommodation/other-property-types/entire-apartment.jpg",
            name:"Apartments",
            properties:"156,786 properties"
        },
        {
            source:"https://cdn6.agoda.net/images/accommodation/other-property-types/entire-house.jpg",
            name:"Vacation Rentals",
            properties:"517,703 properties"
        },
        {
            source:"https://cdn6.agoda.net/images/accommodation/other-property-types/entire-villa.jpg",
            name:"Private Villas",
            properties:"181,167 properties"
        },
        {
            source:"https://cdn6.agoda.net/images/accommodation/other-property-types/entire-bungalow.jpg",
            name:"Bungalows",
            properties:"8,801 properties"
        }
    ]
  return (
    <div className="travel-vacation-rentals-section">
        <div className="travel-vacation-rentals-heading">
            <span className="travel-vacation-rentals">Explore more travel vacation rentals</span>
        </div>
        <div className="travel-vacation-rentals-content">
            {
                array.map(data => <VacationLinks source={data.source} name={data.name} properties={data.properties}/>)
            }
        </div>
    </div>
  )
}

export default VacationRentals
