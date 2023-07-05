import React from "react";
import "./App.css";
import Slidernew from "./components/LatestNewsandBlog/Slidernew/Slidernew";
import HeaderTop from "./components/HeaderTop/HeaderTop";
import Navbar from "./components/Navber/Navbar";
import Available from "./components/AvailableNow/Available";
import Services from "./components/OurServices/Services";
import Blogs from "./components/LatestNewsandBlog/Blogs";
import Counter from "./components/Counter/Counter";
import Qualifying from "./components/QualifyingCriteria/Qualifying";
import Funding from "./components/OurFundingProcess/Funding";
import Testimoinal from "./components/ClientTestimonials/Testimoinal";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/LatestNewsandBlog/Blog";

function App() {
  return (
    <div className="App">
      <HeaderTop />
      <Navbar />
      <Available />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/process" element={<Funding />} />
        <Route path="/about" element={<Qualifying />} />
        <Route path="/" element={<Testimoinal />} />
        <Route path="/scheme" element={<Counter />} />
        <Route path="/news" element={<Blogs />} />
        <Route path="/consultation" element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;
