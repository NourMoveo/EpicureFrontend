import React, { useState } from "react";
import { CustomCardsSection, RestaurantsHeader } from "../../components";
import { RestaurantsData } from "../../data";
import "./RestaurantsPage.scss"; // Import SCSS file
import { Map } from "@/assets/Photos";
import { newRestaurants, popularRestaurants, openNowRestaurants } from "../../data/dataFetcher/dataFetcher";
import { NewRestaurantsGroupedByRating, OpenNowRestaurantsGroupedByRating, PopularRestaurantsGroupedByRating, AllRestaurantsGroupedByRating } from "../../data/MockData/Restaurants";
import RatingFilter, { mergeCardsByRating } from "@/components/Shared/RatingFilter/RatingFilter";

const RestaurantsPage = () => {
  const [activeButton, setActiveButton] = useState("All");
  const [isMapView, setIsMapView] = useState(false);
  const [activeAdditionalButton, setActiveAdditionalButton] = useState<string | null>(null); // State for active additional button
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
    // If the MapView button is clicked, switch to map view
    if (buttonName === "MapView") {
      setIsMapView(true);
    } else {
      setIsMapView(false);
    }
  };

  // Handle additional button click
  const handleAdditionalButtonClick = (buttonName: string) => {
    setActiveAdditionalButton((prevButton) => (prevButton === buttonName ? null : buttonName)); // Update active additional button
  };

  const handleFilterChange = (ratings: number[]) => {
    setSelectedRatings(ratings);
  };

  return (
    <div className="restaurants-page">
      <h2 className="restaurant-header">Restaurants</h2>
      <RestaurantsHeader onButtonClick={handleButtonClick} onAdditionalButtonClick={handleAdditionalButtonClick} />
      {activeAdditionalButton === "Rating" && !isMapView && <RatingFilter onFilterChange={handleFilterChange} />}

      <div className="container-content">
        {isMapView ? (
          <div className="map-image-container">
            <img className="map-img" src={Map} alt="Map" />
          </div>
        ) : (
          <div className="cards">
            {activeButton === "All" && (
              <CustomCardsSection
                cardsData={
                  activeAdditionalButton === "Rating"
                    ? mergeCardsByRating(AllRestaurantsGroupedByRating, selectedRatings)
                    : RestaurantsData
                }
                cardType={1}
                pageType={2}
                layoutDirection="vertical"
              />
            )}
            {activeButton === "New" && (
              <CustomCardsSection
                cardsData={
                  activeAdditionalButton === "Rating"
                    ? mergeCardsByRating(NewRestaurantsGroupedByRating, selectedRatings)
                    : newRestaurants
                }
                cardType={1}
                pageType={2}
                layoutDirection="vertical"
              />
            )}
            {activeButton === "MostPopular" && (
              <CustomCardsSection
                cardsData={
                  activeAdditionalButton === "Rating"
                    ? mergeCardsByRating(PopularRestaurantsGroupedByRating, selectedRatings)
                    : popularRestaurants
                }
                cardType={1}
                pageType={2}
                layoutDirection="vertical"
              />
            )}
            {activeButton === "OpenNow" && (
              <CustomCardsSection
                cardsData={
                  activeAdditionalButton === "Rating"
                    ? mergeCardsByRating(OpenNowRestaurantsGroupedByRating, selectedRatings)
                    : openNowRestaurants
                }
                cardType={1}
                pageType={2}
                layoutDirection="vertical"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantsPage;
