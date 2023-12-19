import "./styling/ReadMoreButton.css";

import forward from "../../images/forward.png";

const ReadMoreButton = () => {
  return (
    <div className="ReadMoreContainer">
      <p>
        Read More &nbsp;
      </p>
      <img src={forward} className="Forward" alt="icon by icons8, href='https://icons8.com/icon/7849/forward'>" />
    </div>

  )
}

export default ReadMoreButton;