const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <p>Shopmit</p>
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
