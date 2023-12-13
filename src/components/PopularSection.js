import "./styling/PopularSection.css";

import products from "../data/Products.json";

import PopularProducts from "../components/PopularProducts";

const popData = (values) => {
  return (
    <PopularProducts
      key={values.name}
      name={values.name}
      about={values.about}
      image={values.image}
      sales={values.sales}
    />
  )
}

var filtered = products.filter(a => a.sales === "bestseller");

const PopularSection = ({ name, about, image }) => {
  
  return (
    
    <section className="PopularContainer">
      
      <div className="SectionTitle">
        <p>Super Heroes</p>
        <h3>Shop our Bestsellers</h3>
      </div>
      <div className="PopProductList">
        {filtered.map(popData)}
      </div>
    </section>
  )
}

export default PopularSection;