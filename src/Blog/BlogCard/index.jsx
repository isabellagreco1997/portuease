import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ id, title, date, readTime, author, description, image, category }) => {
  return (
    <Link to={`/blog/${id}`} className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 transition">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-t-lg" />
      <div className="p-4">
        <div className="text-sm text-blue-600 font-semibold mb-2">{category}</div>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <div className="text-gray-500 text-sm mb-2">
          <span>{date}</span> &bull; <span>{readTime} read</span> &bull; <span>By {author}</span>
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
      </div>
    </Link>
  );
};

export default BlogCard;