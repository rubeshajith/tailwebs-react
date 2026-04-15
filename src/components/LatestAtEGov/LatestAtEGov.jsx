import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  setSearchQuery,
  setActiveCategory,
  selectAllProducts,
  selectProductsStatus,
  selectSearchQuery,
  selectActiveCategory,
} from "../../store/slices/productsSlice";
import { CATEGORIES } from "../../data/mockData";
import Skeleton from "../Skeleton/Skeleton";
import ProductCard from "./ProductCard";
import useDebounce from "../../hooks/useDebounce";
import useLocalStorage from "../../hooks/useLocalStorage";
import "./LatestAtEGov.css";

const LatestAtEGov = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(selectAllProducts);
  const status = useSelector(selectProductsStatus);
  const searchQuery = useSelector(selectSearchQuery);
  const activeCategory = useSelector(selectActiveCategory);

  // local input state so the field feels instant while debounce runs in background
  const [inputValue, setInputValue] = useState(searchQuery);
  const debouncedSearch = useDebounce(inputValue, 300);

  // persist the active category across page refreshes
  const [savedCategory, setSavedCategory] = useLocalStorage(
    "egov_active_category",
    "All",
  );

  // sync debounced value into Redux (not on every keypress)
  useEffect(() => {
    dispatch(setSearchQuery(debouncedSearch));
  }, [debouncedSearch, dispatch]);

  // restore saved category from localStorage on first mount

  useEffect(() => {
    if (savedCategory && savedCategory !== activeCategory) {
      dispatch(setActiveCategory(savedCategory));
    }
  }, []); // intentionally empty — we only want this to run once on mount

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const handleSearch = (e) => {
    setInputValue(e.target.value);
  };

  const handleCategory = (cat) => {
    dispatch(setActiveCategory(cat));
    setSavedCategory(cat); // persist for next visit
  };

  // useMemo so filtering only re-runs when the actual dependencies change,
  // not on every unrelated re-render
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase());
      const matchesCategory =
        activeCategory === "All" || product.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [allProducts, debouncedSearch, activeCategory]);

  return (
    <section className="latest">
      <div className="latest__container">
        {/* Header */}
        <div className="latest__header">
          <p className="latest__eyebrow">Latest at</p>
          <h2 className="latest__heading">
            <span className="latest__e">e</span>Gov
          </h2>
        </div>

        {/* Search Bar */}
        <div className="latest__search-wrap">
          <div className="latest__search">
            <svg
              className="search-icon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search articles, whitepapers, case studies..."
              value={inputValue}
              onChange={handleSearch}
              className="latest__search-input"
            />
            {inputValue && (
              <button
                className="search-clear"
                onClick={() => {
                  setInputValue("");
                  dispatch(setSearchQuery(""));
                }}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="latest__filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`latest__filter-btn ${
                activeCategory === cat ? "latest__filter-btn--active" : ""
              }`}
              onClick={() => handleCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="latest__content">
          {status === "loading" && <Skeleton count={6} />}

          {status === "succeeded" && filteredProducts.length > 0 && (
            <div className="latest__grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {status === "succeeded" && filteredProducts.length === 0 && (
            <div className="latest__empty">
              <div className="latest__empty-icon">🔍</div>
              <h3 className="latest__empty-title">No results found</h3>
              <p className="latest__empty-desc">
                No articles {inputValue ? "match" : ""}{" "}
                {inputValue && <strong>"{inputValue}"</strong>}
                {activeCategory !== "All" && (
                  <>
                    {" "}
                    in <strong>{activeCategory}</strong>
                  </>
                )}
                .
              </p>
              <button
                className="latest__reset-btn"
                onClick={() => {
                  setInputValue("");
                  dispatch(setSearchQuery(""));
                  dispatch(setActiveCategory("All"));
                  setSavedCategory("All");
                }}
              >
                Clear filters
              </button>
            </div>
          )}

          {status === "failed" && (
            <div className="latest__empty">
              <div className="latest__empty-icon">⚠️</div>
              <h3 className="latest__empty-title">Something went wrong</h3>
              <p className="latest__empty-desc">
                Failed to load content. Please try again.
              </p>
              <button
                className="latest__reset-btn"
                onClick={() => dispatch(fetchProducts())}
              >
                Retry
              </button>
            </div>
          )}
        </div>

        {status === "succeeded" && filteredProducts.length > 0 && (
          <div className="latest__see-all">
            <a href="#" className="btn btn--outline-blue">
              See All →
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestAtEGov;
