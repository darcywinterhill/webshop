import { Link } from 'react-router-dom';

import "./styling/Brand.css";

import ScrollToTop from './UI/ScrollToTop';

const Brand = () => {
  return (
    <div className="BrandContainer">
    <Link 
      to="/" 
      className="HomeLink" 
      id="scrollToTopLink"
      onClick={ScrollToTop}
    >
      <h1 className="BrandLogo">
        this brand.
      </h1>
    </Link>
    </div>
  )
}

export default Brand;