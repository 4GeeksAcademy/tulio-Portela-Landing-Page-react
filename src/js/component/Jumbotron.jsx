import React from "react";

const Jumbotron = () => {
  return (
    <div className="jumbotron p-2 mt-5 bg-light ">
      <h1 className="display-4">A Warm Welcome !</h1>
      <p className="col-sm-12 col-md-6">It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <div className="col-sm-12">
        <button type="button" className="btn btn-primary">Call to action!</button>
      </div>
    </div>
  );
};

export default Jumbotron;
