import { useState, useEffect } from "react";

/**
 * Delays updating a value until the user stops typing.
 * Avoids firing Redux dispatch on every single keypress.
 * @param {*} value - the value to debounce
 * @param {number} delay - milliseconds to wait (default 300ms)
 */
const useDebounce = (value, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // cleanup: if value changes before delay is up, cancel the previous timer
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
