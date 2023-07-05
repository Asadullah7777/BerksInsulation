import React from "react";
import Services from "./OurServices/Services";
import Funding from "./OurFundingProcess/Funding";
import Qualifying from "./QualifyingCriteria/Qualifying";
import Testimonial from "./ClientTestimonials/Testimoinal";
import Counter from "./Counter/Counter";
import Blogs from "./LatestNewsandBlog/Blogs";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div>
      <Services />
      <Funding />
      <Qualifying />
      <Testimonial />
      <Counter />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
