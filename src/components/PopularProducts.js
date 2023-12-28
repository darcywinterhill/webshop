import { Link } from 'react-router-dom';

import "./styling/PopularProducts.css";

const PopularProducts = ({ name, about, image }) => {

  const scrollToTop =() => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  
  return (
    <div className="ProductWrapper">
      <Link 
        to={`/shop/${name}`}
        onClick={(scrollToTop)}
      >
      <img 
        src={image} 
        className="PopProductImage" 
        alt={name} 
      />
      </Link>
      <h3>
        {name}
      </h3>
      <div className="Line">
      </div>
      <p>
        {about}
      </p>
    </div>
  )
}

export default PopularProducts;