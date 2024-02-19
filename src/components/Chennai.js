import React from 'react'
import Images from './Images'

const array=[
  {
    source:"https://pix8.agoda.net/hotelImages/30610990/-1/27c442080ddc1a90f6f9a7b75e0c2c21.jpg?ce=0",
    name:"GREENS SUITE",
    place1:"Chennai City Center,",
    place2:"Chennai",
    rupees:"INR 2,301"
  },
  {
    source:"https://pix8.agoda.net/hotelImages/793/793417/793417_15072312310032867865.jpg?ca=4&ce=1",
    name:"Max Classic Serviced Apartment",
    place1:"Old Mahabalipuram Road & East Coast Road,",
    place2:"Chennai",
    rupees:"INR 2,114.84"
  },
  {
    source:"https://pix8.agoda.net/hotelImages/407433/0/e877e09c4823319b77e06df8883b7d10.jpg?ca=7&ce=1",
    name:"Niketana Boatclub",
    place1:"Chennai City Center,",
    place2:"Chennai",
    rupees:"INR 4,500"
  }
]
function Chennai() {
  return (
    <div>
      <div className="featured-homes-start">
        <div className="featured-homes-body">
          {
            array.map(data => <Images source={data.source} name={data.name} place1={data.place1} place2={data.place2} rupees={data.rupees} />)
          }
        </div>
      </div>
    </div> 
  )
}

export default Chennai
