import { Link, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./styling/ProductPage.css";

import products from '../data/Products.json';

import PageContainer from "../components/PageContainer";
import BuyButton from '../components/UI/BuyButton';
import Footer from '../components/Footer';

const ProductPage = () => {

const {name} = useParams();

let productDetails = products.find((p) => p.name === name);

  return (
    <PageContainer>
      <Link 
        to="/shop" 
        className="BackToShop"
      >
        <p className="BackToShopText">
          Shop
        </p>
      </Link>
      <div className="DetailedProductWrapper">
        <img 
          src={productDetails.image} 
          className="DetailedProductImage" 
          alt={productDetails.name} 
        />
        <div className="ProductContent">
          <h3>
            {name}
          </h3>
          <p className="About">
            {productDetails.about}
          </p>
          <p className="Price">
            {productDetails.price}
          </p>
          <BuyButton />
          <ToastContainer 
            position="top-center"
            autoClose={3500}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <p className="Description">
            {productDetails.description}
          </p>
        </div>
      </div>
      <Footer />
    </PageContainer>
  )
}

export default ProductPage;