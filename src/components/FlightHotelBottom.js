import React from 'react'

function FlightHotelBottom() {
  return (
  //   <div classNameName='search-box-options'>
  //   <div classNameName='search-box-container'>
  //     <div classNameName='Options-content'>
  //       Flights and Hotels
  //     </div>
  //   </div>
  // </div>

  <div className="search-box-options">
    <div className="search-box-container">
        <div className="Options-content">
            <div className="Options-content-box">
                <div className="Options-content-box">
                    <div className="Options-content-subbox">


                        <div className="Options-table-content">

                            <div className="round-trip-economy-direct">
                                <div className="round-trip-economy">
                                    <div className="round-trip">
                                        <div className="round-trip-section">
                                            <button className="dropbtn-round-trip">
                                                <span className="drpbtn-content">One-way</span>
                                                {/* <!-- <img src="down-arrow.png" className="arrow-icons"> --> */}
                                                <svg className="arrow-icons" id="ThinDropdownArrowFillIcon" viewBox="0 0 24 24">
                                                    <g clip-path="url(#clip0_2_6681)">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.616 7.616a1.25 1.25 0 0 1 1.666-.091l.102.091L12 16.233l8.616-8.617a1.25 1.25 0 0 1 1.666-.091l.102.091a1.25 1.25 0 0 1 .091 1.666l-.091.102-9.5 9.5a1.25 1.25 0 0 1-1.666.091l-.102-.091-9.5-9.5a1.25 1.25 0 0 1 0-1.768Z"></path>
                                                    </g>
                                                </svg>
                                            </button>
                                        </div>
                                        {/* <!-- <div className="dropbtn-round-trip-content">
                                            <a href="#" data-option="option ">One-way</a>
                                            <a href="#" data-option="option ">Round-trip</a>
                                        </div> --> */}
                                    </div>
                                    <div className="economy">
                                        <div className="economy-section">
                                            <button className="dropbtn-economy">
                                                <span className="drpbtn-content">Economy</span>
                                                {/* <!-- <img src="down-arrow.png" className="arrow-icons"> --> */}
                                                <svg className="arrow-icons" id="ThinDropdownArrowFillIcon" viewBox="0 0 24 24">
                                                    <g clip-path="url(#clip0_2_6681)">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.616 7.616a1.25 1.25 0 0 1 1.666-.091l.102.091L12 16.233l8.616-8.617a1.25 1.25 0 0 1 1.666-.091l.102.091a1.25 1.25 0 0 1 .091 1.666l-.091.102-9.5 9.5a1.25 1.25 0 0 1-1.666.091l-.102-.091-9.5-9.5a1.25 1.25 0 0 1 0-1.768Z"></path>
                                                    </g>
                                                </svg>
                                            </button>
                                        </div>
                                        {/* <!-- <div className="dropbtn-economy-content">
                                            <a href="#" data-option="option 1">Economy</a>
                                            <a href="#" data-option="option 1">Premium economy</a>
                                            <a href="#" data-option="option 1">Business</a>
                                            <a href="#" data-option="option 1">First</a>
                                        </div> --> */}
                                    </div>
                                </div>    

                                <div className="direct-only-section">
                                    <label className="direct-only-label">
                                        <input type="checkbox" className="direct-only-checkbox" />
                                        <span className="direct-only-content">Direct only</span>
                                    </label>
                                </div>
                            </div>

                            <div className="flight-departure-return">
                                <div className="flight-location">
                                    <div className="flying-from-section">
                                        <div className="flying-from">
                                            <div className="Icon-wrapper">
                                                <img src="plane.png" className="flight-icons" />
                                                <div className="flying-from-content">
                                                    <div className="label-box">
                                                        <label className="city-airport-label">
                                                            <span className="city-airport">City or airport name</span>
                                                        </label>
                                                    </div>
                                                    <input placeholder="Flying from" className="flying-from-input" />
                                                </div>
                                            </div>  
                                        </div>      
                                    </div>

                                    <div className="route-swap-section">
                                        <button className="route-swap-button">
                                            <div className="route-swap-content">
                                                <svg width="1em" height="1em" viewBox="0 0 24 24" className="route-swap-icon">
                                                    <path d="M7.854 12.146a.5.5 0 0 1 .057.638l-.057.07L3.706 17H20.5a.5.5 0 1 1 0 1H3.706l4.148 4.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057-5-5a.5.5 0 0 1-.057-.638l.057-.07 5-5a.5.5 0 0 1 .708 0zm8.292-11a.5.5 0 0 1 .638-.057l.07.057 5 5 .057.07a.5.5 0 0 1 0 .568l-.057.07-5 5-.07.057a.5.5 0 0 1-.568 0l-.07-.057-.057-.07a.5.5 0 0 1 0-.568l.057-.07L20.293 7H3.5a.5.5 0 0 1 0-1h16.793l-4.147-4.146-.057-.07a.5.5 0 0 1 .057-.638z"></path>
                                                </svg>
                                            </div>
                                        </button>
                                    </div>

                                    <div className="flying-to-section">
                                        <div className="Icon-wrapper">
                                            <img src="location.png" className="location-icons" />                                                                   
                                            <div className="flying-to-content">
                                                <div className="label-box">
                                                    <label className="city-airport-label">
                                                        <span className="city-airport">City or airport name</span>
                                                    </label>
                                                </div>
                                                <input placeholder="Flying to" className="flying-to" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="departure-return">
                                    <div className="departure">
                                        <div className="Icon-wrapper">
                                            <img src="calendar.png" className="calendar-icons" />
                                            <div className="departure-section">
                                                <label className="departure-heading-label">
                                                    <span className="departure-heading">Departure</span>
                                                </label>
                                                <input placeholder="Thu,12 Oct 2023" className="departure-location" />
                                            </div>
                                        </div>
                                    </div>
                                        {/* <img src="calendar.png" className="calendar-icons" />
                                        <div className="return-section">
                                            <label className="return-heading-label">
                                                <span className="return-heading">Return</span>
                                            </label>
                                            <input placeholder="Return" className="return-location" />
                                        </div> */}
                                    </div>

                            </div>

                            <div className="passenger-hotel">
                                <div className="passenger-room">
                                    <div className="passenger">
                                        <img src="two-people.png" className="two-people-icons" />
                                        <input placeholder="1 Passengers" className="passenger-count" />
                                    </div>
                                    <div className="room">
                                        <img src="open-door.png" className="room-icons" />
                                        <input placeholder="1 Room" className="room-count" />
                                    </div>
                                </div>

                                <div className="search-hotels">
                                    <label style={{display: "flex"}}>
                                        <div className="search-hotels-label">
                                              <input type="checkbox" className="search-hotels-content" />
                                        </div>
                                        <div className="search-hotels-value">Search for hotel in different cities or dates</div>
                                    </label>
                                </div>
                            </div>
                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button className="search-button">
            <div className="search-content">SEARCH</div>
        </button>
    </div>
  </div> 
  )
}

export default FlightHotelBottom
