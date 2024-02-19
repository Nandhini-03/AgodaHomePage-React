import React from 'react'
import Footer2Links from './Footer2Links'

const array1=['Bali Hotels','Bandung Hotels','Bangkok Hotels','Boracay Island Hotels','Busan Hotels','Cebu Hotels','Chiang Mai Hotels','Da Nang Hotels','Fukuoka Hotels','Hanoi Hotels','Hat Yai Hotels','Ho Chi Minh Hotels','Hoi An Hotels','Hong Kong Hotels','Hua Hin Hotels','Hualien Hotels','Ipoh Hotels','Jakarta Hotels','Jeju Island Hotels','Johor Bahru Hotels','Kaohsiung Hotels','Kota Kinabalu Hotels','Krabi Hotels','Kuala Lumpur Hotels','Kuantan Hotels','Kyoto Hotels']
const array2=['Macau Hotels','Malacca Hotels','Manila Hotels','Nagoya Hotels','Nha Trang Hotels','Okinawa Hotels','Osaka Hotels','Pattaya Hotels','Penang Hotels','Phuket Hotels','Sapporo Hotels','Seoul Hotels','Shanghai Hotels','Singapore Hotels','Surabaya Hotels','Taichung Hotels','Tainan Hotels','Taipei Hotels','Tokyo Hotels','Yilan Hotels','Yogyakarta Hotels']
const array3=['Argentina Hotels','Brazil Hotels','Canada Hotels','Mexico Hotels','United States Hotels','Venezuela Hotels']
const array4=['Cambodia Hotels','China Hotels','India Hotels','Indonesia Hotels','Japan Hotels','Laos Hotels','Malaysia Hotels','Myanmar Hotels','Nepal Hotels','Philippines Hotels','South Korea Hotels','SriLanka Hotels','Taiwan Hotels','Thailand Hotels','Vietnam Hotels']
const array5=['Austria Hotels','Czech Republic Hotels','Denmark Hotels','Finland Hotels','France Hotels','Germany Hotels','Greece Hotels','Hungary Hotels','Irelend Hotels','Italy Hotels','Netherland Hotels','Russia Hotels','Spain Hotels','Swedan Hotels','Switzerlad Hotels','United Kingdom Hotels']
const array6=['Bali Guide','Bangkok Guide','Hong Kong Guide','Jakarta Guide','Jeju Island Guide','Kuala Lumpur Guide','Kyoto Guide','Kyushu Guide','Malacca Guide','Manila Guide','Nara Guide','Osaka Guide','Phuket Guide','Sapporo Guide','Seoul Guide','Singapore Guide','Taichung Guide','Taipei Guide','Tokyo Guide']
const array7=['Bangkok Apartments','Kuala Lumpur Apartments','Manila Apartments','Osaka Apartments','Pattaya Apartments','Tokyo Apartments']
const array8=['Bali Bungalows','Koh kood Bungalows','Koh Lanta Bungalows','Koh Phangan Bungalows','Koh Samet Bungalows','Phu Quoc Island Bungalows']
const array9=['Bali Villas','Phuket Villas','Pattaya Villas','Hua Hin/Cha-am Villas','Seoul Villas','Port Dickson Villas']
const array10=['Jeju Island Vacation Rentals','Okinawa Main island Vacation Rentals','Tokyo Vacation Rentals','Bangkok Vacation Rentals','Kuala Lumpur Vacation Rentals','Malacca Vacation Rentals']
function Footer2() {
  return (
    <section className="continent-details">
        <div className="row">
            <div className="col">
                <ul className="List-links-ordered">
                    <h5 className="list-styles">Destination Cities</h5>
                    <h5 className="list-styles">Asia</h5>
                    <div>
                        {
                            array1.map((place) => <Footer2Links name={place}/>)
                        }
                    </div>
                </ul>
            </div>

            <div className="col">
                <ul className="List-links-ordered">
                    <li className="list-styles"></li>
                    <div>
                        {
                            array2.map((place) => <Footer2Links name={place}/>)
                        }
                    </div>
                {/* </ul>
                <ul className="List-links-ordered"> */}
                    <h5 className="list-styles">Europe</h5>
                    <Footer2Links name="London Hotels" />
                    <Footer2Links name="Paris Hotels" /> 
                {/* </ul>
                <ul className="List-links-ordered"> */}
                    <h5 className="list-styles">Middle East</h5>
                    <Footer2Links name="Dubai Hotels" />
                </ul>    
            </div>

            <div className="col">
                <ul className="List-links-ordered">
                    <h5 className="list-styles">Countries & Territories</h5>
                    <h5 className="list-styles">Africa</h5> 
                    <Footer2Links name='Morocco Hotels' />
                    <Footer2Links name="South Africa Hotels" />
                    <h5 className="list-styles">Americas</h5>
                    <div>
                        {
                            array3.map((place) => <Footer2Links name={place}/>)
                        }
                    </div>
                    <h5 className="list-styles">Asia</h5>
                    <div>
                        {
                            array4.map((place) => <Footer2Links name={place}/>)
                        }
                    </div>
                </ul>   
            </div> 

            <div className="col">
                <ul className="List-links-ordered">
                    <h5 className="list-styles">Europe</h5>
                    <div>
                        {
                            array5.map((place) => <Footer2Links name={place}/>)
                        }
                    </div>
                    <h5 className="list-styles">Middle East</h5>
                    <Footer2Links name="Bahrain Hotels" />
                    <Footer2Links name="Egypt Hotels" />
                    <Footer2Links name="Israel Hotels" />
                    <Footer2Links name="United Arab Emirates Hotels" />
                    <h5 className="list-styles">Oceania</h5>
                    <Footer2Links name="Australia Hotels" />
                    <Footer2Links name="New Zealand Hotels" />
                </ul>  
            </div> 

            <div className="col">
                <ul className="List-links-ordered">
                    <h5 className="list-styles">Destination Guides</h5>
                    <Footer2Links name="Destination Guides Home" />
                    <h5 className="list-styles">Asia</h5>
                    <div>
                        {
                            array6.map((place) => <Footer2Links name={place}/>)
                        }
                    </div>
                    <h5 className="list-styles">Europe</h5>
                    <Footer2Links name="Paris Guide" />
                    <h5 className="list-styles">Europe</h5>
                    <Footer2Links name="Dubai Guide" />
                    <Footer2Links name="Jeddah Guide" />
                    <Footer2Links name="Saudi Arabia Guide" />
                    <h5 className="list-styles">Oceania</h5>
                    <Footer2Links name="Brisbane Guide" />
                    <Footer2Links name="Melbourne Guide" />
                    <Footer2Links name="Sydney Guide" />
                </ul>    
            </div> 

            <div className="col">
                <ul className="List-links-ordered">  
                <h5 className="list-styles">Agoda Homes</h5>
                <div></div>
                <h5 className="list-styles">Asia Apartments</h5>
                {
                    array7.map((place) => <Footer2Links name={place}/>)
                }
                <h5 className="list-styles">Agoda Bungalows</h5>
                {
                    array8.map((place) => <Footer2Links name={place}/>)
                }
                <h5 className="list-styles">Agoda Villas</h5>
                {
                    array9.map((place) => <Footer2Links name={place}/>)
                }
                <h5 className="list-styles">Agoda Vacation Rentals</h5>
                {
                    array10.map((place) => <Footer2Links name={place}/>)
                }
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Footer2
