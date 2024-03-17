import { CustomCardsSection, RestaurantsHeader } from "../../components";
import "./RestaurantsPage.scss"; // Import SCSS file
import { Map } from "@/assets/Photos";
import { useEffect, useState } from "react";
import RatingFilter, {
  mergeCardsByRating,
} from "@/components/Shared/RatingFilter/RatingFilter";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store/store";
import {fetchRestaurantsPageData}  from "../../redux/thunk/restaurantsPageThunk";
const RestaurantsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(true);
  const [activeButton, setActiveButton] = useState("All");
  const [isMapView, setIsMapView] = useState(false);
  const [activeAdditionalButton, setActiveAdditionalButton] = useState<
    string | null
  >(null); // State for active additional button
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
    setActiveAdditionalButton(buttonName); // Update active additional button
  };

  const handleFilterChange = (ratings: number[]) => {
    setSelectedRatings(ratings);
  };
  useEffect(() => {
    dispatch(fetchRestaurantsPageData())
      .then(() => {
        setIsLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching home page data:", error);
        setIsLoading(false); 
      });
  }, [dispatch]);
  const { allRestaurants,newRestaurants,openNowRestaurants, popularRestaurants} = useSelector(
    (state: RootState) => state.restaurantsPage
  );
  return (
    <div className="restaurants-page">
      <h2 className="restaurant-header">Restaurants</h2>
      <RestaurantsHeader
        onButtonClick={handleButtonClick}
        onAdditionalButtonClick={handleAdditionalButtonClick}
      />
      {activeAdditionalButton === "Rating" && !isMapView && (
        <RatingFilter onFilterChange={handleFilterChange} />
      )}

      <div className="container-content">
        {isMapView ? (
          <div className="map-image-container">
            <img className="map-img" src={Map} alt="Map" />
          </div>
        ) : (
          <div className="cards">
            {activeAdditionalButton && (
              <CustomCardsSection
                cardsData={allRestaurants}
                cardType={1}
                pageType={2}
                layoutDirection="vertical"
              />
            )}
            {activeButton === "All" && (
              <CustomCardsSection
                cardsData={allRestaurants}
                cardType={1}
                pageType={2}
                layoutDirection="vertical"
              />
            )}
            {activeButton === "New" && (
              <CustomCardsSection
                cardsData={newRestaurants}
                cardType={1}
                pageType={2}
                layoutDirection="vertical"
              />
            )}
            {activeButton === "MostPopular" && (
              <CustomCardsSection
                cardsData={popularRestaurants}
                cardType={1}
                pageType={2}
                layoutDirection="vertical"
              />
            )}
            {activeButton === "OpenNow" && (
              <CustomCardsSection
                cardsData={openNowRestaurants}
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
