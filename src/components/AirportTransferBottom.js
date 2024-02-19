import React from 'react'

function AirportTransferBottom() {
  return (
    <div className="search-box-options">
      <div className="search-box-container">
          <div className="Options-content">
              <div className="Options-content-box">
                  <div className="Options-content-box">


                          <div className="Options-table-content">

                              <div className="Options-content-column">
                                  <div className="Options-content-column1-box">
                                      <div className="option-buttons-1">
                                          <button className="overnight-stays-button">
                                              <span className="button-content-1">From airport</span>
                                          </button>
                                      </div>
                                      <div className="option-buttons-2">
                                          <button className="day-use-stays-button">
                                              <span className="button-content-2">To airport</span>
                                          </button>
                                      </div>
                                  </div>
                              </div>

                              {/* <div className="destination-property-search">
                                          <label className="destination-property" style={{display: "flex"}}>
                                              <img src="magnifying-glass.png" className="search-icon" />
                                              <input className="place-user-input"placeholder="Enter a destination or property" />
                                          </label>
                              </div> */}

                              
                              <div className="pickup-destination">
                              <div className="pickup-airport">
                                  <div className="Icon-wrapper">
                                      <img src="calendar.png" className="calendar-icons" />
                                      <div className="departure-section">
                                          <label className="departure-heading-label">
                                              <span className="departure-heading">Departure</span>
                                          </label>
                                          {/* <input placeholder="Thu,12 Oct 2023" className="departure-location" /> */}
                                      </div>
                                  </div>
                              </div>

                              <div className="destination-location">
                                  <div className="Icon-wrapper">
                                      <img src="calendar.png" className="calendar-icons" />
                                      <div className="departure-section">
                                          <label className="departure-heading-label">
                                              <span className="departure-heading">Departure</span>
                                          </label>
                                          {/* <input placeholder="Thu,12 Oct 2023" className="departure-location" /> */}
                                      </div>
                                  </div>
                              </div>
                              </div>

                              <div className="Hotels-homes-check-in">
                                  <div className="Hotels-homes-check-in-wrapper">
                                      <span><img className="calendar-icons" src="calendar.png" /> </span>
                                      <div className="check-in-data">
                                          <div className="check-in-data-wrapper">
                                              {/* <div className="check-in-date">4 Oct 2023</div> */}
                                              <div className="check-in-day">Pick-up-date</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                              <div className="Hotels-homes-check-out">
                                  <div className="Hotels-homes-check-out-wrapper">
                                      <span><img className="calendar-icons" src="calendar.png" /> </span>
                                      <div className="check-out-data">
                                          <div className="check-out-data-wrapper">
                                              <div className="check-out-date">12:00 PM</div>
                                              {/* <div className="check-out-day">Thursday</div> */}
                                          </div>
                                      </div>
                                  </div>
                              </div>

                              <div className="Hotels-homes-occupancy">
                                  <div className="Hotels-homes-occupancy-wrapper">
                                      <span><img className="two-people-icons" src="two-people.png" /></span>
                                      <div className="occupancy-data">
                                          <div className="occupancy-data-wrapper">
                                              <div className="occupancy-count"><span>1 passenger</span></div>
                                              {/* <div className="occupancy-rooms">1 room</div> */}
                                              {/* <div className="occupancy-count-increase">
                                                  <img src="down-arrow.png" className="count-increase-icon" />
                                              </div> */}
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          
                      {/* </div> */}
                  </div>

                  {/* <div className="bundle-and-add-Flight">
                      <div className="bundle-and-add-Flight-wrapper">
                          <div className="bundle-and-save">
                              <p className="bundle-style">Bundle & Save</p>
                          </div>
                          <div className="add-flight">
                              <button className="add-flight-button">
                                  <div className="add-flight-button-wrapper">
                                      <svg className="plus-symbol">
                                          <use href="https://www.agoda.com/en-gb/?cid=1844104#PlusSymbolFillIcon"></use>
                                      </svg>
                                      <i className="fa-solid fa-plus"></i>
                                      <span className="plus-symbol-content">Add a flight</span>
                                  </div>
                              </button>
                          </div>
                      </div>

                  </div> */}


              </div>
           </div>
           <button className="search-button">
               <div className="search-content">SEARCH</div>
           </button>
       </div>
     </div>
  )
}

export default AirportTransferBottom
