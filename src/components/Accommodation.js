import React from 'react'
import Promotions from './Promotions'

function Accommodation() {
  return (
    <div className="accommodation-flight-promotions" style={{width:"100%"}}>

        <div className="box-content-style">
            <h3 className="heading-style">Accommodation Promotions</h3>
            <div className="next-viewallbox-style">
                <a href="#" className="box-viewall-style">
                    <span className="spanStyled">View all</span>
                    <span className="spanStyled"> {'>'} </span>
                </a>
            </div>
        </div>

        <div className="accommodation-wrapper">
            <i id="leftAccommodation" className="fa-solid fa-angle-left"></i> 
            <div className="accommodation-carousel" style={{display:"flex"}}>
                <Promotions source="https://cdn6.agoda.net/images/WebCampaign/wcSP20230915IN/home_banner_web/en-us.png" />
                <Promotions source="https://cdn6.agoda.net/images/WebCampaign/wcSS20230219/home_banner_web3/en-us.png" />
                <Promotions source="https://cdn6.agoda.net/images/WebCampaign/wcMM20230312/home_banner_web2/en-us.png" />
                <Promotions source="https://cdn6.agoda.net/images/WebCampaign/wcM4S20230403Elite/home_banner_web2/en-us.png" />
                <Promotions source="https://cdn6.agoda.net/images/WebCampaign/wcSP20230403ID/home_banner_web/en-us.png" />
                <Promotions source="https://cdn6.agoda.net/images/WebCampaign/wcNO20230101/home_banner_web_withicon2/en-us.png" />
                <Promotions source="https://cdn6.agoda.net/images/WebCampaign/wc_20230731_customerreviewawards/home_banner_web/en-us.png" />
                <Promotions source="https://cdn6.agoda.net/images/WebCampaign/wcSP20230421KA/home_banner_web2/en-us.png" />
                <Promotions source="https://cdn6.agoda.net/images/WebCampaign/wcCF20230101Dealspage/home_banner_web/en-us.png" />
            </div>
            <i id="rightAccommodation" className="fa-solid fa-angle-right"></i>     
        </div> 
    </div>
  )
}

export default Accommodation
