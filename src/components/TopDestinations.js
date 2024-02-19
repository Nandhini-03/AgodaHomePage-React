import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleRight,faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import SliderCarousel from './SliderCarousel';

function TopDestinations() {
 
  // const imageSources=[
  //   'https://pix6.agoda.net/geo/city/14552/1_14552_02.jpg?ca=6&ce=1&s=345x345&ar=1x1',
  //   'https://pix6.agoda.net/geo/city/11304/077a5dc2a344a604731be86537916ba0.jpg?ce=0&s=345x345&ar=1x1',
  //   'https://pix6.agoda.net/geo/city/16850/1_16850_02.jpg?ca=6&ce=1&s=345x345&ar=1x1',
  //   'https://pix6.agoda.net/geo/city/4923/1_4923_02.jpg?ca=8&ce=1&s=345x345&ar=1x1',
  //   'https://pix6.agoda.net/geo/city/17269/1_17269_02.jpg?ca=6&ce=1&s=345x345&ar=1x1',
  //   'https://pix6.agoda.net/geo/city/8801/1_8801_02.jpg?ca=6&ce=1&s=345x345&ar=1x1',
  //   'https://pix6.agoda.net/geo/city/8845/017f7c5548e391397f2be20f88df0b2c.jpg?ce=0&s=345x345&ar=1x1',
  //   'https://pix6.agoda.net/geo/city/16854/0abc435fa78c2ca6fb4cb5ec86af89d0.jpg?ce=0&s=345x345&ar=1x1',
  //   'https://pix6.agoda.net/geo/city/12565/1_12565_02.jpg?ca=6&ce=1&s=345x345&ar=1x1',
  //   'https://pix6.agoda.net/geo/city/6241/1_6241_02.jpg?ca=6&ce=1&s=345x345&ar=1x1',
  //   'https://pix6.agoda.net/geo/city/12722/1_12722_02.jpg?ca=6&ce=1&s=345x345&ar=1x1'
  // ]
  return (
    <div className="Top-destination">
      <SliderCarousel />
        {/* <span className="Span-styled">Top destinations in India</span>
        <div className="Top-destination-India">
        <FontAwesomeIcon icon={faAngleLeft} className='left-arrow' />
          <div className='allignment-style'>
            <SlideImages />
          </div>
        <FontAwesomeIcon icon={faAngleRight} className='right-arrow'/>
        </div> */}
    </div>            
  )
}

export default TopDestinations
