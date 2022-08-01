import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import Header from "home/Header";
import Footer from "home/Footer";
import CartContent from "./CartContent";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Router>
    <Header />
    <CartContent />
    <Footer />
    </Router>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));