import React from "react";
import "./Supporters.css";

const SUPPORTERS = [
  { name: "Omidyar Network", logo: "https://placehold.co/140x50/f1f5f9/94a3b8?text=Omidyar+Network" },
  { name: "Bill & Melinda Gates", logo: "https://placehold.co/140x50/f1f5f9/94a3b8?text=Gates+Foundation" },
  { name: "Tata Trusts", logo: "https://placehold.co/140x50/f1f5f9/94a3b8?text=Tata+Trusts" },
  { name: "The Rockefeller Foundation", logo: "https://placehold.co/140x50/f1f5f9/94a3b8?text=Rockefeller" },
  { name: "National Health Authority", logo: "https://placehold.co/140x50/f1f5f9/94a3b8?text=NHA" },
];

const Supporters = () => (
  <section className="supporters">
    <div className="supporters__container">
      <h2 className="supporters__heading">Our Supporters</h2>
      <div className="supporters__logos">
        {SUPPORTERS.map((s) => (
          <div className="supporters__logo-wrap" key={s.name}>
            <img src={s.logo} alt={s.name} className="supporters__logo" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Supporters;
