import React,{useCallback } from "react";
import { Link } from "react-router-dom";
import { CardProps, CardType, PagesType } from "@/models/Types";
import "./CustomCard.scss";
import { ILSLogo } from "@/assets/Photos";
import { RatingComponent } from '@/components';
import { useDispatch } from "react-redux";
import { setSelectedRestaurant,openModal} from "@/redux/slices/homePageSlice";

const CustomCard: React.FC<CardProps & { cardType?: CardType; pageType?: PagesType }> = ({ id, title, image, description, foodIcon, price, rating, dishes, customClass, cardType, pageType }) => {
  let cardClassName = "card";
  const dispatch = useDispatch();


  const  handleRestaurantClick = useCallback(
    (restaurantCard: CardProps) => {
      setSelectedRestaurant(restaurantCard);
      console.log("Restaurant Data:", restaurantCard);
    },
    [dispatch]
  );

  const  handleDishClick = useCallback(
    (dishCard: CardProps) => {
      dispatch(openModal(dishCard));
      
    },
    [dispatch]
  );


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
        {rating && <div className="rating"> <RatingComponent number={rating} /></div>}
      </div>
      <div className="price-foodIcon-container">
        <div className="price-foodIcon">
          {foodIcon && <img src={foodIcon} alt='Food Icon' className='food-icon' />}
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
  const renderCard = customClass && title && customClass.includes("restaurant-card") ? (
    <Link to={`/restaurant/${encodeURIComponent(title)}`} className={`${cardClassName} ${customClass || ""} link-no-underline`} onClick={() => handleRestaurantClick({ id, title, image, description,dishes })}>
      <div className='image-container'>
        <img src={image} alt={title} className='card-image' />
      </div>
      {renderCardContent()}
    </Link>
  ) :  title&&customClass&&customClass.includes("dish") ? (
    <Link to={`/dish/${encodeURIComponent(title)}`} className={`${cardClassName} ${customClass || ""} link-no-underline`} onClick={() => handleDishClick({ id, title, image, description, price,foodIcon})}>
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
