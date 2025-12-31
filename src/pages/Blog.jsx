import React from "react";
import BlogCard from "@/components/BlogCard";
import blogs from "@/data/blogs";

function Blog() {
  return (
    <div className="blog-section">
      <div className="container">
        <div className="blog-list">
          {blogs.map((item) => (
            <BlogCard key={item.id} blog={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
