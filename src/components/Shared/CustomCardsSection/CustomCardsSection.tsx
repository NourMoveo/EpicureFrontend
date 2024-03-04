import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./CustomCardsSection.scss";
import { CustomCard, SwiperConfig } from "@/components";
import { CustomCardsSectionProps, CardType, CardProps, PagesType } from "@/models/Types";
import { ARArrow } from "@/assets/homePhotos";

const CustomCardsSection: React.FC<CustomCardsSectionProps & { layoutDirection: string }> = ({ cardsData, cardType, pageType, layoutDirection }) => {
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

  // Determine whether to show only three cards
  const showOnlyThreeCards = pageType === PagesType.HomePage;

  // Log the className to the console
  console.log("Final className:", className);

  return (
    <>
      <Fade>
        <div className={`cards-section ${className}`}>
          <Swiper className='swiper' {...SwiperConfig(layoutDirection)}>
            {cardsData.cards.map((card: CardProps, index: number) => (
              <SwiperSlide className='swiper-slide' key={card.title}>
                <div onClick={() => cardType === CardType.DishType}>
                  <CustomCard {...card} customClass={className} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="desktop-section">
            {/* Conditionally render only three cards on the home page */}
            {showOnlyThreeCards
              ? cardsData.cards.slice(0, 3).map((card: CardProps) => (
                  <div onClick={() => cardType === CardType.DishType}>
                    <CustomCard {...card} customClass={className} />
                  </div>
                ))
              : cardsData.cards.map((card: CardProps) => (
                  <div onClick={() => cardType === CardType.DishType}>
                    <CustomCard {...card} customClass={className} />
                  </div>
                ))}
          </div>

          <div className="desktop-all-restaurants">
            {cardType === CardType.RestaurantType && (
              <Link to="/restaurants" className='all-restaurants link-route'>
                <span className='all-restaurants-text'>All Restaurants</span>
                <img src={ARArrow} alt='All Restaurants' className='arrows-icon' />
              </Link>
            )}
          </div>

          <Link to="/restaurants" className='all-restaurants link-route'>
            <span className='all-restaurants-text'>All Restaurants</span>
            <img src={ARArrow} alt='All Restaurants' className='arrows-icon' />
          </Link>
        </div>
      </Fade>
    </>
  );
};

export default CustomCardsSection;
