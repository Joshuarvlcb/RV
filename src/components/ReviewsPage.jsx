import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const ReviewsPage = () => {
  return (
    <div className="gradient">
      <h1>Hear What Customers Have To Say</h1>

      <div className="reviews-container">
        <div className="box">
          <div className="reviewsPerson">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1602248693535-KTGCFTA50807510I5LVN/Tom+LinkedIn+Headshot+Profile+Picture.jpg?format=500w"
              alt="pfp"
            />
            <div className="reviewsData">
              <h3 className="reviewsName">Lloyd Bauer</h3>
              <h4 className="reviewsDate">Two months ago</h4>
            </div>
          </div>
          <div className="reviewsDesc">
            <h3 className="reviewsTitle">Amazing Work!</h3>
            <p className="reviewsPara">
              The amount of issues he's fixed with our RV is crazy. Now I can
              finally take my family on some exciting trips!
            </p>
          </div>
          <div className="reviewsStars"> <FaStar className="star"/> <FaStar className="star"/> <FaStar className="star"/> <FaStar className="star"/> <FaStar className="star"/> </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
