import React from "react";
import { BsCart3 } from "react-icons/bs";

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
          <li className="me-3">
            <a href="#" className="text-decoration-none">
              Home
            </a>
          </li>
          <li className="me-3">
            <a href="#" className="text-decoration-none">
              <BsCart3 />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
