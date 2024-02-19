import React from 'react'
import Footer1Links from './Footer1Links'

function Footer1() {
  return (
        <section className="footer-section">
            {/* <div className="footer-links"> */}
                <div className="footer-links-section">

                    <div className="footer-part-links">
                        <h5 className="footer-heading">Help</h5>
                        <ul className="Group-list">
                            <Footer1Links data='Help centre' />
                            <Footer1Links data='FAQs' />
                            <Footer1Links data='Privacy policy' />
                            <Footer1Links data='Cookie policy' />
                            <Footer1Links data='Terms of use' />
                            <Footer1Links data='Manage cookie settings' />
                        </ul>
                    </div>  

                    <div className="footer-part-links">
                        <h5 className="footer-heading">Company</h5>
                        <ul className="Group-list">
                            <Footer1Links data='About us' />
                            <Footer1Links data='Careers' />
                            <Footer1Links data='Press' />
                            <Footer1Links data='Blog' />
                            <Footer1Links data='PointsMAX' />
                        </ul>
                    </div>

                    <div className="footer-part-links">
                        <h5 className="footer-heading">Destinations</h5>
                        <ul className="Group-list">
                            <Footer1Links data='Countries/Territories' />
                            <Footer1Links data='Cities' />
                        </ul>
                    </div>

                    <div className="footer-part-links">
                        <h5 className="footer-heading">Partner with us</h5>
                        <ul className="Group-list">
                            <Footer1Links data='YCS partnerportal' />
                            <Footer1Links data='Partner Hub' />
                            <Footer1Links data='Advertise on Agoda' />
                            <Footer1Links data='Affiliates' />
                            <Footer1Links data='Connectivity partners' />
                        </ul>
                    </div>

                    <div className="footer-part-links">
                        <h5 className="footer-heading">Get the app</h5>
                        <ul className="Group-list">
                            <Footer1Links data='iOS app' />
                            <Footer1Links data='Android app' />
                        </ul>
                    </div>
                </div>
            {/* </div> */}
        </section>                  
  )
}

export default Footer1
