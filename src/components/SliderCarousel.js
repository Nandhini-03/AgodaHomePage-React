import React from 'react'
import Carousel from 'react-multi-carousel';
// import { Carousel } from 'react-responsive-carousel';
import 'react-multi-carousel/lib/styles.css';
import Destination from './Destination';

function SliderCarousel() {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 10
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 7,
          slidesToSlide: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 6,
          slidesToSlide: 4
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
          slidesToSlide: 1
        }
      };
      

      const array1=[
        {
          source:"https://pix6.agoda.net/geo/city/14552/1_14552_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
          name:"New Delhi an...",
          acc:"12,786 accommodations",
        },
        {
          source:"https://pix6.agoda.net/geo/city/11304/077a5dc2a344a604731be86537916ba0.jpg?ce=0&s=345x345&ar=1x1",
          name:"Mumbai",
          acc:"4,177 accommodations",
        },
        {
          source:"https://pix6.agoda.net/geo/city/16850/1_16850_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
          name:"Bangalore",
          acc:"5,372 accommodations",
        },
        {
          source:"https://pix6.agoda.net/geo/city/17269/1_17269_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
          name:"Chennai",
          acc:"2,832 accommodations",
        },
        {
          source:"https://pix6.agoda.net/geo/city/8801/1_8801_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
          name:"Hyderabad",
          acc:"2,735 accommodations",
        },
        {
          source:"https://pix6.agoda.net/geo/city/8845/017f7c5548e391397f2be20f88df0b2c.jpg?ce=0&s=345x345&ar=1x1",
          name:"Jaipur",
          acc:"3,082 accommodations",
        },
        {
          source:"https://pix6.agoda.net/geo/city/16854/0abc435fa78c2ca6fb4cb5ec86af89d0.jpg?ce=0&s=345x345&ar=1x1",
          name:"Pune",
          acc:"2,494 accommodations",
        },
        {
          source:"https://pix6.agoda.net/geo/city/12565/1_12565_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
          name:"Pondicherry",
          acc:"1,596 accommodations",
        },
        {
          source:"https://pix6.agoda.net/geo/city/6241/1_6241_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
          name:"Kolkata",
          acc:"2,852 accommodations",
        },
        {
          source:"https://pix6.agoda.net/geo/city/12722/1_12722_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
          name:"Kochi",
          acc:"2,165 accommodations",
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
              array1.map(data => <Destination source={data.source} name={data.name} acc={data.acc}/>)
            }
              {/* <TopDestination2 source="https://pix6.agoda.net/geo/city/14552/1_14552_02.jpg?ca=6&ce=1&s=345x345&ar=1x1" />
              <TopDestination2 source="https://pix6.agoda.net/geo/city/11304/077a5dc2a344a604731be86537916ba0.jpg?ce=0&s=345x345&ar=1x1" />
              <TopDestination2 source="https://pix6.agoda.net/geo/city/16850/1_16850_02.jpg?ca=6&ce=1&s=345x345&ar=1x1" />
              <TopDestination2 source="https://pix6.agoda.net/geo/city/16850/1_16850_02.jpg?ca=6&ce=1&s=345x345&ar=1x1" />
              <TopDestination2 source="https://pix6.agoda.net/geo/city/16850/1_16850_02.jpg?ca=6&ce=1&s=345x345&ar=1x1" />
              <TopDestination2 source="https://pix6.agoda.net/geo/city/16850/1_16850_02.jpg?ca=6&ce=1&s=345x345&ar=1x1" />
              <TopDestination2 source="https://pix6.agoda.net/geo/city/16850/1_16850_02.jpg?ca=6&ce=1&s=345x345&ar=1x1" />
              <TopDestination2 source="https://pix6.agoda.net/geo/city/16850/1_16850_02.jpg?ca=6&ce=1&s=345x345&ar=1x1" />
              <TopDestination2 source="https://pix6.agoda.net/geo/city/16850/1_16850_02.jpg?ca=6&ce=1&s=345x345&ar=1x1" />
              <TopDestination2 source="https://pix6.agoda.net/geo/city/16850/1_16850_02.jpg?ca=6&ce=1&s=345x345&ar=1x1" />
              <TopDestination2 source="https://pix6.agoda.net/geo/city/16850/1_16850_02.jpg?ca=6&ce=1&s=345x345&ar=1x1" /> */}
          </Carousel>
        </div>
    </div>
  )
}

export default SliderCarousel
