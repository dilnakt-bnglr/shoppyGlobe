import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-light">
      <div className="row">
        <div className="col-md-4">
          <h4 className="fw-bold">ShoppyGlobe</h4>
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
            <li>
              <a href="#" className="text-decoration-none text-light-50">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-light-50">
                Cart
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <h6 className="text-uppercase mb-3">Get in Touch</h6>
          <p className="small mb-1">Email: support@shoppyglobe.com</p>
          <p className="small mb-3">Phone: +91-98765-43210</p>
        </div>
      </div>
      <hr className="border-secondary mt-4" />
      <div className="text-center">
        <span>© 2026 ShoppyGlobe. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
