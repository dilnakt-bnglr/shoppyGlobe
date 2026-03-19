import React from "react";
import "./HomeBanner.css";
import banner1 from "../assets/home_banner11.jpg";
import banner2 from "../assets/home_banner12.jpg";
import banner3 from "../assets/home_banner13.jpg";

function HomeBanner() {
  return (
    <div
      id="carouselExampleAutoplaying"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner carousel-cont">
        <div className="carousel-item active position-relative">
          <img src={banner1} className="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block position-absolute top-0  text-center text-black">
            <h5>Limited‑Time Deals, Big Savings</h5>
            <p>Grab up to 75% off on top picks before the offer ends.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={banner2} className="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block position-absolute top-50 left-10  text-center text-black">
            <h5>Discover Your Everyday Essentials</h5>
            <p>
              From fashion to gadgets, find everything you need in one place at
              ShoppyGlobe.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={banner3} className="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block position-absolute top-0  text-center text-black">
            <h5>Fast Delivery. Secure Shopping.</h5>
            <p>
              Enjoy safe checkout, easy tracking, and doorstep delivery every
              time.
            </p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default HomeBanner;
