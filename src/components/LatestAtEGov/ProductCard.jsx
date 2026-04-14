import React from "react";
import "./ProductCard.css";

const CATEGORY_COLORS = {
  "Articles": { bg: "#dbeafe", text: "#1d4ed8" },
  "Whitepapers": { bg: "#f0fdf4", text: "#15803d" },
  "Case Studies": { bg: "#fef3c7", text: "#b45309" },
  "Strategy Papers": { bg: "#f3e8ff", text: "#7e22ce" },
  "News & Media": { bg: "#fce7f3", text: "#be185d" },
  "Videos": { bg: "#ffedd5", text: "#c2410c" },
  "Newsletter": { bg: "#e0f2fe", text: "#0369a1" },
};

const ProductCard = ({ product }) => {
  const color = CATEGORY_COLORS[product.category] || { bg: "#f1f5f9", text: "#475569" };

  return (
    <article className="product-card">
      <div className="product-card__img-wrap">
        <img src={product.image} alt={product.title} className="product-card__img" loading="lazy" />
        <span
          className="product-card__category"
          style={{ background: color.bg, color: color.text }}
        >
          {product.category}
        </span>
      </div>

      <div className="product-card__body">
        <h3 className="product-card__title">{product.title}</h3>
        <p className="product-card__desc">{product.description}</p>

        <div className="product-card__meta">
          <span className="product-card__tag">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
            </svg>
            {product.tag}
          </span>
          <span className="product-card__date">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            {product.date}
          </span>
        </div>

        <div className="product-card__states">
          {product.states.slice(0, 2).map((s) => (
            <span key={s} className="product-card__state-tag">{s}</span>
          ))}
          {product.states.length > 2 && (
            <span className="product-card__state-tag product-card__state-tag--more">
              +{product.states.length - 2}
            </span>
          )}
          <span className="product-card__domain">{product.domain}</span>
        </div>

        <a href="#" className="product-card__cta">
          Read More
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </article>
  );
};

export default ProductCard;
