import React from "react";
import "./DIGIT.css";

const DIGIT = () => {
  return (
    <section className="digit">
      <div className="digit__container">
        <div className="digit__content">
          <div className="digit__logo">
            <span className="digit-dot">✦</span> DIGIT
            <span className="digit-by">by eGov Foundation</span>
          </div>
          <p className="digit__sub">Our open source</p>
          <h2 className="digit__heading">technology-for-good platform</h2>
          <p className="digit__desc">
            DIGIT, short for Digital Infrastructure for Governance, Inclusion and Transformation is eGov's
            open-source platform with reusable building blocks and shared data registries that can be used
            to build solutions in multiple sectors.
          </p>
          <a href="#" className="btn btn--orange">Explore the platform →</a>
        </div>

        <div className="digit__visual">
          <img
            src="https://placehold.co/460x380/1e293b/38bdf8?text=DIGIT+Platform"
            alt="DIGIT Platform"
            className="digit__img"
          />
          <div className="digit__pill digit__pill--1">Open Source</div>
          <div className="digit__pill digit__pill--2">Scalable</div>
          <div className="digit__pill digit__pill--3">Interoperable</div>
        </div>
      </div>
    </section>
  );
};

export default DIGIT;
