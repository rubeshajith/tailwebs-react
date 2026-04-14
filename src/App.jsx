import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import Features from "./components/Features/Features";
import Sustaining from "./components/Sustaining/Sustaining";
import DIGIT from "./components/DIGIT/DIGIT";
import LatestAtEGov from "./components/LatestAtEGov/LatestAtEGov";
import Supporters from "./components/Supporters/Supporters";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <Features />
          <Sustaining />
          <DIGIT />
          <LatestAtEGov />
          <Supporters />
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
