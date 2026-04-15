import React, { useState } from "react";
import "./Features.css";

const FEATURES = [
  {
    id: "health",
    label: "Public Health",
    stat: "210+",
    statDesc: "cities LIVE with 10BedICU across India",
    image: "https://placehold.co/480x300/dbeafe/0b4ea2?text=Public+Health",
    color: "#0b4ea2",
  },
  {
    id: "health",
    label: "Public Health",
    stat: "210+",
    statDesc: "COVID-19 vaccination certificates issued",
    image: "https://placehold.co/480x300/dbeafe/0b4ea2?text=Public+Health",
    color: "#0b4ea2",
  },
  {
    id: "finance",
    label: "Public Finance",
    stat: "5000+",
    statDesc:
      "rural local bodies managing revenue & expenditure on Water Supply O&M System",
    image: "https://placehold.co/480x300/eff6ff/1d4ed8?text=Public+Finance",
    color: "#1d4ed8",
  },
  {
    id: "governance",
    label: "Local Governance",
    stat: "70%",
    statDesc: "improved quality of life with implementations in Punjab, India",
    image: "https://placehold.co/480x300/fef3c7/92400e?text=Local+Governance",
    color: "#d97706",
  },
  {
    id: "water",
    label: "Water & Sanitation",
    stat: "148Mn",
    statDesc:
      "households with access to drinking water on tap to be maintained on systems powered by DIGIT platform",
    image:
      "https://placehold.co/480x300/d1fae5/065f46?text=Water+%26+Sanitation",
    color: "#059669",
  },
];

const Features = () => {
  const [active, setActive] = useState("health");
  const categories = [...new Set(FEATURES.map((f) => f.id))];
  const filteredFeatures = FEATURES.filter((f) => f.id === active);

  return (
    <section className="features">
      <div className="features__container">
        <div className="features__left">
          <p className="features__eyebrow">Big problems need</p>
          <h2 className="features__heading">bold approaches</h2>

          <div className="features__tabs">
            {categories.map((id) => {
              const feature = FEATURES.find((f) => f.id === id);

              return (
                <button
                  key={id}
                  className={`features__tab ${active === id ? "features__tab--active" : ""}`}
                  onClick={() => setActive(id)}
                  style={
                    active === id
                      ? { borderColor: feature.color, color: feature.color }
                      : {}
                  }
                >
                  {feature.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="features__right">
          {filteredFeatures.map((item, index) => (
            <div className="features__card" key={index}>
              <img
                src={item.image}
                alt={item.label}
                className="features__card-img"
              />
              <div
                className="features__card-body"
                style={{ background: item.color }}
              >
                <div className="features__stat">{item.stat}</div>
                <p className="features__stat-desc">{item.statDesc}</p>
                <a href="#" className="features__read-more">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
