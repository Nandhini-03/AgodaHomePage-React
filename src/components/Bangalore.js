import React from 'react'
import Images from './Images'

const array=[
  {
    source:"https://q-xx.bstatic.com/xdata/images/hotel/max500/325235595.jpg?k=b92a5e2d343e2dda4a01be5793594f05370e1f275e985dbd2fc332a61c4fc9d2&o=",
    name:"RK-Inn Premium Suites",
    place1:"Electronic City,",
    place2:"Bangalore",
    rupees:"INR 1,800"
  },
  {
    source:"https://q-xx.bstatic.com/xdata/images/hotel/max500/402693548.jpg?k=132457364da833053abc8c8d87edec587baee8f240caf64982636345f7e00c8d&o=",
    name:"Pristine Inn Manyata",
    place1:"Devanahalli,",
    place2:"Bangalore",
    rupees:"INR 800"
  },
  {
    source:"https://q-xx.bstatic.com/xdata/images/hotel/max500/419553832.jpg?k=2c8d1360126deb35e021022ed841b6d613f472ed79d8da06a42de6ac83900a8e&o=",
    name:"RVR Abode-Private Rooms",
    place1:"Indiranagar,",
    place2:"Bangalore",
    rupees:"INR 1,795.5"
  }
]
function Bangalore() {
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

export default Bangalore
