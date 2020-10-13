/** @format */

import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// Main
const Rating = ({ value, text, color }) => {
  const stars = (
    <span>
      {value >= 1 ? (
        <FaStar style={{ color }} />
      ) : value >= 0.5 ? (
        <FaStarHalfAlt style={{ color }} />
      ) : (
        <FaRegStar style={{ color }} />
      )}
      {value >= 2 ? (
        <FaStar style={{ color }} />
      ) : value >= 1.5 ? (
        <FaStarHalfAlt style={{ color }} />
      ) : (
        <FaRegStar style={{ color }} />
      )}
      {value >= 3 ? (
        <FaStar style={{ color }} />
      ) : value >= 2.5 ? (
        <FaStarHalfAlt style={{ color }} />
      ) : (
        <FaRegStar style={{ color }} />
      )}
      {value >= 4 ? (
        <FaStar style={{ color }} />
      ) : value >= 3.5 ? (
        <FaStarHalfAlt style={{ color }} />
      ) : (
        <FaRegStar style={{ color }} />
      )}
      {value >= 5 ? (
        <FaStar style={{ color }} />
      ) : value >= 4.5 ? (
        <FaStarHalfAlt style={{ color }} />
      ) : (
        <FaRegStar style={{ color }} />
      )}
    </span>
  );

  const textContent = text && text;

  return (
    <div className='rating'>
      {stars}
      {textContent}
    </div>
  );
};

Rating.defaultProps = {
  color: "#f8e825",
};

export default Rating;
