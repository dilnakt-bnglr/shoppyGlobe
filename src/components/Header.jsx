import React from "react";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div
      className="d-flex align-items-center bg-light
"
    >
      <p className="text-capitalize fw-bolder p-2 fs-3">ShoppyGlobe</p>

      <div className="d-flex mx-auto">
        <input type="text" className="form-control d-inline-block me-2" />
        <button className="btn btn-primary">Search</button>
      </div>

      <div>
        <ul className="d-flex list-unstyled mb-0">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/cart">
            <li className="me-3">
              <BsCart3 />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
