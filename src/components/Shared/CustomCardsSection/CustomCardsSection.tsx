import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade } from "react-awesome-reveal";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./CustomCardsSection.scss";
import { CustomCard, SwiperConfig } from "@/components";
import { CustomCardsSectionProps, CardType, CardProps } from "@/models/Types";
import { ARArrow } from "@/assets/homePageImg";

/**
 * renders a section of custom cards, including a Swiper component for mobile devices and a desktop section for larger screens. 
 * It determines the card type and adjusts the styling accordingly.
 */
const CustomCardsSection: React.FC<CustomCardsSectionProps> = ({ cardsData, cardType }) => {
  const className =
    cardType === CardType.ChefRestaurantType ? "third-type" : cardType === CardType.RestaurantType ? "first-type" : "";

  // Calculate the maximum number of cards that can fit on the screen based on the card width and screen width
  const maxCardsToShow = cardType === CardType.ChefRestaurantType ? Math.floor(1440 / 231) : Math.floor(1440 / 380);

  return (
    <>
      <Fade>
        <div className={`cards-section${cardType === CardType.ChefRestaurantType ? "-three" : ""}`}>
          <h3 className={`cards-section-title${cardType === CardType.ChefRestaurantType ? "-three" : ""}`}></h3>

          <Swiper className='swiper' {...SwiperConfig()}>
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
