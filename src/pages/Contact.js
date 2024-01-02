import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./styling/FooterPage.css";

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const submitMessage = () => toast.success(`Thank you ${name} for contacting us!`);
  const errorMessage = () => toast.error("Please fill in the required fields.");
  const emailMessage = () => toast.error("Please enter a valid email adress.")

  const handleSubmit = () => {
    if (name === "" || email === "" || contactMessage === "") {
      errorMessage();
    } else if (name && contactMessage && !email.includes('@')) {
      emailMessage();
    } else {
      submitMessage(name);
      setName("");
      setEmail("");
      setContactMessage("");
    }
  }

  return (
    <div className="ContactContainer">
    <h2 className="PageTitle">Contact</h2>
      <div className="TitleLine"></div>
      <div>
        <p className="Contact">
          Customer Service: support@thisbrand.com
        </p>
        <p className="Contact">
          Or contact us by filling out the form below.
        </p>
        <form id="contactForm">
          <div className="UserInfo">
            <div className="InputWrapper">
            <label htmlFor="name">
              NAME: 
              <span className="Asterisk">
                *
              </span>
            </label>
            <br />
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Name"         
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="InputField" 
              required
            />
            </div>
            <div className="InputWrapper">
            <label htmlFor="email">
              EMAIL:
              <span className="Asterisk">
                *
              </span>
            </label>
            <br />
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="name@email.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="InputField" 
              required
            />
            </div>
          </div>
          <div className="InputWrapperMessage">
          <label htmlFor="message">
            MESSAGE:
            <span className="Asterisk">
              *
            </span>
          </label>
          <br />
          <textarea 
            name="message" 
            form="contactForm"
            id="message"  
            placeholder="Message" 
            value={contactMessage}
            onChange={(e) => setContactMessage(e.target.value)}
            className="InputTextArea" 
            required
          ></textarea>
          </div>
        </form>
        <button 
          type="button" 
          className="SubmitButton"
          onClick={handleSubmit}
        >
          GET IN TOUCH
        </button>
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
    </div>
  )
}

export default Contact;