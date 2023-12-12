import { Link } from 'react-router-dom';

import "./styling/Brand.css";

const Brand = () => {
  return (
    <Link to="/" className="HomeLink">
      <div className="BrandContainer">
        <h1 className="BrandLogo">this brand.</h1>
      </div>
    </Link>
  )
}

export default Brand;