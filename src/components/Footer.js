import { Link } from 'react-router-dom'

import "./styling/Footer.css";

import facebook from "../images/logos/fb-logo.png";
import instagram from "../images/logos/ig-logo.png";
import youtube from "../images/logos/yt-logo.png";

import ScrollToTop from './UI/ScrollToTop';

const Footer = () => {

  return (
    <footer>
      <div className="FooterLinkWrapper">
        <ul>
          <Link 
            to="/FAQ"
            onClick={ScrollToTop}
          >
          <li>
            FAQ
          </li>
          </Link>
          <Link 
            to="/privacy"
            onClick={ScrollToTop}
          >
          <li>
            Privacy Policy
          </li>
          </Link> 
          <Link 
            to="/shipping&returns"
            onClick={ScrollToTop}
          >
          <li>
            Shipping & Returns
          </li>
          </Link>
          <Link 
            to="/contact"
            onClick={ScrollToTop}
          >
          <li>
            Contact
          </li>
          </Link>
        </ul>

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