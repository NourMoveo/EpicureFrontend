import React from "react";
import { Dish, PagesType, CardType, Chef } from "@/Model/Interfaces";
import "./CustomCard.scss";
import { ILSLogo } from "@/View/Photos";
import { RatingComponent } from "@/View/components";
import { getFoodIcon } from "@/Model/constants/func";

const CustomCard: React.FC<{
  title?: string;
  image?: string;
  chef?: Chef;
  ingredients?: string;
  flavorIcon?: string;
  price?: number;
  rating?: number;
  customClass?: string;
  cardType?: CardType;
  pageType?: PagesType;
}> = ({ title, image, chef, ingredients, flavorIcon, price, rating, customClass, cardType, pageType }) => {
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

  // Combine title, ingredients, and chef name for description
  const description = `${ingredients || ""} ${chef ? chef.fName + " " + chef.lName : ""}`;

  const renderCardContent = () => (
    <div className='card-content'>
      <h3 className='card-title'>{title}</h3>
      {flavorIcon && <img src={getFoodIcon(flavorIcon)} alt='Food Icon' className='food-icon-desktop' />}
      <div className='description-rating'>
        <div className='description'>
          {description && <p className='card-description'>{description}</p>}
        </div>
        {rating && <div className="rating"> <RatingComponent number={rating} /></div>}
      </div>
      <div className="price-foodIcon-container">
        <div className="price-foodIcon">
          {flavorIcon && <img src={getFoodIcon(flavorIcon)} alt='Food Icon' className='food-icon' />}
          {price && (
            <div className='card-price'>
              <div className='line'></div>
              <div className='value-logo-container'>
                <img src={ILSLogo} alt='ILS' className='ils-icon' />
                {price && <span className='price-value'>{price} </span>}
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
    const renderCard =
    <div className={`${cardClassName} ${customClass || ""}`}>
      <div className='image-container'>
        <img src={image}  alt={title} className='card-image' />
      </div>
      {renderCardContent()}
    </div>

  return renderCard;
};

export default CustomCard;
