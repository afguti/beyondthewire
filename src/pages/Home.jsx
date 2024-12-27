const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Your First Blog Post",
      preview: "This is a preview of your first blog post...",
      date: "Mar 15, 2024",
      category: "General",
      level: "Level 100"
    }
  ]

  return (
    <div className="home-container">
      {posts.map(post => (
        <article key={post.id} className="post-preview">
          <h2>{post.title}</h2>
          <p>{post.preview}</p>
          <div className="post-meta">
            <span>{post.date}</span>
            <span>{post.category}</span>
            <span>{post.level}</span>
          </div>
        </article>
      ))}
    </div>
  )
}

export default Home 