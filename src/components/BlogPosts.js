import "./styling/BlogPosts.css";

import ReadMoreButton from "../components/UI/ReadMoreButton";

const BlogPosts = ({ title, date, intro, image, credit }) => {
  return (
    <div className="BlogPostWrapper">
      <img 
        src={image} 
        className="BlogImage" 
        alt={credit} 
      />
      <h4>
        {title}
      </h4>
      <p>{date}</p>
      <p>
        {intro}
      </p>
      <ReadMoreButton />
    </div>
  )
}

export default BlogPosts;