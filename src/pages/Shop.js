import "./styling/Shop.css";

import products from "../data/Products.json";

import PageContainer from "../components/PageContainer";
import Products from "../components/Products";
import Footer from "../components/Footer";

const prodData = (values) => {
  return (
    <Products
      key={values.name}
      name={values.name}
      about={values.about}
      image={values.image}
      price={values.price}
    />
  )
}

const Shop = () => {
  return (
    <PageContainer>
      <div 
        className="ShopHeaderImgContainer"
        title="Photo by Anthony Tran on Unsplash"
      >
      </div>
      <div className="ProductList">
        {products.map(prodData)}
      </div>
      <Footer />
    </PageContainer>
  )
}

export default Shop;