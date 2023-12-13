import "./styling/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="FooterLinkWrapper">
        <p>
          FAQ
        </p>
        <p>
          Privacy Policy
        </p>
        <p>
          Shipping & Returns
        </p>
        <p>
          Contact
        </p>
        <p>
          Return Policy
        </p>

        <div className="SocialWrapper">
          <a href="#">
            IG
          </a>
          <a href="#">
            FB
          </a>
          <a href="#">
            YT
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;