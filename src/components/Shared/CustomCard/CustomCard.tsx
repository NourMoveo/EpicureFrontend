import React from "react";
import { Link } from "react-router-dom";
import { CardProps, CardType, PagesType } from "@/models/Types";
import "./CustomCard.scss";
import { ILSLogo } from "@/assets/homePhotos";

const CustomCard: React.FC<CardProps & { cardType?: CardType; pageType?: PagesType }> = ({ title, image, description, foodIcon, price, rating, customClass, cardType, pageType }) => {
  let cardClassName = "card";

  switch (cardType) {
    case CardType.RestaurantType:
      cardClassName += " restaurant-card";
      break;
    case CardType.DishType:
      cardClassName += " dish-card";
      break;
    case CardType.ChefRestaurantType:
      cardClassName += " chef-restaurant-card";
      break;
    default:
      break;
  }

  switch (pageType) {
    case PagesType.RestaurantsPage:
      cardClassName += " restaurant-page";
      break;
    case PagesType.OrdersPage:
      cardClassName += " order-page";
      break;
    default:
      break;
  }

  const renderCardContent = () => (
    <div className='card-content'>
      <h3 className='card-title'>{title}</h3>
      {foodIcon && <img src={foodIcon} alt='Food Icon' className='food-icon-desktop' />}
      <div className='description-rating'>
        <div className='description'>
          {description && <p className='card-description'>{description}</p>}
        </div>
        {rating && <img src={rating} alt='Rating Stars' className='rating-image' />}
      </div>
      <div className="price-foodIcon-container">
        <div className="price-foodIcon">
          {foodIcon && <img src={foodIcon} alt='Food Icon' className='food-icon' />}
          {price && (
            <div className='card-price'>
              <div className='line'></div>
              <div className='value-logo-container'>
                <img src={ILSLogo} alt='ILS' className='ils-icon' />
                <span className='price-value'>{price} </span>
              </div>
              <div className='line-dish'></div>
              <div className='line'></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // Render Link only if the card is a restaurant card
  const renderCard = customClass && customClass.includes("restaurant-card") ? (
<Link to={`/restaurant/${encodeURIComponent(title)}`} className={`${cardClassName} ${customClass || ""} link-no-underline`}>
      <div className='image-container'>
        <img src={image} alt={title} className='card-image' />
      </div>
      {renderCardContent()}
    </Link>
  ) : (
    <div className={`${cardClassName} ${customClass || ""}`}>
      <div className='image-container'>
        <img src={image} alt={title} className='card-image' />
      </div>
      {renderCardContent()}
    </div>
  );

  return renderCard;
};

export default CustomCard;
