import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade } from "react-awesome-reveal";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./CustomCardsSection.scss";
import { CustomCard, SwiperConfig } from "@/components";
import { CustomCardsSectionProps, CardType, CardProps, PagesType } from "@/models/Types";
import { ARArrow } from "@/assets/homePhotos";

const CustomCardsSection: React.FC<CustomCardsSectionProps & { layoutDirection: string /*"row" | "column" */ }> = ({ cardsData, cardType, pageType, layoutDirection }) => {
  let className = "";

  switch (cardType) {
    case CardType.ChefRestaurantType:
      className = "chef-restaurant-card";
      break;
    case CardType.RestaurantType:
      className = "restaurant-card";
      break;
    case CardType.DishType:
      className = "dish-card";
      break;
    default:
      break;
  }

  // Append additional class based on pageType
  switch (pageType) {
    case PagesType.RestaurantsPage:
      className += " restaurant-page";
      break;
    case PagesType.OrdersPage:
      className += " order-page";
      break;
        case PagesType.HomePage:
      className += " home-page";
      break;
    default:
      break;
  }

  // Log the className to the console
  console.log("Final className:", className);

  const maxCardsToShow = cardType === CardType.ChefRestaurantType ? Math.floor(1440 / 231) : Math.floor(1440 / 380);

  return (
    <>
      <Fade>
        <div className={`cards-section ${className}`}>
          <Swiper className='swiper' {...SwiperConfig(layoutDirection)}>
            {cardsData.cards.map((card: CardProps) => (
              <SwiperSlide className='swiper-slide' key={card.title}>
                <div onClick={() => cardType === CardType.DishType}>
                  <CustomCard {...card} customClass={className} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="desktop-section">
            {cardsData.cards.slice(0, maxCardsToShow).map((card: CardProps) => (
              <div onClick={() => cardType === CardType.DishType}>
                <CustomCard {...card} customClass={className} />
              </div>
            ))}
          </div>
          <div className="desktop-all-restaurants">
            {cardType === CardType.RestaurantType && (
              <div className='all-restaurants'>
                <span className='all-restaurants-text'>All Restaurants</span>
                <img src={ARArrow} alt='All Restaurants' className='arrows-icon' />
              </div>
            )}
          </div>

          <div className='all-restaurants'>
            <span className='all-restaurants-text'>All Restaurants</span>
            <img src={ARArrow} alt='All Restaurants' className='arrows-icon' />
          </div>
        </div>
      </Fade>
    </>
  );
};

export default CustomCardsSection;