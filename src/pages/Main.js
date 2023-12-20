import "./styling/Main.css";

import smallMix from "../images/backgrounds/product-mix-small.jpg";
import wideMix from "../images/backgrounds/product-mix.jpg";
import focus from "../images/backgrounds/focus.jpg";
import lavendel from "../images/backgrounds/lavendel.jpg";
import wideLavendel from "../images/backgrounds/lavendel-wide.jpg";

import PageContainer from "../components/PageContainer";
import PopularSection from "../components/PopularSection";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <PageContainer>
      <section className="Home">
        <div className="Focus">
          <img 
            src={smallMix} 
            className="SmallMixImg" 
            alt="By Katherine Hanlon on Unsplash" 
            width="100%" 
            height="auto"
          />
          <img 
            src={wideMix} 
            className="WideMixImg" 
            alt="By Katherine Hanlon on Unsplash"
            width="100%" 
            height="auto"
          />
        </div>
        <div className="FocusText">
          <p>
            Embracing nature's goodness for a vibrant and healthier complexion.
          </p>
        </div>
        <div className="Focus">
          <img 
            src={focus} 
            className="FocusImg" 
            alt="By Chelsea shapouri on Unsplash" 
            width="100%" 
            height="auto"
          /> 
        </div>
      </section>
      <PopularSection />
      <div className="FocusText">
        <p>
        Indulge in our organic skincare crafted with care. 
        From seed to serum, our products embody nature's purity for radiant, healthy skin.
        </p>
      </div>
      <div className="Focus">
        <img 
          src={lavendel} 
          className="FinalImage" 
          alt="by Matthias Oberholzer on Unsplash" 
          width="100%" 
          height="auto"
        />
        <img 
          src={wideLavendel}
          className="FinalImageWide"
          alt="by Matthias Oberholzer on Unsplash"
          width="100%"
          height="auto"
        />
      </div>
      <Footer />
    </PageContainer>
  )
}

export default Main;