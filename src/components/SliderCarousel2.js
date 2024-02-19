import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Destination from './Destination';

function SliderCarousel2() {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 7,
          slidesToSlide: 3 
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4,
          slidesToSlide: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
          slidesToSlide: 1
        }
      };

      const array=[
        {
          source:"https://pix6.agoda.net/geo/city/14524/0435b08918aeb5e6ba2c933def5a3b57.jpg?ce=0&s=345x345&ar=1x1",
          name:"Kuala Lumpur",
          acc:"19,902 accommodations",
        },
        {
          source:"https://pix6.agoda.net/geo/city/9395/1_9395_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
          name:"Bangkok",
          acc:"12,048 accommodations",
        },
        {
          source:"https://pix6.agoda.net/geo/city/2994/0c2aae36625e3e958684d0d4ae5b12d0.jpg?ce=0&s=345x345&ar=1x1",
          name:"Dubai",
          acc:"19,464 accommodations",
        },
        {
          source:"https://pix6.agoda.net/geo/city/16087/1_16087_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
          name:"Penang",
          acc:"5,161 accommodations",
        },
        {
          source:"https://pix6.agoda.net/geo/city/233/04f5fbf17ccbbbb04c24c30f03149c3c.jpg?ce=0&s=345x345&ar=1x1",
          name:"London",
          acc:"24,105 accommodations",
        },
        {
          source:"https://pix6.agoda.net/geo/city/1622/1_1622_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
          name:"Manila",
          acc:"13,223 accommodations",
        },
        {
          source:"https://pix6.agoda.net/geo/city/15121/1_15121_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
          name:"Malacca",
          acc:"5,883 accommodations",
        },
        {
          source:"https://pix6.agoda.net/geo/city/1808/0fdfe2e24c886b78b03e2d0c0eb8df8e.jpg?ce=0&s=345x345&ar=1x1",
          name:"Johor Bahru",
          acc:"6,994 accommodations",
        },
        {
          source:"https://pix6.agoda.net/geo/city/17193/1_17193_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
          name:"Bali",
          acc:"32,908 accommodations",
        },
        {
          source:"https://pix6.agoda.net/geo/city/5070/1_5070_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
          name:"Kota Kinabalu",
          acc:"3,417 accommodations",
        },
        {
          source:"https://pix6.agoda.net/geo/city/8691/1_8691_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
          name:"Jakarta",
          acc:"14,249 accommodations",
        },
        {
          source:"https://pix6.agoda.net/geo/city/17072/1_17072_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
          name:"Las Vegas(NV)",
          acc:"1,113 accommodations",
        },
        {
          source:"https://pix6.agoda.net/geo/city/15523/1_15523_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
          name:"Ipoh",
          acc:"2,516 accommodations",
        },
        {
          source:"https://pix6.agoda.net/geo/city/16056/1_16056_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
          name:"Phuket",
          acc:"12,290 accommodations",
        },
        {
          source:"https://pix6.agoda.net/geo/city/3241/1_3241_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
          name:"Kuantan",
          acc:"1,411 accommodations",
        },
        {
          source:"https://pix6.agoda.net/geo/city/14370/1_14370_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
          name:"Sydney",
          acc:"5,420 accommodations",
        },
        {
          source:"https://pix6.agoda.net/geo/city/10372/1_10372_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
          name:"Melbourne",
          acc:"5,189 accommodations",
        },
        {
          source:"https://pix6.agoda.net/geo/city/14523/1_14523_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
          name:"Kuching",
          acc:"1,465 accommodations",
        },
        {
          source:"https://pix6.agoda.net/geo/city/16808/1_16808_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
          name:"Hong Kong",
          acc:"2,621 accommodations",
        },
        {
          source:"https://pix6.agoda.net/geo/city/1399/1_1399_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
          name:"Cameron Highlanda",
          acc:"1,789 accommodations",
        }
      ]
  return (
    <div>
      <h1>Image Slider</h1>
        <div style={{overflowX:"scroll"}}>
        <Carousel 
          swipeable={true}
          draggable={true}
          showDots={false}
          keyBoardControl={true}
          emulateTouch={true}
          transitionDuration={100}
          responsive={responsive}>
            {
              array.map(data => <Destination source={data.source} name={data.name} acc={data.acc}/>)
            }
        </Carousel>
      </div>
    </div>
  )
}

export default SliderCarousel2
