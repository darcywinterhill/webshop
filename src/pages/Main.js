import "./styling/Main.css";

import smallMix from "../images/backgrounds/product-mix-small.jpg";
import wideMix from "../images/backgrounds/product-mix-wide.jpg";
import focus from "../images/backgrounds/focus.jpg";

import PageContainer from "../components/PageContainer";
// import Header from "../components/Header";
import PopularSection from "../components/PopularSection";

const Main = () => {
  return (
    <PageContainer>
      {/* <Header /> */}
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
      <div className="Focus2">
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
    </PageContainer>
  )
}

export default Main;