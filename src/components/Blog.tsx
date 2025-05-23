import React from 'react';
import './Blog.css';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Technology in 2024",
    excerpt: "Exploring the latest trends and innovations that will shape the technology landscape in the coming year.",
    date: "March 15, 2024",
    author: "John Doe",
    category: "Technology",
    image: "https://source.unsplash.com/random/800x600?technology"
  },
  {
    id: 2,
    title: "Best Practices for Digital Marketing",
    excerpt: "Learn about the most effective digital marketing strategies that can help your business grow.",
    date: "March 10, 2024",
    author: "Jane Smith",
    category: "Marketing",
    image: "https://source.unsplash.com/random/800x600?marketing"
  },
  {
    id: 3,
    title: "Innovation in Business Strategy",
    excerpt: "Discover how innovative business strategies can give your company a competitive edge.",
    date: "March 5, 2024",
    author: "Mike Johnson",
    category: "Business",
    image: "https://source.unsplash.com/random/800x600?business"
  }
];

const Blog: React.FC = () => {
  return (
    <section className="blog-section">
      <div className="blog-container">
        <h2>Latest Insights</h2>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <img 
                  src={post.image || 'https://picsum.photos/800/600?random'} 
                  alt={post.title} 
                  onError={(e) => { e.currentTarget.src = 'https://picsum.photos/800/600?random'; }}
                />
                <span className="category">{post.category}</span>
              </div>
              <div className="blog-content">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-meta">
                  <span className="date">{post.date}</span>
                  <span className="author">By {post.author}</span>
                </div>
                <button className="read-more">Read More</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog; 