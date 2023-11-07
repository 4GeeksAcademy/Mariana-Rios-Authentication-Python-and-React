import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const {store, actions} = useContext(Context)

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Menu
        </button>
        <ul className="dropdown-menu">
          <li>
            <Link to="/login"><div className="dropdown-item">
              Login
            </div>
			</Link>
          </li>
          <li>
			<Link to="/signup">
            <div className="dropdown-item">
              Signup
            </div></Link>
          </li>
          <li>
            <div className="dropdown-item" onClick={actions.logout}>
              Logout
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
