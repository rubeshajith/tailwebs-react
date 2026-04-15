import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow">
            20 years of digital transformation in public service delivery
          </p>
          <h1 className="hero__heading">
            It's <span className="hero__highlight">possible.</span>
          </h1>
          <p className="hero__description">
            Catalysts. Ecosystem enablers. Problem Solvers. At eGov, we’re
            driven by the power of open digital infrastructure and ecosystems to
            enable governments deliver accessible, inclusive and transparent
            services to every citizen
          </p>
          <div className="hero__ctas">
            <a href="#" className="btn btn--primary">
              Our Approach
            </a>
            <a href="#" className="btn btn--outline">
              Our Impact
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image-wrap">
            <img
              src="https://placehold.co/560x420/dbeafe/0b4ea2?text=Citizens+%26+Government"
              alt="Citizens and Government"
              className="hero__img"
            />
            {/* <div className="hero__badge hero__badge--1">
              <span className="badge-num">1.1B+</span>
              <span className="badge-label">Services Delivered</span>
            </div>
            <div className="hero__badge hero__badge--2">
              <span className="badge-num">50+</span>
              <span className="badge-label">Partners</span>
            </div> */}
          </div>
        </div>
      </div>

      <div className="hero__wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="#f8fafc"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
