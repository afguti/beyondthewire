import MarkdownIt from 'markdown-it';
import fm from 'front-matter';

const md = new MarkdownIt();
const posts = import.meta.glob('../content/posts/*.md', { 
  query: '?raw',
  import: 'default',
  eager: true
});

export const getAllPosts = () => {
  return Object.entries(posts).map(([filepath, content]) => {
    try {
      const slug = filepath.replace('../content/posts/', '').replace('.md', '');
      const { attributes: frontmatter, body } = fm(content);
      
      return {
        slug,
        frontmatter,
        content: md.render(body)
      };
    } catch (error) {
      console.error('Error processing markdown file:', filepath, error);
      return null;
    }
  }).filter(Boolean);
};

export const getPostBySlug = (slug) => {
  const allPosts = getAllPosts();
  return allPosts.find(post => post.slug === slug);
};