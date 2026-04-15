import { useState } from "react";

/**
 * Works like useState but persists the value in localStorage.
 * Used here to remember the user's last selected category filter across page refreshes.
 * @param {string} key - localStorage key
 * @param {*} initialValue - fallback if nothing is stored yet
 */
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // localStorage can be blocked in private browsing / iframes
      console.warn(`useLocalStorage: could not read key "${key}"`, error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(`useLocalStorage: could not set key "${key}"`, error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
