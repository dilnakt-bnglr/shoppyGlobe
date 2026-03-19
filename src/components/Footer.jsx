import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-light mt-5">
      <div className="row">
        <div className="col-md-4">
          <Link to="/" className="text-decoration-none text-dark">
            <h4 className="fw-bold">ShoppyGlobe</h4>
          </Link>

          <p className="small mb-0">
            ShoppyGlobe is your one-stop destination for trendy fashion,
            everyday essentials, and curated deals from trusted sellers. Shop
            securely, track your orders easily, and enjoy fast delivery across
            the globe.
          </p>
        </div>

        <div className="col-md-4">
          <h6 className="text-uppercase mb-3">Quick Links</h6>
          <ul className="list-unstyled small">
            <Link to="/" className="text-decoration-none text-light-50">
              <li>Shop</li>
            </Link>

            <Link to="/cart" className="text-decoration-none text-light-50">
              <li>Cart</li>
            </Link>
          </ul>
        </div>
        <div className="col-md-4">
          <h6 className="text-uppercase mb-3">Get in Touch</h6>
          <p className="small mb-1">Email: support@shoppyglobe.com</p>
          <p className="small mb-3">Phone: +91-98765-43210</p>
        </div>
      </div>
      <hr className="border-secondary mt-4" />
      <div className="text-center ">
        <span className="">© 2026 ShoppyGlobe. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
