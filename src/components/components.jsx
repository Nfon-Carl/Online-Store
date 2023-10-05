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
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/about">About</a>
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
