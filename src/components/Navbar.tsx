import logo from "../components/images/logo_canva.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-light">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <a className="navbar-brand" href="/home">
              <img src={logo} alt="Logo" width="120" height="60" />
            </a>
          </div>

          <div className="d-flex">
            <div className="paddingLeftRight navbar-light">
              <a className="nav-link active" aria-current="page" href="/home">
                Home
              </a>
            </div>
            <div className="paddingLeftRight navbar-light">
              <a
                className="nav-link active"
                aria-current="page"
                href="/addOffer"
              >
                Add an offer
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
