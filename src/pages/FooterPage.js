import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./styling/FooterPage.css";

import PageContainer from '../components/PageContainer';
import Footer from '../components/Footer';

const FooterPage = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const { page} = useParams();

  const submitMessage = () => toast.success("Thank you for contacting us!");

  const handleSubmit = () => {
    setName("");
    setEmail("");
    setContactMessage("");
    submitMessage();
  }

  switch (page) {
    case "FAQ":
      return (
        <PageContainer>
          <h2 className="PageTitle">FAQ</h2>
          <div className="TitleLine"></div>
          <div className="ContentContainer">
            <h3>
              Why should I choose organic skincare products over conventional ones?
            </h3>
            <p>
              Choosing organic skincare products ensures that you are using formulations 
              free from synthetic chemicals and pesticides. Our organic products harness the 
              power of natural ingredients, promoting healthier skin without harmful additives.
            </p>
            <h3>
              Are your products cruelty-free, and do you test on animals?
            </h3>
            <p>
              Absolutely! We are committed to cruelty-free practices. 
              None of our products are tested on animals, and we prioritize ethical sourcing 
              to create skincare that is both environmentally and animal-friendly.
            </p>
            <h3>
              How can I be sure your products are truly organic?
            </h3>
            <p>
              We take pride in our commitment to organic standards. 
              Our products are certified organic by reputable organizations, 
              guaranteeing that they meet strict criteria for sourcing and manufacturing. 
              Look for the organic certification logo on our packaging for assurance.
            </p>
            <h3>
              Can organic skincare products address specific skin concerns?
            </h3>
            <p>
              Yes, our organic skincare range is designed to address a variety of skin concerns. 
              Whether you're dealing with dryness, acne, or signs of aging, our formulations 
              incorporate botanical extracts and natural compounds known for their therapeutic 
              properties to help nurture and revitalize your skin.
            </p>
            <h3>
              Are your packaging materials environmentally friendly?
            </h3>
            <p>
              We prioritize sustainability at every step. 
              Our packaging is thoughtfully chosen to minimize environmental impact. 
              We use recyclable materials, and our commitment to eco-friendly practices 
              extends beyond product formulation to ensure a positive contribution to the health 
              of both your skin and the planet.
            </p>
          </div>
          <Footer />
        </PageContainer>
      );
    case "privacy":
      return (
        <PageContainer>
          <h2 className="PageTitle">Privacy Policy</h2>
          <div className="TitleLine"></div>
          <div className="ContentContainer">
            <p>Last Updated: 2023-12-29</p>
            <br />
            <p>
              Thank you for choosing this brand. for your organic skincare needs. 
              We are committed to protecting your privacy and providing a secure online experience. 
              This Privacy Policy outlines how we collect, use, and protect your personal information 
              when you visit our website or make a purchase.
            </p>

            <h3>
            Information We Collect
            </h3>
            <h4>
              Personal Information:
            </h4>
            <p>
              When you make a purchase, we collect information such as your name, billing address, 
              shipping address, email address, and phone number.
            </p>
            <h4>
              Payment Information:
            </h4>
            <p>
              We do not store your credit/debit card information. 
              All payment transactions are processed through secure third-party payment gateways.
            </p>
            <h4>
              Account Information:
            </h4>
            <p>
              If you create an account with us, we collect and store your username, password, 
              and preferences to enhance your shopping experience.
            </p>
            <h4>
              Communications:
            </h4>
            <p>
              We may collect information when you communicate with us, 
              such as through customer support or when you subscribe to our newsletter.
            </p>

            <h3>
              How We Use Your Information
            </h3>
            <h4>
              Order Processing:
            </h4>
            <p>
              We use your personal information to process and fulfill your orders, including shipping and tracking.
            </p>
            <h4>
              Customer Support:
            </h4>
            <p>
              Your information helps us respond to your customer service requests more efficiently.
            </p>
            <h4>
             Marketing:
            </h4>
            <p>
              With your consent, we may send you promotional emails about new products, 
              special offers, or other updates. You can opt-out at any time.
            </p>
            <h4>
              Improving Our Services:
            </h4>
            <p>
              We may use aggregated, anonymized data for analytical purposes to improve our website, products, and services.
            </p>

            <h3>
              Information Sharing
            </h3>
            <h4>
              Third-Party Service Providers:
            </h4>
            <p>
              We may share your information with third-party service providers to 
              facilitate order fulfillment, payment processing, and other essential services.
            </p>
            <h4>
              Legal Compliance:
            </h4>
            <p>
              We may disclose personal information to comply with applicable laws, regulations, or legal processes.
            </p>

            <h3>
              Security
            </h3>
            <p>
            We prioritize the security of your information. We implement reasonable security 
            measures to protect against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h3>
              Your Choices
            </h3>
            <p>
            You have the right to access, correct, or delete your personal information. 
            You may also opt-out of marketing communications by following the instructions in the emails we send.
            </p>

            <h3>
              Changes to This Policy
            </h3>
            <p>
              We may update our Privacy Policy periodically. 
              We will notify you of any changes by posting the updated policy on our website.
            </p>
            <br />
            <p>
              Thank you for trusting this brand. for your organic skincare needs!
            </p>
          </div>
          <Footer />
        </PageContainer>
      );
    case "shipping&returns":
      return (
        <PageContainer>
          <h2 className="PageTitle">Shipping & Returns</h2>
          <div className="TitleLine"></div>
          <div className="ContentContainer">
          <p>
            Last Updated: 2023-08-12
          </p>
          <br />
          <p>
            Thank you for choosing this brand. for your organic skincare needs. 
            We are dedicated to providing you with the best possible service, 
            including a smooth, efficient and hassle-free shipping and/or returns process.
          </p>

          <h3>
            Processing and Shipping Times
          </h3>
          <h4>
            Processing Time:
          </h4>
          <p>
            In-stock products are typically processed and shipped within three (3) working days 
            from the date of your order. Please note that orders placed on weekends or public holidays 
            will be processed on the next business day.
          </p>
          <h4>
            Shipping Method:
          </h4>
          <p>
            We use reliable shipping carriers to ensure the safe and timely delivery of your products. 
            Once your order is shipped, you will receive a confirmation email with tracking information.
          </p>

          <h3>
            Shipping Costs
          </h3>
          <p>For orders under 1000 SEK, a shipping fee of 49 SEK will be applied. 
            Enjoy free shipping on orders totaling 1000 SEK or more.
          </p>

          <h3>
            International Shipping
          </h3>
          <p>
            At this time, we only offer shipping within Sweden. 
            We are actively working on expanding our shipping services to include international destinations. 
            Please check our website for updates on international shipping availability.
          </p>

          <h3>
            Order Tracking
          </h3>
          <p>
            Once your order has been shipped, you will receive an email with a tracking number, 
            allowing you to track your package's progress.
          </p>

          <h3>
            Damaged or Lost Items
          </h3>
          <p>
            If your order arrives damaged or if the items are lost in transit, 
            please contact our customer support team at [your@email.com] as soon as possible, 
            and we will assist you in resolving the issue.
          </p>

          <div className="TitleLine"></div>

          <h3>
            Eligibility for Returns
          </h3>
          <p>
            To be eligible for a return, the product must be unused, unopened, and in its original packaging. 
            We cannot accept returns for products that have been used or opened due to hygiene and safety reasons.
            You may request a return within 30 days from the date of purchase. 
            After this period, we unfortunately cannot offer a refund or exchange.
          </p>

          <h3>
            How to Initiate a Return
          </h3>
          <p>
            Please contact our customer service team at [your@email.com] to initiate the return process. 
            Provide your order number and details about the item you wish to return.
          </p>

          <h3>
            Refund Process
          </h3>
          <p>
            Once we receive the returned product, our team will inspect it to ensure it meets the return eligibility criteria.
            If the return is approved, we will initiate a refund to your original payment method 
            or offer an exchange, as per your preference.
          </p>

          <h3>
            Shipping Costs
          </h3>
          <p>
            You are responsible for the cost of return shipping unless the return is due to an error on our part.
            Original shipping costs are non-refundable.
          </p>
          <br />
          <p>
            Thank you for choosing this brand. for your organic skincare needs!
          </p>
          </div>
          <Footer />
        </PageContainer>
      );
    case "contact":
      return (
        <PageContainer>
          <h2 className="PageTitle">Contact</h2>
          <div className="TitleLine"></div>
          <div className="ContentContainer">
            <h4 className="Contact">
              Customer Service: support@thisbrand.com
            </h4>
            <form>
              <p>
                <label for="name">NAME:</label>
                <br />
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Name"         
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="InputField" 
                />
              </p>
              <p>
                <label for="email">EMAIL:</label>
                <br />
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="InputField" 
                />
              </p>
              <p>
                <label for="message">MESSAGE:</label>
                <br />
                <input 
                  type="text" 
                  id="message" 
                  name="message" 
                  placeholder="Message" 
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  className="InputField" 
                />
              </p>
            </form>
            <p>
                <button onClick={handleSubmit}>GET IN TOUCH</button>
            </p>
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
          </div>
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