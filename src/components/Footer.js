import "./styling/Footer.css";

import facebook from "../images/logos/fb-logo.png";
import instagram from "../images/logos/ig-logo.png";
import youtube from "../images/logos/yt-logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="FooterLinkWrapper">
        <p>
          FAQ
        </p>
        <p>
          Privacy Policy
        </p>
        <p>
          Shipping & Returns
        </p>
        <p>
          Contact
        </p>
        <p>
          Return Policy
        </p>

        <div className="SocialWrapper">
          <img 
            src={instagram} 
            className="Logo" 
            alt="icon by icons8, https://icons8.com/icon/84884/instagram" 
          />
          <img 
            src={facebook} 
            className="Logo" 
            alt="icon by icons8, https://icons8.com/icon/84872/facebook" 
          />
          <img 
            src={youtube} 
            className="Logo" 
            alt="icon by icons8, https://icons8.com/icon/85433/youtube-logo" 
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer;