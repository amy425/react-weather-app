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
        <div className="mobile">
          <div className="app">
            <Search />
              <div className="main-app">
                <LocationSection />
                <TopSection />
                <hr />
                <TodaysInfo />
                <hr />
              </div>
            <TempButton />
          </div>
        </div>
      <Footer />
      </div>
    </div>
  );
}
