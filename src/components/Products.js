import "./styling/Products.css";

const Products = ({ name, about, image, price }) => {
  return (
    <div className="PopProductWrapper">
      <img src={image} className="PopImage" alt={name} />
      <h4>{name}</h4>
      <div className="Line"></div>
      <p>{about}</p>
      <p>{price}</p>
    </div>
  )
}

export default Products;