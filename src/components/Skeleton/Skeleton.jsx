import React from "react";
import "./Skeleton.css";

export const SkeletonCard = () => (
  <div className="skeleton-card">
    <div className="skeleton skeleton-img" />
    <div className="skeleton-body">
      <div className="skeleton skeleton-tag" />
      <div className="skeleton skeleton-title" />
      <div className="skeleton skeleton-title skeleton-title--short" />
      <div className="skeleton skeleton-meta" />
    </div>
  </div>
);

const Skeleton = ({ count = 6 }) => (
  <div className="skeleton-grid">
    {Array.from({ length: count }).map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);

export default Skeleton;
