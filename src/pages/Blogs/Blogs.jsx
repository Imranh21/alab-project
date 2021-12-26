import React from "react";
import BlogList from "../../components/blogs/BlogList";
import classes from "./Blogs.module.css";
import Heading from "../../components/heading/Heading";

const Blog = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Heading title="All blogs" />
        <BlogList />
      </div>
    </div>
  );
};

export default Blog;
