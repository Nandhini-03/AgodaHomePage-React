import React,{useState,useEffect} from 'react'
import './styles.css'
import HeaderList from './HeaderList'
import HeaderRight from './HeaderRight'

function Header() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

//   console.log(windowWidth)
  return (
    <div className='header-contents'>
        <div style={{display:"flex"}}>
            <div className="Logo-navigation">
                <a href="Home.html" className="Agoda-logo-Home-link">
                    <div className="primary-logo">
                        <img className="primary-logo-image" src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg" alt="Primary Logo" />
                    </div>
                </a>
            </div>
        
            <div>

                {windowWidth > '414' && 
                    <div className='title-content'>
                        <HeaderList data="Flight+Hotel" style={{marginLeft:'50px'}}/>
                        <HeaderList data="Hotels & Homes" />
                        <HeaderList data="Flights" />
                        <HeaderList data="Coupons & Deals" />
                        <HeaderList data="Airport transfer" />
                        <HeaderList data="..." />
                    </div>
                }
            </div>
            
        </div>
        <HeaderRight />   
    </div>
  )
}

export default Header
