import { Link } from 'react-router-dom';

import "./styling/Brand.css";

// var scrollToTopLink = document.getElementById("scrollToTopLink")

// var rootElement = document.documentElement

// function scrollToTop() {
//   rootElement.scrollTo({
//     top: 0,
//     behavior: "smooth"
//   })
// }

// scrollToTopLink.addEventListener("click", scrollToTop);

const Brand = () => {
  return (
    <Link 
      to="/" 
      className="HomeLink" 
      id="scrollToTopLink"
    >
      <div className="BrandContainer">
        <h1 className="BrandLogo">
          this brand.
        </h1>
      </div>
    </Link>
  )
}

export default Brand;