import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import HotelsTop from './HotelsTop';
import HotelsHomesBottom from './HotelsHomesBottom';
import PrivateStaysBottom from './PrivateStaysBottom';
// import FlightHotelTop from './FlightHotelTop';
import FlightHotelBottom from './FlightHotelBottom';
import FlightsBottom from './FlightsBottom';
import AirportTransferBottom from './AirportTransferBottom';
import ActivitiesBottom from './ActivitiesBottom';
import SearchBoxTop from './SearchBoxTop';


function NavigationLinks({ handleLinkClick }) {
  return (
    <ul style={{display:"flex",listStyleType: 'none'}} className="list-of-title-container">
      <li>
        <NavLink to="/homes" className='search-styles' onClick={() => handleLinkClick(<HotelsTop />, <HotelsHomesBottom />)}>
        <svg id="HotelAccommodationFillIcon" className="search-icons" viewBox="0 0 24 24"><g clipPath="url(#clip0_2_3713)"><path fillRule="evenodd" clipRule="evenodd" d="M5 10v12H2V11a1 1 0 0 1 .883-.993L3 10h2Zm2-7.82a1 1 0 0 1 .164.014l10 1.667a1 1 0 0 1 .836.986V11L21 11a1 1 0 0 1 1 1v10h-8v-5a1 1 0 0 0-.883-.993L13 16h-2a1 1 0 0 0-.993.883L10 17v5H6V3.18a1 1 0 0 1 1-1ZM21 17h-3v1h3v-1Zm0-3h-3v1h3v-1Zm-5.5-4H13v2.5h1.01V11h1.49v-1Zm-4 0H9v2.5h1.01V11h1.49v-1Zm4-4H13v2.5h1.01V7h1.49V6Zm-4 0H9v2.5h1.01V7h1.49V6Z"></path></g>
        </svg>
          <div style={{marginTop:'20px'}}>Hotels & Homes</div>
        </NavLink>
      </li>
      <li>
        <NavLink to="/private-stays" className='search-styles' onClick={() => handleLinkClick(<SearchBoxTop h1="BOOK A HOME ON AGODA HOMES" h2="More spacious. More local. More of why you travel." />, <PrivateStaysBottom />)}>
        <svg id="HomeSymbolFillIcon" className="search-icons" viewBox="0 0 24 24"><g clipPath="url(#clip0_2_6692)"><path fillRule="evenodd" clipRule="evenodd" d="m12.518 2.145 9 5.446a1 1 0 0 1 .482.855V21a1 1 0 0 1-1 1h-6v-7.067a1 1 0 0 0-.883-.993L14 13.933h-4a1 1 0 0 0-.993.883L9 14.933V22H3a1 1 0 0 1-1-1V8.446a1 1 0 0 1 .482-.855l9-5.446a1 1 0 0 1 1.036 0Z"></path></g>
         </svg>
         <div style={{marginTop:'20px'}}>Private Stays</div>
        </NavLink>
      </li>
      <li>
        <NavLink to="/flight-hotel" className='search-styles' onClick={() => handleLinkClick(<HotelsTop />, <FlightHotelBottom />)}>
        <svg id="HotelFlightAccommodationFillIcon" className="search-icons" viewBox="0 0 24 24"><g clipPath="url(#clip0_2_3715)"><path fillRule="evenodd" clipRule="evenodd" d="M10 13v9.023H2V14a1 1 0 0 1 1-1h7Zm-2 5H4v1h4v-1Zm13.5-8a.5.5 0 0 1 .5.5V22H11V10.5a.5.5 0 0 1 .5-.5h10ZM19 16h-2v2h1.01v-1H19v-1Zm-3 0h-2v2h1.01v-1H16v-1Zm-8-1H4v.954h4V15Zm11-2h-2v2h1.01v-1H19v-1Zm-3 0h-2v2h1.01v-1H16v-1ZM8.127 1.301a2 2 0 0 1 1.44.028l.17.078 4.94 2.576 3.726-1.357a1.19 1.19 0 0 1 .933 2.185l-.12.051-10.743 3.91a2 2 0 0 1-2.139-.506l-.112-.13L4 5.337l.485-.176a2 2 0 0 1 1.73.175l.138.092 1.442 1.06L10.95 5.34 7.085 1.681l1.042-.38Z"></path></g>
        </svg>
        <div style={{marginTop:'20px'}}>Flight + Hotel</div>
        </NavLink>
      </li>
      <li>
        <NavLink to="/flights" className='search-styles' onClick={() => handleLinkClick(<SearchBoxTop h1="BOOK YOUR BEST FLIGHT ON AGODA TODAY" h2="Instantly search and book over 200 airlines worldwide" />, <FlightsBottom />)}>
        <svg id="Flight3TransportationFillIcon" className="search-icons" viewBox="0 0 24 24"><g clipPath="url(#clip0_1_869)"><path fillRule="evenodd" clipRule="evenodd" d="M4.775 4.604 3 6.379l8.408 4.02-3.827 3.826-2.15-.704a1.034 1.034 0 0 0-1.053.252l-1.28 1.281 3.557 2.29 2.291 3.56 1.281-1.283c.276-.275.373-.682.252-1.052l-.704-2.15 3.826-3.826L17.62 21l1.776-1.775c.26-.258.362-.636.27-.99l-2.411-9.298 3.29-3.29a1.551 1.551 0 0 0-2.193-2.193l-3.29 3.29-9.297-2.41a1.035 1.035 0 0 0-.99.27Z"></path></g>
        </svg>
        <div style={{marginTop:'20px'}}>Flights</div>
        </NavLink>
      </li>
      <li>
        <NavLink to="/activities" className='search-styles' onClick={() => handleLinkClick(<SearchBoxTop h1="BOOK A UNIQUE EXPERIENCE ON AGODA TODAY" h2="Search among thousands of attractions, tours, activities, and transfers" />, <ActivitiesBottom />)}>
        <svg id="FerrisWheelActivityFillIcon" className="search-icons" viewBox="0 0 24 24"><g clipPath="url(#clip0_2_1547)"><path fillRule="evenodd" clipRule="evenodd" d="M12 10.5c.54 0 1.013.352 1.173.86l.031.119L15.187 21H16a1 1 0 0 1 1 1v1H7v-1a1 1 0 0 1 1-1h.812l1.984-9.521A1.23 1.23 0 0 1 12 10.5ZM13.5 1a.5.5 0 0 1 .5.5v.723A8.993 8.993 0 0 1 18.71 5H21.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-.723c.146.643.223 1.313.223 2 0 1.052-.18 2.062-.512 3H21.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.467-.321 9.008 9.008 0 0 1-2.21 1.471l-.21-1.01A8.031 8.031 0 0 0 18 16.29L18 15.28l-3.423-2.106-.28-1.348 3.82 2.353A.499.499 0 0 1 18.5 14l.918.001c.375-.927.582-1.94.582-3.001 0-.69-.087-1.36-.252-2H18.5a.5.5 0 0 1-.5-.5v-.606l-4.168 2.565a2.235 2.235 0 0 0-.779-.695L18 6.72l.001-1.01a7.999 7.999 0 0 0-4-2.458L14 4.5a.5.5 0 0 1-.5.5h-1v4.557a2.232 2.232 0 0 0-1 0V5h-1a.5.5 0 0 1-.5-.5V3.252a7.999 7.999 0 0 0-4 2.457V6.72l4.947 3.044c-.31.167-.578.405-.78.696L6 7.895V8.5a.5.5 0 0 1-.5.5H4.252A8.014 8.014 0 0 0 4 11c0 1.061.207 2.074.582 3.001L5.5 14c.153 0 .29.07.382.178l3.82-2.351-.281 1.347L6 15.279v1.012a8.03 8.03 0 0 0 2.387 1.849l-.21 1.01a9.013 9.013 0 0 1-2.21-1.472A.498.498 0 0 1 5.5 18h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h1.012A8.986 8.986 0 0 1 3 11c0-.687.077-1.357.223-2H2.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h2.791a8.993 8.993 0 0 1 4.71-2.777L10 1.5a.5.5 0 0 1 .5-.5h3Z"></path></g>
        </svg>
        <div style={{marginTop:'20px'}}>Activities</div>
        </NavLink>
      </li>
      <li>
        <NavLink to="/airport-transfer" className='search-styles' onClick={() => handleLinkClick(<SearchBoxTop h1="BOOK YOUR AIRPORT TRANSFER" h2="Get to your hotel easily and securely" />, <AirportTransferBottom />)}>
        <svg id="CarFlightTransportationFillIcon" className="search-icons" viewBox="0 0 24 24"><g clipPath="url(#clip0_1_863)"><path fillRule="evenodd" clipRule="evenodd" d="M11.657 9.002 12 9c2.672 0 4.436.297 5.143.443a.67.67 0 0 1 .442.326l.043.087 1.875 4.644H21a1 1 0 0 1 .993.883L22 15.5a1 1 0 0 1-.883.993L21 16.5h-1.001l.001 5a1.5 1.5 0 0 1-1.356 1.493L18.5 23a1.5 1.5 0 0 1-1.493-1.355L17 21.5v-.47H7v.47a1.5 1.5 0 0 1-2.993.145L4 21.5v-5H3a1 1 0 0 1-.993-.883L2 15.5a1 1 0 0 1 .883-.993L3 14.5h1.498l1.888-4.645a.68.68 0 0 1 .393-.386l.09-.026.208-.041c.77-.147 2.327-.379 4.58-.4ZM17.25 16a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm-10.5 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm5.474-5.801-.237-.002c-1.74 0-3.434.204-4.15.303l-.357.051-1.506 4.143H18l-1.492-4.143-.58-.08a32.93 32.93 0 0 0-3.704-.272ZM10.314 1a1 1 0 0 1 .573.18l.096.077 3.6 3.243h3.167a1.25 1.25 0 0 1 .128 2.494L17.75 7H5.987a1 1 0 0 1-.91-.585l-.042-.11L4 3.074h1.103a1 1 0 0 1 .664.252l.086.086.959 1.088h3.886L8.748 1h1.566Z"></path></g></svg>
        <div style={{marginTop:'20px'}}>Airport transfer</div>
        </NavLink>
      </li>
    </ul>
  );
}


