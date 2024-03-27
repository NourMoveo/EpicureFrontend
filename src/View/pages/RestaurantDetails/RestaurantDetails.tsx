import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Restaurant, Dish } from "@/Model/Interfaces";
import { ClockIcon } from "@/View/Photos";
import "./RestaurantDetails.scss";
import { CustomCardsSection, DishOrderPopup } from "@/View/components";
import { RootState } from "@/Controller/redux/store/store";
const RestaurantDetails: React.FC = () => {

  const restaurant = { ...useSelector((state: RootState) => state.homePage.selectedRestaurant) };

  const { isModalOpen } = useSelector(
    (state: RootState) => state.homePage
  );
  const getStatus = (): string => {
    const now = new Date();
    if (restaurant && restaurant.open && restaurant.close && now >= restaurant.open && now <= restaurant.close) {
      return "Open now";
    } else {
      return "Closed now";
    }
  };

  const [activeTab, setActiveTab] = useState("Breakfast");

  const getDishesByType = (type: string, dishesData: Dish[]): Dish[] => {
    const filteredDishes = dishesData.filter((dish) => dish.type === type);
    return filteredDishes;
  };

  const dishesData = restaurant?.dishes || [];
  return (
    <div className="restaurant-details-container">
      {restaurant ? (
        <>
          <div className="restaurant-info">
            <img src={restaurant.image} alt={restaurant.title} className="restaurant-image" />
            <div className="restaurant-content">
              <h2 className="restaurant-title">{restaurant.title}</h2>
              {restaurant.chef && restaurant.chef.fName && restaurant.chef.lName && (
                <p className="restaurant-description">{restaurant.chef.fName} {restaurant.chef.lName}</p>
              )}
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
                cardsData={getDishesByType("Breakfast", dishesData)}
                cardType={2}
                pageType={2}
                layoutDirection="vertical"
              />
            )}
            {activeTab === "Lunch" && (
              <CustomCardsSection
                cardsData={getDishesByType("Lunch", dishesData)}
                cardType={2}
                pageType={2}
                layoutDirection="vertical"
              />
            )}
            {activeTab === "Dinner" && (
              <CustomCardsSection
                cardsData={getDishesByType("Dinner", dishesData)}
                cardType={2}
                pageType={2}
                layoutDirection="vertical"
              />
            )}
          </div>

      {isModalOpen && <DishOrderPopup />}
        </>
      ) : (
        <p>Restaurant not found</p>
      )}
    </div>
  );
};

export default RestaurantDetails;