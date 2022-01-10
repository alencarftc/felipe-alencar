import React, { useEffect, useState } from "react";
import {
  BrowserRouter, Route, Routes,
} from "react-router-dom";
import Home from "@pages/Home";
import About from "@pages/About";

import "./App.scss";
import Header from "@layouts/Header";
import Experience from "@pages/Experience";
import Portfolio from "@pages/Portfolio";
import Contact from "@pages/Contact";

const App = () => {
  const [isHome, setIsHome] = useState(false);
  const [animation, setAnimation] = useState("first-appear");

  useEffect(() => {
    setIsHome(window.location.pathname === "/");
  }, []);

  return (
    <main className={`app-inner ${animation && `content-${animation}`} `}>
      <BrowserRouter>
        <div className={`header-container ${!isHome ? "header-on-top" : ""} `}>
          <Header
            onItemClick={(shouldAnimate) => {
              setAnimation(shouldAnimate ? "fade-in" : "visible");
            }}
            onPathChange={(path, shouldAnimate) => {
              setIsHome(path === "/");
              setAnimation(shouldAnimate ? "fade-out" : "visible");
            }}
            small={!isHome}
          />
        </div>

        <section className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/experience" element={<Experience />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </section>
      </BrowserRouter>
    </main>
  );
};

export default App;
