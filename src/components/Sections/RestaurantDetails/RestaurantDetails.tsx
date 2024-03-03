import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { CardProps } from "@/models/Types";
import RestaurantData from "@/data/Restaurants";
import { ClockIcon } from '@/assets/homePhotos';
import './RestaurantDetails.scss'
import { CustomCardsSection} from "@/components";

const RestaurantDetails: React.FC = () => {
  const { title = "" } = useParams<{ title?: string }>();

  const restaurant: CardProps | undefined = RestaurantData.cards.find(
    (r: CardProps) => r.title === decodeURIComponent(title)
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
            <CustomCardsSection cardsData={restaurant.dishes} cardType={2} pageType={2} layoutDirection="vertical"/>
          </div>
        </>
      ) : (
        <p>Restaurant not found</p>
      )}
    </div>
  );
};

export default RestaurantDetails;
