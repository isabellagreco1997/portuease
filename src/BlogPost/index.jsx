import React from 'react';
import { useParams } from 'react-router-dom';
import { useBlogs } from '../BlogContext';
import './BlogPost.scss'

const BlogPost = () => {
  const { id } = useParams();
  const { blogs } = useBlogs();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <img src={blog.image} alt={blog.title} className="w-full h-80 object-cover rounded-t-lg mb-8" />
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          <div className="text-gray-500 text-sm mb-4">
            <span>{blog.date}</span> &bull; <span>{blog.readTime} read</span> &bull; <span>By {blog.author}</span>
          </div>
          {console.log(blog.blogPost.content)}
          <div className="blog-post" dangerouslySetInnerHTML={{ __html: blog?.blogPost?.content }} />

        </div>
      </div>
    </div>
  );
};

export default BlogPost;