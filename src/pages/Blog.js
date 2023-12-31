import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./styling/Blog.css";

import posts from "../data/Blog.json";

import BlogPosts from "../components/BlogPosts";
import PageContainer from "../components/PageContainer";
import Footer from "../components/Footer";

const blogData = (values) => {
  return (
    <BlogPosts
      key={values.title}
      title={values.title}
      date={values.date}
      intro={values.intro}
      image={values.img}
      credit={values.credit}
    />
  )
}

const Blog = () => {
  return (
    <PageContainer>
      <div 
        className="BlogHeaderImgContainer" 
        title="Photo by Nahil Naseer on Unsplash"
      ></div>
      <div className="BlogContainer">
        {posts.map(blogData)}
      </div>
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
      <Footer />
    </PageContainer>
  )
}

export default Blog;