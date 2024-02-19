import React from 'react'
import Images from './Images'

const array=[
  {
    source:"https://q-xx.bstatic.com/xdata/images/hotel/max500/405072015.jpg?k=c6e2e36212edbe443fe7b184ec8a13a543ed6d05c4940818a4854724e614677f&o=",
    name:"Spacious 3BHK on Upper Floor Near Majhiwada Junction",
    place1:"Thane,",
    place2:"Mumbai",
    rupees:"INR 5,000"
  },
  {
    source:"https://q-xx.bstatic.com/xdata/images/hotel/max500/482353783.jpg?k=874003a2e3f9b145758c21ab857e35d3c3783b0f72cf932b256ef80384215527&o=",
    name:"OYO Flagship 814581 Hotel Dhiman Residency",
    place1:"Ulhasnagar,",
    place2:"Mumbai",
    rupees:"INR 953.1"
  },
  {
    source:"https://q-xx.bstatic.com/xdata/images/hotel/max500/476551719.jpg?k=6bf11c7ec164c976c07eb55ec964b4e4fd060fb6ab37b878b1bae0a890625002&o=",
    name:"Maxxvalue Apartment Chandivalli",
    place1:"Powai,",
    place2:"Mumbai",
    rupees:"INR 5,499"
  },
  {
    source:"https://pix8.agoda.net/hotelImages/863/8634991/8634991_19070819200077965005.jpg?ca=9&ce=1",
    name:"Campistaan Karjat",
    place1:"Shedung,",
    place2:"Mumbai",
    rupees:"INR 3,725.44"
  },
  {
    source:"https://pix8.agoda.net/hotelImages/43058977/0/02a19c6f6862f7aa1d316ca81420e973.jpg?ce=0",
    name:"Dream Palace Residency",
    place1:"Kurla,",
    place2:"Mumbai",
    rupees:"INR 2,655"
  },
  {
    source:"https://q-xx.bstatic.com/xdata/images/hotel/max500/343850463.jpg?k=0f96db4fcfa6afacccfa6b6e2a71ba8a7c2754fd9b72462c83d82db591c869fe&o=",
    name:"Villa 408-Dr Wade in Royal Palms Mumbai",
    place1:"Gurgaon,",
    place2:"Mumbai",
    rupees:"INR 8,500"
  },
  {
    source:"https://q-xx.bstatic.com/xdata/images/hotel/max500/476865975.jpg?k=ac8566bc285e914726d59af53b62b5265caa71b263da790fdac0d8f340d5f1ad&o=",
    name:"Super OYO Malali Residency Near Versova Beach",
    place1:"Gurgaon,",
    place2:"Mumbai",
    rupees:"INR 2,101,4"
  },
  {
    source:"https://pix8.agoda.net/hotelImages/223/22356586/22356586_21020621400094844675.jpg?ca=17&ce=1",
    name:"The Myriad Business Hotels And Restaurants",
    place1:"Mira Bhayanda,",
    place2:"Mumbai",
    rupees:"INR 2,613.42"
  }
]
function Mumbai() {
  return (
    <div>
       <div>
      <div className="featured-homes-start">
        <div className="featured-homes-body">
          {
            array.map(data => <Images source={data.source} name={data.name} place1={data.place1} place2={data.place2} rupees={data.rupees} />)
          }
        </div>
      </div>
    </div> 
    </div>
  )
}

export default Mumbai
