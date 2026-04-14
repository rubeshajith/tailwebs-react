import React from "react";
import "./Sustaining.css";

const Sustaining = () => {
  return (
    <section className="sustaining">
      <div className="sustaining__container">
        <div className="sustaining__header">
          <p className="sustaining__eyebrow">20 years of reimagining for citizens and</p>
          <h2 className="sustaining__heading">sustaining change</h2>
          <p className="sustaining__desc">
            Technology is powerful but is only one piece of the puzzle when it comes to enhancing the
            quality of life for every citizen. To have sustainable impact at scale, the collective energy
            of local networks to solve local problems needs to be tapped into. Our partners &amp; networks
            bring this collective energy to life.
          </p>
        </div>

        <div className="sustaining__stories">
          {[
            {
              img: "https://placehold.co/320x200/fef3c7/92400e?text=Story+1",
              quote: "Technology gave our municipality a way to be truly transparent to every citizen.",
              name: "Municipal Commissioner",
              place: "Odisha"
            },
            {
              img: "https://placehold.co/320x200/dbeafe/0b4ea2?text=Story+2",
              quote: "I pay my bills online now. No queues, no corruption. Life has changed.",
              name: "Resident",
              place: "Pune"
            }
          ].map((s, i) => (
            <div className="sustaining__card" key={i}>
              <img src={s.img} alt={s.name} className="sustaining__card-img" />
              <div className="sustaining__card-body">
                <p className="sustaining__quote">"{s.quote}"</p>
                <p className="sustaining__name">— {s.name}, {s.place}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="sustaining__cta">
          <a href="#" className="btn btn--blue">About Us</a>
        </div>
      </div>
    </section>
  );
};

export default Sustaining;
