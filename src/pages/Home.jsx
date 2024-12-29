import { getAllPosts } from '../utils/posts';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = () => {
      const allPosts = getAllPosts();
      setPosts(allPosts);
    };
    loadPosts();
  }, []);

  return (
    <div className="home">
      <h1>Blog Posts</h1>
      <div className="posts-list">
        {posts.map((post) => (
          <article key={post.slug} className="post-preview">
            <h2>{post.frontmatter.title}</h2>
            <time>{new Date(post.frontmatter.date).toLocaleDateString()}</time>
            {post.frontmatter.description && (
              <p>{post.frontmatter.description}</p>
            )}
            <Link to={`/blog/${post.slug}`} className="read-more">
              Read more
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Home; 