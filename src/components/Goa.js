import React from 'react'
import Images from './Images'

const array=[
  {
    source:"https://q-xx.bstatic.com/xdata/images/hotel/max500/422469957.jpg?k=94464530298c21390008a09ca92809d3c9d9e7c432b9735fd0d52c32bafef1ad&o=",
    name:"Luxury 6 BHK Villa with Private Swimming Pool",
    place1:"Porvorim,",
    place2:"Goa",
    rupees:"INR 15,999"
  },
  {
    source:"https://pix8.agoda.net/hotelImages/27877467/-1/3cc7846f6a1a002c5c25921e1cae4dea.jpg?ca=27&ce=0",
    name:"Verandah Goa",
    place1:"Anjuna,",
    place2:"Goa",
    rupees:"INR 1,950.7"
  },
  {
    source:"https://pix8.agoda.net/hotelImages/21953508/-1/4e08bb8d6dedb40a5df3a9f05b71a44f.jpg?ca=17&ce=1",
    name:"Casa Dos Rebelos",
    place1:"Panaji,",
    place2:"Goa",
    rupees:"INR 3,555"
  },
  {
    source:"https://q-xx.bstatic.com/xdata/images/hotel/max500/331568382.jpg?k=664122dcc96985a222587c75bb90f010ee5f7c6f117d6c1d2181e235429c1fd3&o=",
    name:"AquaVista @ Casa Philomena",
    place1:"Calangute,",
    place2:"Goa",
    rupees:"INR 2,200"
  },
  {
    source:"https://pix8.agoda.net/hotelImages/163/1637069/1637069_16122612090049921185.jpg?ca=6&ce=1",
    name:"The Eternal Wave",
    place1:"Baga,",
    place2:"Goa",
    rupees:"INR 3,780"
  }
]
function Goa() {
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

export default Goa
