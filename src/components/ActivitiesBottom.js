import React from 'react'

function ActivitiesBottom() {
  return (
    <div className="search-box-options">
    <div className="search-box-container">
        <div className="Options-content">
            <div className="Options-content-box">
                <div className="Options-content-box">
                    <div className="Options-content-subbox">


                        <div className="Options-table-content">

                            <div className="destination-property-search">
                                <div className="destination-property-search-box">
                                    {/* <!-- <span><i className="destination-search-symbol"></i> </span> --> */}
                                    <div className="user-input-destination">
                                        {/* <!-- <input placeholder="Enter a destination or property" className="place-user-input"> --> */}
                                        <label className="destination-property" style={{display: "flex"}}>
                                            <img src="magnifying-glass.png" className="search-icon" />
                                            <input className="place-user-input"placeholder="Enter a destination or property" />
                                        </label>
                                    </div>
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

export default ActivitiesBottom
