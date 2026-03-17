import React from "react";
import "./HomeBanner.css";
import banner1 from "../assets/home_banner11.jpg";
import banner2 from "../assets/home_banner12.jpg";
import banner3 from "../assets/home_banner13.jpg";

function HomeBanner() {
  return (
    // <div className="main-carousel ">
    //   <div id="carouselExample" className="carousel slide">
    //     <div className="carousel-inner carousel-cont">
    //       <div className="carousel-item active position-relative">
    //         <img src={banner1} className="d-block w-100" alt="..." />
    //         <div class="carousel-caption d-none d-md-block position-absolute top-0 start-0">
    //           <h5>First slide label</h5>
    //           <p>
    //             Some representative placeholder content for the first slide.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="carousel-item">
    //         <img src={banner2} className="d-block w-100" alt="..." />
    //       </div>
    //       <div className="carousel-item">
    //         <img src={banner3} className="d-block w-100" alt="..." />
    //       </div>
    //     </div>
    //     <button
    //       className="carousel-control-prev"
    //       type="button"
    //       data-bs-target="#carouselExample"
    //       data-bs-slide="prev"
    //     >
    //       <span
    //         className="carousel-control-prev-icon"
    //         aria-hidden="true"
    //       ></span>
    //       <span className="visually-hidden">Previous</span>
    //     </button>
    //     <button
    //       className="carousel-control-next"
    //       type="button"
    //       data-bs-target="#carouselExample"
    //       data-bs-slide="next"
    //     >
    //       <span
    //         className="carousel-control-next-icon"
    //         aria-hidden="true"
    //       ></span>
    //       <span className="visually-hidden">Next</span>
    //     </button>
    //   </div>
    // </div>

    <div
      id="carouselExampleAutoplaying"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner carousel-cont">
        <div className="carousel-item active position-relative">
          <img src={banner1} className="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block position-absolute top-0 start-0">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={banner2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={banner3} className="d-block w-100" alt="..." />
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
