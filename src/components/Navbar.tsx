import { ChangeEvent, useState } from "react";
import logo from "../components/images/logo_canva.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  let [key, setKey] = useState("");

  const handleEvent = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setKey((event.target as HTMLInputElement).value);
  };

  const navigate = useNavigate();

  const handleSearch = () => {
    if (!key) {
      key = " "
    }
    // window.history.pushState({}, "", "/offers/results/" + encodeURIComponent(key) );
    navigate("/offers/results/" + encodeURIComponent(key));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-light">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <a className="navbar-brand" href="/home">
              <img src={logo} alt="Logo" width="120" height="60" />
            </a>
          </div>
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
          <div className="d-flex">
            <div>
              <form className="d-flex">
                <input
                  name=""
                  id="search"
                  type="text"
                  className="form-control"
                  placeholder="Position"
                  aria-describedby="button-addon2"
                  value={key}
                  onKeyDown={handleKeyDown}
                  onChange={(event) => {
                    handleEvent(event);
                  }}
                />
                <button className="btn btn-outline-success" id="button-addon3" onClick={handleSearch}>Search</button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