function SearchTitle() {
  const [topComponent, setTopComponent] = useState(<HotelsTop />);
  const [bottomComponent, setBottomComponent] = useState(<HotelsHomesBottom />);

  const handleLinkClick = (topComponent, bottomComponent) => {
    console.log("Hii Sri")
    setTopComponent(topComponent);
    setBottomComponent(bottomComponent);
  };
  return (
    <div className='search-box-background'>
      {topComponent}
      <nav>
        <NavigationLinks handleLinkClick={handleLinkClick} />
      </nav>
      {bottomComponent}
    </div>
  )
}

export default SearchTitle


    // <div>
    //   <Routes>
    //     <Route
    //     // 
    //       path="/hotels-homes"
    //       element={
    //         <div>
    //           {topComponent}
    //           <nav>
    //             <ul>
    //               <li>
    //                 <NavLink
    //                   to="/hotels-homes"
    //                   onClick={() => handleLinkClick(<HotelsTop />, <HotelsHomesBottom />)}>
    //                   Hotels & Homes
    //                 </NavLink>
    //               </li>
    //               <li>
    //                 <NavLink
    //                   to="/private-stays"
    //                   onClick={() => handleLinkClick(<PrivateStaysTop />, <PrivateStaysBottom />)}>
    //                   Private Stays
    //                 </NavLink>
    //               </li>
    //               <li>
    //                 <NavLink
    //                   to="/flight-hotel"
    //                   onClick={() => handleLinkClick(<HotelsTop />, <FlightHotelBottom />)}>
    //                   Flight + Hotel
    //                 </NavLink>
    //               </li>
    //               <li>
    //                 <NavLink
    //                   to="/flights"
    //                   onClick={() => handleLinkClick(<FlightsTop />, <FlightsBottom />)}>
    //                   Flights
    //                 </NavLink>
    //               </li>
    //               <li>
    //                 <NavLink
    //                   to="/activities"
    //                   onClick={() => handleLinkClick(<ActivitiesTop />, <ActivitiesBottom />)}>
    //                   Activities
    //                 </NavLink>
    //               </li>
    //               <li>
    //                 <NavLink
    //                   to="/long-stays"
    //                   onClick={() => handleLinkClick(<AirportTransferTop />, <AirportTransferBottom />)}>
    //                   Airport transfer
    //                 </NavLink>
    //               </li>
    //             </ul>
    //           </nav>
    //           {bottomComponent}
    //         </div>
    //       }
    //     />

    //     <Route
    //       path="/private-stays"
    //       element={
    //         <div>
    //           {topComponent}
    //           <nav>
    //             <ul>
    //               <li>
    //                 <NavLink
    //                   to="/hotels-homes"
    //                   onClick={() => handleLinkClick(<HotelsTop />, <HotelsHomesBottom />)}>
    //                   Hotels & Homes
    //                 </NavLink>
    //               </li>
    //               <li>
    //                 <NavLink
    //                   to="/private-stays"
    //                   onClick={() => handleLinkClick(<PrivateStaysTop />, <PrivateStaysBottom />)}>
    //                   Private Stays
    //                 </NavLink>
    //               </li>
    //               <li>
    //                 <NavLink
    //                   to="/flight-hotel"
    //                   onClick={() => handleLinkClick(<HotelsTop />, <FlightHotelBottom />)}>
    //                   Flight + Hotel
    //                 </NavLink>
    //               </li>
    //               <li>
    //                 <NavLink
    //                   to="/flights"
    //                   onClick={() => handleLinkClick(<FlightsTop />, <FlightsBottom />)}>
    //                   Flights
    //                 </NavLink>
    //               </li>
    //               <li>
    //                 <NavLink
    //                   to="/activities"
    //                   onClick={() => handleLinkClick(<ActivitiesTop />, <ActivitiesBottom />)}>
    //                   Activities
    //                 </NavLink>
    //               </li>
    //               <li>
    //                 <NavLink
    //                   to="/long-stays"
    //                   onClick={() => handleLinkClick(<AirportTransferTop />, <AirportTransferBottom />)}>
    //                   Airport transfer
    //                 </NavLink>
    //               </li>
    //             </ul>
    //           </nav>
    //           {bottomComponent}
    //         </div>
    //       }
    //     />


    //     <Route
    //       path="/flight-hotel"
    //       element={
    //         <div>
    //           {topComponent}
    //           <nav>
    //             <ul>
    //               <li>
    //                 <NavLink
    //                   to="/hotels-homes"
    //                   onClick={() => handleLinkClick(<HotelsTop />, <HotelsHomesBottom />)}>
    //                   Hotels & Homes
    //                 </NavLink>
    //               </li>
    //               <li>
    //                 <NavLink
    //                   to="/private-stays"
    //                   onClick={() => handleLinkClick(<PrivateStaysTop />, <PrivateStaysBottom />)}>
    //                   Private Stays
    //                 </NavLink>
    //               </li>
    //               <li>
    //                 <NavLink
    //                   to="/flight-hotel"
    //                   onClick={() => handleLinkClick(<HotelsTop />, <FlightHotelBottom />)}>
    //                   Flight + Hotel
    //                 </NavLink>
    //               </li>
    //               <li>
    //                 <NavLink
    //                   to="/flights"
    //                   onClick={() => handleLinkClick(<FlightsTop />, <FlightsBottom />)}>
    //                   Flights
    //                 </NavLink>
    //               </li>
    //               <li>
    //                 <NavLink
    //                   to="/activities"
    //                   onClick={() => handleLinkClick(<ActivitiesTop />, <ActivitiesBottom />)}>
    //                   Activities
    //                 </NavLink>
    //               </li>
    //               <li>
    //                 <NavLink
    //                   to="/long-stays"
    //                   onClick={() => handleLinkClick(<AirportTransferTop />, <AirportTransferBottom />)}>
    //                   Airport transfer
    //                 </NavLink>
    //               </li>
    //             </ul>
    //           </nav>
    //           {bottomComponent}
    //         </div>
    //       }
    //     />

    //     <Route
    //       path="/flights"
    //       element={
    //         <div>
    //           {topComponent}
    //           <nav>
    //             <ul>
    //               <li>
    //                 <NavLink
    //                   to="/hotels-homes"
    //                   onClick={() => handleLinkClick(<HotelsTop />, <HotelsHomesBottom />)}>
    //                   Hotels & Homes
    //                 </NavLink>
    //               </li>
    //               <li>
    //                 <NavLink
    //                   to="/private-stays"
    //                   onClick={() => handleLinkClick(<PrivateStaysTop />, <PrivateStaysBottom />)}>
    //                   Private Stays
    //                 </NavLink>
    //               </li>
    //               <li>
    //                 <NavLink
    //                   to="/flight-hotel"
    //                   onClick={() => handleLinkClick(<HotelsTop />, <FlightHotelBottom />)}>
    //                   Flight + Hotel
    //                 </NavLink>
    //               </li>
    //               <li>
    //                 <NavLink
    //                   to="/flights"
    //                   onClick={() => handleLinkClick(<FlightsTop />, <FlightsBottom />)}>
    //                   Flights
    //                 </NavLink>
    //               </li>
    //               <li>
    //                 <NavLink
    //                   to="/activities"
    //                   onClick={() => handleLinkClick(<ActivitiesTop />, <ActivitiesBottom />)}>
    //                   Activities
    //                 </NavLink>
    //               </li>
    //               <li>
    //                 <NavLink
    //                   to="/long-stays"
    //                   onClick={() => handleLinkClick(<AirportTransferTop />, <AirportTransferBottom />)}>
    //                   Airport transfer
    //                 </NavLink>
    //               </li>
    //             </ul>
    //           </nav>
    //           {bottomComponent}
    //         </div>
    //       }
    //     />

    //     <Route
    //       path="/activities"
    //       element={
    //         <div>
    //           {topComponent}
    //           <nav>
    //             <ul>
    //               <li>
    //                 <NavLink
    //                   to="/hotels-homes"
    //                   onClick={() => handleLinkClick(<HotelsTop />, <HotelsHomesBottom />)}>
    //                   Hotels & Homes
    //                 </NavLink>
    //               </li>
    //               <li>
    //                 <NavLink
    //                   to="/private-stays"
    //                   onClick={() => handleLinkClick(<PrivateStaysTop />, <PrivateStaysBottom />)}>
    //                   Private Stays
    //                 </NavLink>
    //               </li>
    //               <li>
    //                 <NavLink
    //                   to="/flight-hotel"
    //                   onClick={() => handleLinkClick(<HotelsTop />, <FlightHotelBottom />)}>
    //                   Flight + Hotel
    //                 </NavLink>
    //               </li>
    //               <li>
    //                 <NavLink
    //                   to="/flights"
    //                   onClick={() => handleLinkClick(<FlightsTop />, <FlightsBottom />)}>
    //                   Flights
    //                 </NavLink>
    //               </li>
    //               <li>
    //                 <NavLink
    //                   to="/activities"
    //                   onClick={() => handleLinkClick(<ActivitiesTop />, <ActivitiesBottom />)}>
    //                   Activities
    //                 </NavLink>
    //               </li>
    //               <li>
    //                 <NavLink
    //                   to="/long-stays"
    //                   onClick={() => handleLinkClick(<AirportTransferTop />, <AirportTransferBottom />)}>
    //                   Airport transfer
    //                 </NavLink>
    //               </li>
    //             </ul>
    //           </nav>
    //           {bottomComponent}
    //         </div>
    //       }
    //     />


    //     <Route
    //       path="/long-stays"
    //       element={
    //         <div>
    //           {topComponent}
    //           <nav>
    //             <ul>
    //               <li>
    //                 <NavLink
    //                   to="/hotels-homes"
    //                   onClick={() => handleLinkClick(<HotelsTop />, <HotelsHomesBottom />)}>
    //                   Hotels & Homes
    //                 </NavLink>
    //               </li>
    //               <li>
    //                 <NavLink
    //                   to="/private-stays"
    //                   onClick={() => handleLinkClick(<PrivateStaysTop />, <PrivateStaysBottom />)}>
    //                   Private Stays
    //                 </NavLink>
    //               </li>
    //               <li>
    //                 <NavLink
    //                   to="/flight-hotel"
    //                   onClick={() => handleLinkClick(<HotelsTop />, <FlightHotelBottom />)}>
    //                   Flight + Hotel
    //                 </NavLink>
    //               </li>
    //               <li>
    //                 <NavLink
    //                   to="/flights"
    //                   onClick={() => handleLinkClick(<FlightsTop />, <FlightsBottom />)}>
    //                   Flights
    //                 </NavLink>
    //               </li>
    //               <li>
    //                 <NavLink
    //                   to="/activities"
    //                   onClick={() => handleLinkClick(<ActivitiesTop />, <ActivitiesBottom />)}>
    //                   Activities
    //                 </NavLink>
    //               </li>
    //               <li>
    //                 <NavLink
    //                   to="/long-stays"
    //                   onClick={() => handleLinkClick(<AirportTransferTop />, <AirportTransferBottom />)}>
    //                   Airport transfer
    //                 </NavLink>
    //               </li>
    //             </ul>
    //           </nav>
    //           {bottomComponent}
    //         </div>
    //       }
    //     />

    //   </Routes>
    // </div>