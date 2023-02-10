import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
//Pages
import Home from "./pages/Home";
import Pricing from "./pages/PricingPage";
import Signup from "./pages/SignupPage";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/pricing" element={<Pricing />} />
      </Routes>
    </>
  );
}

export default App;
