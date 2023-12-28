import { Link } from 'react-router-dom'

import "./styling/Products.css";

const Products = ({ name, about, image, price }) => {

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
        className="ProductImage" 
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
      <p>
        {price}
      </p>
    </div>
  )
}

export default Products;