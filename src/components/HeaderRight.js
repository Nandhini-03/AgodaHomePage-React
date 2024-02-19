import React,{useState,useEffect} from 'react'

function HeaderRight() {
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

  const priceLanguage=windowWidth <= 414 ? (
    <div style={{display:"flex"}}>
        <button className="listPlace-account-button">List your place</button>
        <img className="language-image-button" src="https://cdn6.agoda.net/images/mobile/flag-us@2x.png" />
        <button className="price-display-button" style={{marginLeft:"20px"}}>Rs.</button> 
    </div>
  ) :null;


  return (
    <div className="language-price-sign-in"> 
    
      {priceLanguage}

      <div style={{marginRight:'30px',display:"flex"}}>    
        <button className="sign-in-button">Sign in</button>
        <button className="create-account-button">Create account</button>
      </div>
      <div className="cart-image">
          <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" className="SvgIconstyled__SvgIconStyled-sc-1i6f60b-0 coLXuD"><path d="M3.133 3c.7 0 1.3.482 1.459 1.152l.026.136L4.862 6h15.536a1 1 0 0 1 1 1l-.005.093-.013.091-1.083 5.777a2.5 2.5 0 0 1-2.286 2.033l-.17.006H6.146l.103.712a1.5 1.5 0 0 0 1.346 1.282l.139.006H19.5a.5.5 0 0 1 .09.992L19.5 18h-2a2.5 2.5 0 1 1-4 0h-3a2.5 2.5 0 1 1-3.807-.228 2.496 2.496 0 0 1-1.404-1.753l-.03-.165L3.629 4.429a.5.5 0 0 0-.404-.42L3.133 4H1.5a.5.5 0 0 1-.09-.992L1.5 3h1.633zM8.5 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-9.496-4H17.84a1.5 1.5 0 0 0 1.441-1.084l.033-.14L20.398 7H5.005l.999 7z"></path>
          </svg>
      </div>
      <div className="menu-image">
          <svg width="1.5em" height="1.5em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="SvgIconstyled__SvgIconStyled-sc-1i6f60b-0 coLXuD"><path fillRule="evenodd" d="M21.5 20a.5.5 0 1 1 0 1h-19a.5.5 0 1 1 0-1h19zm0-8a.5.5 0 1 1 0 1h-19a.5.5 0 1 1 0-1h19zm0-8a.5.5 0 1 1 0 1h-19a.5.5 0 0 1 0-1h19z"></path>
          </svg>
      </div>

    </div> 
  )
}

export default HeaderRight
