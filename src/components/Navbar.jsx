const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <h1 className="nav-title">Beyond the wire</h1>
        <ul className="nav-links">
          <li><a href="/">HOME</a></li>
          <li><a href="/categories">CATEGORIES</a></li>
          <li><a href="/tags">TAGS</a></li>
          <li><a href="/archives">ARCHIVES</a></li>
          <li><a href="/about">ABOUT</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar 