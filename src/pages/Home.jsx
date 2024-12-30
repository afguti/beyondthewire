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
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Welcome to My Blog
        </h1>
        <div className="posts-list">
          {posts.map((post) => (
            <article key={post.slug} className="post-preview">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{post.frontmatter.title}</h2>
              <time className="text-gray-500 dark:text-gray-600">{new Date(post.frontmatter.date).toLocaleDateString()}</time>
              {post.frontmatter.description && (
                <p className="text-gray-700 dark:text-gray-300">{post.frontmatter.description}</p>
              )}
              <Link to={`/blog/${post.slug}`} className="text-blue-500 hover:underline dark:text-blue-400">
                Read more
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home; 