import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  return (
    <div className="blog-card">
      <div className="image">
        <img src={blog.image} alt={blog.title} className="blog-img" />
      </div>

      <div className="blog-content-box">
        <p className="blog-date">{blog.date}</p>
        <h3 className="blog-title">{blog.title}</h3>

        {/* Render HTML content from blogs.js */}
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        <Link className="blog-link" to={blog.link}>
          Learn more →
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
