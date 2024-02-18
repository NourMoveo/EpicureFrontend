
import React from "react";
import { CardProps } from "@/models/Types";
import "./CustomCard.scss";
import { ILSLogo } from "@/assets/homePageImg";

/**
 *  renders a customizable card based on provided props such as title, image, description, food icon, price, and rating.
 * It imports necessary dependencies and styles, then returns JSX to render the card with dynamic content.
 */
const CustomCard: React.FC<CardProps> = ({ title, image, description, foodIcon, price, rating, customClass }) => {
  return (
    <div className={`card ${customClass || ""}`}>
      <div className='image-container'>
        <img src={image} alt={title} className='card-image' />
      </div>
      <div className='card-content'>
        <h3 className='card-title'>{title}</h3>
        <div className='description-icon-price'>
          <div className='description-icon'>
            {description && <p className='card-description'>{description}</p>}
            {foodIcon && <img src={foodIcon} alt='Food Icon' className='food-icon' />}
          </div>
          {rating && <img src={rating} alt='Rating Stars' className='rating-image' />}
        </div>
      </div>
      {price && (
        <div className="price">
          <div className="card-price-container">
            <div className='card-price'>
              <div className='line'></div>
              <div className='value-logo-container'>
                <img src={ILSLogo} alt='ILS' className='ils-icon' />
                <span className='price-value'>{price} </span>
              </div>
              <div className='line'></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomCard;