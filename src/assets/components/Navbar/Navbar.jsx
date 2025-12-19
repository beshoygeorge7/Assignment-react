import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <>
      <nav className="navbar shadow navbar-expand-lg fixed-top p-4">
        <div className="container">
          <NavLink className="navbar-brand text-uppercase text-white fw-bold fs-2" to="/">
            start framework
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto text-uppercase fw-bold ">
              <NavLink className="nav-link text-white  me-3 " to="/about">
                About
              </NavLink>
              <NavLink className="nav-link text-white me-3" to="/protofolio">
                Protofolio
              </NavLink>
              <NavLink className="nav-link text-white me-3" to="/contact">
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

    </>
  );
}
