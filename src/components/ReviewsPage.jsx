import React, { useState } from "react";

const ReviewsPage = () => {
  return (
    <div className="reviewsPage">
      <h1>Hear What Customers Have To Say</h1>

      <div className="reviews-container">
        <div className="box">
          {/* <img src="" alt="pfp" /> */}
          <h3>First Last</h3>
          <h4>Date months ago</h4>

          <h3>Amazing Work!</h3>
          <p>The amount of issues he's fixed with our RV is crazy. Now we can finally take my family on some good ol trips!</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
