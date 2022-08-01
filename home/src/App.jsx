import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.scss";
import "tailwindcss/dist/tailwind.min.css";
import "remixicon/fonts/remixicon.css";

import Footer from "./Footer";
import Header from "./Header";
import HomeContent from "./HomeContent";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Router>
      <Header />
    <div className="my-10">
      <HomeContent />
    </div>
    <Footer />
    </Router>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
