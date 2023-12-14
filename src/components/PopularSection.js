import "./styling/PopularSection.css";

import products from "../data/Products.json";

import Products from "../components/Products";

const prodData = (values) => {
  return (
    <Products
      key={values.name}
      name={values.name}
      about={values.about}
      image={values.image}
      sales={values.sales}
    />
  )
}

var filtered = products.filter(a => a.sales === "bestseller");

const PopularSection = () => {
  
  return (
    <section className="PopularContainer">
      <div className="SectionTitle">
        <p>
          Super Heroes
        </p>
        <h2>
          Shop our Bestsellers
        </h2>
      </div>
      <div className="PopProductList">
        {filtered.map(prodData)}
      </div>
    </section>
  )
}

export default PopularSection;