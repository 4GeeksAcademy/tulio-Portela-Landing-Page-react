import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="container-fluid p-0 m-0 bg-white">
      <Navbar />
      <div className="row p-3 mt-1 justify-content-center ">
        <Jumbotron className="jumbotron col-12 " />
      </div>
      <div className="row p-2 d-flex justify-content-center text-center">
        <div className="col-12 col-md-6 col-lg-3">
          <Card />
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <Card />
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <Card />
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <Card />
        </div>
      </div>
      <div className="row justify-content-center">
        <Footer className="col-12" />
      </div>
    </div>
  );
};

export default Home;
