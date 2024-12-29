import { useParams } from 'react-router-dom';
import { getPostBySlug } from '../utils/posts';

function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="blog-post">
      <h1>{post.frontmatter.title}</h1>
      {post.frontmatter.date && (
        <time>{new Date(post.frontmatter.date).toLocaleDateString()}</time>
      )}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}

export default BlogPost; 