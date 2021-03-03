import React from "react";
import "./App.css";
import Search from "./Search";
import LocationSection from "./LocationSection";
import TopSection from "./TopSection";
import TodaysInfo from "./TodaysInfo";
import TempButton from "./TempButton";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div id="mobile">
          <div id="app">
            <Search />
            <div id="main-app">
              <LocationSection />
              <TopSection />
              <hr />
              <TodaysInfo />
              <hr />
            </div>
            <TempButton />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
