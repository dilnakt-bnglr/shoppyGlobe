import React from "react";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="d-flex justify-content-between align-items-center bg-light px-4 py-2">
      <p className="text-capitalize fw-bolder fs-3 mb-0">ShoppyGlobe</p>

      <nav>
        <ul className="d-flex align-items-center list-unstyled mb-0 gap-4">
          <li>
            <Link to="/" className="text-decoration-none text-dark">
              Home
            </Link>
          </li>
          <li>
            <Link to="/productlist" className="text-decoration-none text-dark">
              Products
            </Link>
          </li>
          <li className="position-relative">
            <Link to="/cart" className="text-decoration-none text-dark">
              <BsCart3 />
              <span className="ms-1">6</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
