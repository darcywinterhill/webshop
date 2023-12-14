import { Link } from 'react-router-dom';

import "./styling/Brand.css";

const scrollToTop =() => {
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

const Brand = () => {
  return (
    <div className="BrandContainer">
    <Link 
      to="/" 
      className="HomeLink" 
      id="scrollToTopLink"
      onClick={scrollToTop}
    >
      <h1 className="BrandLogo">
        this brand.
      </h1>
    </Link>
    </div>
  )
}

export default Brand;