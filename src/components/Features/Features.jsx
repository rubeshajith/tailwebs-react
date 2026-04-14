import React, { useState } from "react";
import "./Features.css";

const FEATURES = [
  {
    id: "health",
    label: "Public Health",
    stat: "210+",
    statDesc: "ICUs set up with telemedicine in rural areas",
    image: "https://placehold.co/480x300/dbeafe/0b4ea2?text=Public+Health",
    color: "#0b4ea2"
  },
  {
    id: "finance",
    label: "Public Finance",
    stat: "2 Bn",
    statDesc: "Citizens covered under digital finance systems",
    image: "https://placehold.co/480x300/eff6ff/1d4ed8?text=Public+Finance",
    color: "#1d4ed8"
  },
  {
    id: "governance",
    label: "Local Governance",
    stat: "500+",
    statDesc: "Urban Local Bodies on DIGIT platform",
    image: "https://placehold.co/480x300/fef3c7/92400e?text=Local+Governance",
    color: "#d97706"
  },
  {
    id: "water",
    label: "Water & Sanitation",
    stat: "120+",
    statDesc: "Districts with digital water delivery management",
    image: "https://placehold.co/480x300/d1fae5/065f46?text=Water+%26+Sanitation",
    color: "#059669"
  },
];

const Features = () => {
  const [active, setActive] = useState("health");
  const current = FEATURES.find(f => f.id === active);

  return (
    <section className="features">
      <div className="features__container">
        <div className="features__left">
          <p className="features__eyebrow">Big problems need</p>
          <h2 className="features__heading">bold approaches</h2>

          <div className="features__tabs">
            {FEATURES.map(f => (
              <button
                key={f.id}
                className={`features__tab ${active === f.id ? "features__tab--active" : ""}`}
                onClick={() => setActive(f.id)}
                style={active === f.id ? { borderColor: f.color, color: f.color } : {}}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="features__right">
          <div className="features__card" key={active}>
            <img src={current.image} alt={current.label} className="features__card-img" />
            <div className="features__card-body" style={{ background: current.color }}>
              <div className="features__stat">{current.stat}</div>
              <p className="features__stat-desc">{current.statDesc}</p>
              <a href="#" className="features__read-more">Read More →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
