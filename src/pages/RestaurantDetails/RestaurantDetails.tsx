import React, { useState } from "react";
import {  useSelector } from "react-redux";
import { CardProps, Cards } from "@/models/Types";
import { ClockIcon } from "@/assets/Photos";
import "./RestaurantDetails.scss";
import { CustomCardsSection } from "@/components";
import { RootState } from "@/redux/store/store";
const RestaurantDetails: React.FC = () => {

  const restaurant ={...useSelector((state: RootState) => state.homePage.selectedRestaurant)};


  const getStatus = (): string => {
    const now = new Date();
    if (restaurant && restaurant.open && restaurant.close && now >= restaurant.open && now <= restaurant.close) {
      return "Open now";
    } else {
      return "Closed now";
    }
  };

  const [activeTab, setActiveTab] = useState("Breakfast");

  const getDishesByType = (type: string, dishesData: CardProps[]): Cards => {
    const filteredDishes = dishesData.filter((dish) => dish.MealType === type);
    return { cards: filteredDishes };
  };

  const dishesData = restaurant?.dishes || { cards: [] };

  return (
    <div className="restaurant-details-container">
      {restaurant ? (
        <>
          <div className="restaurant-info">
            <img src={restaurant.image} alt={restaurant.title} className="restaurant-image" />
            <div className="restaurant-content">
              <h2 className="restaurant-title">{restaurant.title}</h2>
              <p className="restaurant-description">{restaurant.description}</p>
              <div className="status-container">
                <img className="clock-icon" src={ClockIcon} alt="clock icon" />
                <p className="restaurant-status"> {getStatus()}</p>
              </div>
              <div className="mini-subheader">
                <button className={`tab-button ${activeTab === 'Breakfast' ? 'active' : ''}`} onClick={() => setActiveTab('Breakfast')}>Breakfast</button>
                <button className={`tab-button ${activeTab === 'Lunch' ? 'active' : ''}`} onClick={() => setActiveTab('Lunch')}>Lunch</button>
                <button className={`tab-button ${activeTab === 'Dinner' ? 'active' : ''}`} onClick={() => setActiveTab('Dinner')}>Dinner</button>
              </div>
            </div>
          </div>
          <div className="dishes-section">
            {activeTab === "Breakfast" && (
              <CustomCardsSection
                cardsData={getDishesByType("Breakfast", dishesData.cards)}
                cardType={2}
                pageType={2}
                layoutDirection="vertical"
              />
            )}
            {activeTab === "Lunch" && (
              <CustomCardsSection
                cardsData={getDishesByType("Lunch", dishesData.cards)}
                cardType={2}
                pageType={2}
                layoutDirection="vertical"
              />
            )}
            {activeTab === "Dinner" && (
              <CustomCardsSection
                cardsData={getDishesByType("Dinner", dishesData.cards)}
                cardType={2}
                pageType={2}
                layoutDirection="vertical"
              />
            )}
          </div>
        </>
      ) : (
        <p>Restaurant not found</p>
      )}
    </div>
  );
};

export default RestaurantDetails;