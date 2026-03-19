import React from "react";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartCount = useSelector((store) => store.cart.cart.length); // Subscribe the cartData to show the count of the cartitem
  return (
    <div className="d-flex justify-content-between align-items-center bg-light px-4 py-2">
      <Link to="/" className="text-decoration-none text-dark">
        <p className="text-capitalize fw-bolder fs-3 mb-0">ShoppyGlobe</p>
      </Link>

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
              {cartCount > 0 ? (
                <span className="ms-1 text-primary fw-bold">{cartCount}</span>
              ) : (
                ""
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
