import "./styling/BuyButton.css";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BuyButton = () => {

  const message = () => toast.success("This is what this button does atm. Enjoy the page!");

  return (
    <div 
      className="Button" 
      onClick={message}
    >
      <p>
        Add to cart
      </p>
    </div>
  )
}

export default BuyButton;