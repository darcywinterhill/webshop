import "./styling/PopularProducts.css";

const PopularProducts = ({ name, about, image }) => {
  return (
    <div className="PopProductWrapper">
      <img src={image} className="PopImage" alt={name} />
      <h4>{name}</h4>
      <div className="Line"></div>
      <p>{about}</p>
    </div>
  )
}

export default PopularProducts;