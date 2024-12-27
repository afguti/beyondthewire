const Home = () => {
  const posts = [
    {
      id: 1,
      title: "The 3 way handshake",
      preview: "In this blog we will explore the 3 way handshake protocol...",
      date: "Dec 28, 2024",
      category: "Networking",
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