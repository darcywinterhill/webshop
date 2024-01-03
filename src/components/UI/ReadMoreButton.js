import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./styling/ReadMoreButton.css";

import forward from "../../images/forward.png";

const ReadMoreButton = () => {

  const blogMessage = () => toast.success("Soon you will enter the blog post when clicking here!");

  return (
    <div 
      className="ReadMoreContainer"  
      onClick={blogMessage}
    >
      <p>
        Read More &nbsp;
      </p>
      <img 
        src={forward} 
        className="Forward" 
        alt="icon by icons8, href='https://icons8.com/icon/7849/forward'>" 
      />
    </div>

  )
}

export default ReadMoreButton;