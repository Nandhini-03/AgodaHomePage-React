import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import TopDestination2 from './TopDestination2';


function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}


function SlideImages() {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   };

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 3,
      nextArrow: <Arrow />,
      prevArrow: <Arrow />,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
    <div>
        <h2> Top destinations in India</h2>
        <Slider {...settings}>
          <TopDestination2 source="https://pix6.agoda.net/geo/city/14552/1_14552_02.jpg?ca=6&ce=1&s=345x345&ar=1x1" />
          <TopDestination2 source="https://pix6.agoda.net/geo/city/11304/077a5dc2a344a604731be86537916ba0.jpg?ce=0&s=345x345&ar=1x1" />
          <TopDestination2 source="https://pix6.agoda.net/geo/city/16850/1_16850_02.jpg?ca=6&ce=1&s=345x345&ar=1x1" />
          <TopDestination2 source="https://pix6.agoda.net/geo/city/16850/1_16850_02.jpg?ca=6&ce=1&s=345x345&ar=1x1" />
          <TopDestination2 source="https://pix6.agoda.net/geo/city/16850/1_16850_02.jpg?ca=6&ce=1&s=345x345&ar=1x1" />
          <TopDestination2 source="https://pix6.agoda.net/geo/city/16850/1_16850_02.jpg?ca=6&ce=1&s=345x345&ar=1x1" />
          <TopDestination2 source="https://pix6.agoda.net/geo/city/16850/1_16850_02.jpg?ca=6&ce=1&s=345x345&ar=1x1" />
          <TopDestination2 source="https://pix6.agoda.net/geo/city/16850/1_16850_02.jpg?ca=6&ce=1&s=345x345&ar=1x1" />
          <TopDestination2 source="https://pix6.agoda.net/geo/city/16850/1_16850_02.jpg?ca=6&ce=1&s=345x345&ar=1x1" />
          <TopDestination2 source="https://pix6.agoda.net/geo/city/16850/1_16850_02.jpg?ca=6&ce=1&s=345x345&ar=1x1" />
          <TopDestination2 source="https://pix6.agoda.net/geo/city/16850/1_16850_02.jpg?ca=6&ce=1&s=345x345&ar=1x1" />
        </Slider>
      </div>
  )
}

export default SlideImages
