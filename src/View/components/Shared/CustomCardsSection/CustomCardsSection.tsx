import React, { useCallback, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./CustomCardsSection.scss";
import { CustomCard, SwiperConfig } from "@/View/components";
import { ARArrow } from "@/View/Photos";
import { useDispatch } from "react-redux";
import { setSelectedRestaurant, openModal, setSelectedDish } from "@/Controller/redux/slices/homePageSlice";
import { Restaurant, Dish, Chef, PagesType, CardType } from "@/Model/Interfaces";

const CustomCardsSection: React.FC<{
  cardsData: Restaurant[] | Dish[] | Chef[];
  cardType: CardType;
  pageType: PagesType;
  layoutDirection?: string;
}> = ({ cardsData, cardType, pageType, layoutDirection }) => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
  
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); 
  let className = "";
  const dispatch = useDispatch();

  const handleRestaurantClick = useCallback(
    (restaurantCard: Restaurant) => {
      dispatch(setSelectedRestaurant(restaurantCard));
    },
    [dispatch]
  );

  const handleDishForDesktopClick = useCallback(
    (dishCard: Dish) => {
      dispatch(openModal(dishCard));
    },
    [dispatch]
  );
  const handleDishForMobileClick = useCallback(
    (dishCard: Dish) => {
      dispatch(setSelectedDish(dishCard));
    },
    [dispatch]
  );

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

  const showOnlyThreeCards = pageType === PagesType.HomePage;
  function isChef(chef: Chef | string | undefined): chef is Chef {
    return typeof chef !== 'undefined' && typeof chef !== 'string';
  }
  return (
    <>
      <Fade>
        <div className={`cards-section ${className}`}>
          <Swiper className='swiper' {...SwiperConfig(layoutDirection)}>
            {cardsData.map((card: Restaurant | Dish | Chef, index: number) => (
              <SwiperSlide className='swiper-slide' key={index}>
                {cardType === CardType.DishType ? (
                  (isDesktop ? (
                    <div onClick={() => handleDishForDesktopClick(card as Dish)}>
                      <CustomCard {...(card as Dish)} customClass={className} />
                    </div>
                  ) :
                    <Link to={`/dishOrder/${encodeURIComponent((card as Dish).title)}`} className='dish-link' onClick={() => handleDishForMobileClick(card as Dish)}>
                      <CustomCard {...(card as Dish)} customClass={className} />
                    </Link>
                  )) : cardType === CardType.RestaurantType && (card as Restaurant).title  && typeof (card as Restaurant).chef !== 'undefined' ? (
                    <Link to={`/restaurant/${encodeURIComponent((card as Restaurant).title)}`} className='restaurant-link' onClick={() => handleRestaurantClick(card as Restaurant)}>
                      <CustomCard {...(card as Restaurant)} customClass={className} />
                    </Link>
                  ) : (
                  <CustomCard {...(card as Restaurant | Dish | Chef)} customClass={className} />
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="desktop-section">
            {showOnlyThreeCards
              ? cardsData.slice(0, 3).map((card: Restaurant | Dish | Chef, index: number) => (
                <div key={index}>
                  {cardType === CardType.DishType ? (
                    (isDesktop ? (
                      <div onClick={() => handleDishForDesktopClick(card as Dish)}>
                        <CustomCard {...(card as Dish)} customClass={className} />
                      </div>
                    ) :
                      <Link to={`/dishOrder/${encodeURIComponent((card as Dish).title)}`} className='dish-link' onClick={() => handleDishForMobileClick(card as Dish)}>
                        <CustomCard {...(card as Dish)} customClass={className} />
                      </Link>
                    )
                  ) : cardType === CardType.RestaurantType && (card as Restaurant).title ? (
                    <Link to={`/restaurant/${encodeURIComponent((card as Restaurant).title)}`} className='restaurant-link' onClick={() => handleRestaurantClick(card as Restaurant)}>
                      <CustomCard {...(card as Restaurant)} customClass={className} />
                    </Link>
                  ) : (
                    <CustomCard {...(card as Restaurant | Dish | Chef)} customClass={className} />
                  )}
                </div>
              ))
              : cardsData.map((card: Restaurant | Dish | Chef, index: number) => (
                <div key={index}>
                  {cardType === CardType.DishType ? (
                    (isDesktop ? (
                      <div onClick={() => handleDishForDesktopClick(card as Dish)}>
                        <CustomCard {...(card as Dish)} customClass={className} />
                      </div>
                    ) :
                      <Link to={`/dishOrder/${encodeURIComponent((card as Dish).title)}`} className='dish-link' onClick={() => handleDishForMobileClick(card as Dish)}>
                        <CustomCard {...(card as Dish)} customClass={className} />
                      </Link>
                    )
                  ) : cardType === CardType.RestaurantType && (card as Restaurant).title ? (
                    <Link to={`/restaurant/${encodeURIComponent((card as Restaurant).title)}`} className='restaurant-link' onClick={() => handleRestaurantClick(card as Restaurant)}>
                      <CustomCard {...(card as Restaurant)} customClass={className} />
                    </Link>
                  ) : (
                    <CustomCard {...(card as Restaurant | Dish | Chef)} customClass={className} />
                  )}
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

          <div className='all-restaurants link-route'>

          <Link to="/restaurants" className='all-restaurants link-route'>
            <span className='all-restaurants-text'>All Restaurants</span>
            <img src={ARArrow} alt='All Restaurants' className='arrows-icon' />
            </Link>
          </div>
        </div>
      </Fade >
    </>
  );
};

export default CustomCardsSection;
