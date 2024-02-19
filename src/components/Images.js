import React from 'react'

function Images(props) {
  return (
    <div className="featured-homes">
        <a href="#" className="featured-homes-link-style">
            <div className="featured-homes-grid-style">
                <img className="featured-homes-images" src={props.source} width="100%" height="200px" />
                
                <span className="featured-homes-name-style">{props.name}</span>

                <div className="location-style">
                    <div className="featured-homes-location">
                        <span>{props.place1}</span>
                    </div>
                    <div className="featured-homes-location">
                        <span>{props.place2}</span>
                    </div>
                </div>

                <div className="featured-homes-rupees">
                    <span className="featured-homes-value">{props.rupees}</span>
                </div>
            </div>
        </a>
    </div>
    )
}

export default Images


{/* <div className="featured-homes">
        <a href="#" className="featured-homes-link-style">
            <div className="featured-homes-grid-style">
                <div className="featured-homes-content">
                    <div className="featured-homes-ldGkj">
                        <img className="featured-homes-images" src={props.source} width="100%" height="200px" />
                    </div>
                </div>

                <div className="featured-homes-content">
                    <span className="featured-homes-name-style">{props.name}</span>
                </div>

                <div className="featured-homes-content">
                    <div className="location-style">
                        <div className="featured-homes-location"><span className="featured-homes-span-style"> </span> </div>
                        <div className="featured-homes-location">
                            <span>{props.place1}</span>
                        </div>
                        <div className="featured-homes-location">
                            <span>{props.place2}</span>
                        </div>
                    </div>
                </div>

                <div className="featured-homes-content">
                    <span className="featured-homes-space-style"> </span>
                </div>

                <div className="featured-homes-content">
                    <div className="featured-homes-amount">
                        <div className="featured-homes-rupees">
                            <span className="featured-homes-value">{props.rupees}</span>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div> */}