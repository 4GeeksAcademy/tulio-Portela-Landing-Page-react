import React from "react";

const Card = () => {
  return (
    <div className="card border-1 p-3 m-2" style={{ width: "18rem", border: "1px solid #ddd", borderRadius: "8px" }}>
      <div className="image-container" style={{ width: "100%" }}>
        <img src="https://www.freecodecamp.org/news/content/images/2022/02/image-76.png" className="Frontimg card-img-top img-fluid object-fit-cover rounded-4" alt="..." />
      </div>
      <div className="card-body text-center">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
};

export default Card;
