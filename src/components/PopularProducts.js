import "./styling/PopularProducts.css";

const PopularProducts = ({ name, about, image }) => {
  return (
    <div className="ProductWrapper">
      <img 
        src={image} 
        className="ProductImage" 
        alt={name} 
      />
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