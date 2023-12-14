import "./styling/Products.css";

const Products = ({ name, about, image, price }) => {
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
      <p>
        {price}
      </p>
    </div>
  )
}

export default Products;