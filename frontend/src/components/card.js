import { Link } from "react-router-dom";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import React, { useState } from "react";

function Card() {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <section className="card hover">
        <div className="image-container">
          <img
            className="card-image"
            src="https://cdn.shopify.com/s/files/1/0295/3245/4956/products/1_d1ab6e83-6330-4d1e-98ab-778f07a732b5_800x.png?v=1652281200"
          />
          <span className="duration-card">02:45</span>
        </div>
        <div className="card-info">
          <img
            src="https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg"
            className="card-user"
          ></img>
          <div className="card-user-info">
            <p className="card-title">
              Cat Reviews a Mechanical Keyboard (OMG Must Watch!)
            </p>
            <p className="card-username">
              <span>Catboard</span>
              <IoCheckmarkCircleSharp />
            </p>
            <p className="card-stats">
              <span>59K Views</span>
              <span style={{ fontSize: "0.4rem" }}>●</span>
              <span>1 Days ago</span>
            </p>
            
          </div>
        </div>
      </section>
    </Link>
  );
}

export default Card;
