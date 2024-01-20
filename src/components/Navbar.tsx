const Navbar = () => {
  return (
    <div>
      <nav className="navbar  bg-dark navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <nav className="navbar bg-body-tertiary">
            <div className="container">
              <a className="navbar-brand" href="#">
                <img src="src/image/logo_canva.png" width="120" height="60" />
              </a>
            </div>
          </nav>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Oferty
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Dodaj
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
