import React from "react";
import "./Stats.css";

const Stats = () => {
  return (
    <section className="stats">
      <div className="stats__banner">
        <div className="stats__banner-inner">
          <div className="stats__big-number">1,000,000,100+</div>
          <p className="stats__banner-desc">Citizens availing public services through eGov's Digital Public Goods (DPG)</p>
        </div>
      </div>

      <div className="stats__grid">
        <div className="stats__card stats__card--blue">
          <div className="stats__num">1.1 Billion+</div>
          <div className="stats__label">Public services delivered</div>
        </div>
        <div className="stats__card stats__card--white">
          <div className="stats__num">50+</div>
          <div className="stats__label">Partners from technology, governments and NGOs</div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
