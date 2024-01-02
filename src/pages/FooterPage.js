import { useParams } from 'react-router-dom';

import "./styling/FooterPage.css";

import PageContainer from '../components/PageContainer';
import FAQ from '../pages/FAQ';
import Privacy from '../pages/Privacy';
import ShippingReturns from '../pages/ShippingReturns';
import Contact from '../pages/Contact';
import Footer from '../components/Footer';

const FooterPage = () => {

  const { page} = useParams();

  switch (page) {
    case "FAQ":
      return (
        <PageContainer>
          <FAQ /> 
          <Footer />
        </PageContainer>
      );
    case "privacy":
      return (
        <PageContainer>
          <Privacy />
          <Footer />
        </PageContainer>
      );
    case "shipping&returns":
      return (
        <PageContainer>
          <ShippingReturns />
          <Footer />
        </PageContainer>
      );
    case "contact":
      return (
        <PageContainer>
          <Contact />
          <Footer />
        </PageContainer>
      );
    default:
      return (
        <PageContainer>
          <h3>Unable to reach requested page.</h3>
        </PageContainer>
      );
  }
}

export default FooterPage;