import "./styling/About.css";

import PageContainer from "../components/PageContainer";
import Footer from "../components/Footer";

const About = () => {
  return (
    <PageContainer>
      <div 
        className="AboutHeaderImgContainer" 
        title="Photo by OC Gonzalez on Unsplash"
      >
      </div>
      <div className="AboutTextContainer">
        <h3>
          Our Journey
        </h3>
        <p>
          Welcome to this brand, where nature meets beauty in perfect harmony.
          Our journey began with a simple yet profound belief - that skincare should be a celebration of nature's purity. 
          In a world inundated with synthetic products, we set out on a mission to create a brand 
          that not only cares for your skin but also nurtures the environment. 
          Our story is woven with the threads of sustainability, ethics, and a deep reverence for the Earth.
        </p>
        <h3>
          Our Products
        </h3>
        <p>
        At this brand, we believe that the finest ingredients come from the heart of nature. 
        Our products are a testament to this belief, carefully crafted from organic, 
        ethically sourced botanicals that thrive in harmony with the Earth. 
        We meticulously select each ingredient for its unique benefits, 
        ensuring that our skincare range is not only effective but also gentle on your skin.
        </p>
        <h3>
          Our Vision
        </h3>
        <p>
        At this brand we strive to be a beacon of change in the beauty industry, advocating for transparency, 
        eco-friendly packaging, and cruelty-free practices. 
        As we grow, our vision remains rooted in a holistic approach to beauty that considers 
        the well-being of both your skin and the planet. 
        Join us on this journey towards a radiant, sustainable future, 
        where self-care is an act of love for yourself and the world around you.
        </p>
      </div>
      <Footer />
    </PageContainer>
  )
}

export default About;