import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store/store";
import { fetchRestaurantsPageData } from "../../redux/thunk/restaurantsPageThunk";
import { CustomCardsSection, RestaurantsHeader } from "../../components";
import { Map,LoadingGif } from "@/assets/Photos";
import "./RestaurantsPage.scss";

const RestaurantsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(true);
  const [activeButton, setActiveButton] = useState("All");
  const [isMapView, setIsMapView] = useState(false);
  const [activeAdditionalButton, setActiveAdditionalButton] = useState<string | null>(null);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
    setIsMapView(buttonName === "MapView");
  };

  const handleAdditionalButtonClick = (buttonName: string) => {
    setActiveAdditionalButton(buttonName);
  };

  const handleFilterChange = (ratings: number[]) => {
    setSelectedRatings(ratings);
  };

  useEffect(() => {
    dispatch(fetchRestaurantsPageData())
      .then(() => setIsLoading(false))
      .catch((error) => {
        console.error("Error fetching home page data:", error);
        setIsLoading(false);
      });
  }, [dispatch]);

  const { allRestaurants, newRestaurants, openNowRestaurants, popularRestaurants } = useSelector(
    (state: RootState) => state.restaurantsPage
  );

  return (
    <div className="restaurants-page">
      <h2 className="restaurant-header">Restaurants</h2>
      <RestaurantsHeader
        onButtonClick={handleButtonClick}
        onAdditionalButtonClick={handleAdditionalButtonClick}
      />
      <div className="container-content">
        {isLoading ? renderLoading() : renderContent()}
      </div>
    </div>
  );

  function renderLoading() {
    return (
      <div className="loading-spinner">
        <img className="loading" src={LoadingGif} alt="Loading..." />
      </div>
    );
  }

  function renderContent() {
    return (
      <>
        {isMapView ? (
          <div className="map-image-container">
            <img className="map-img" src={Map} alt="Map" />
          </div>
        ) : (
          <div className="cards">
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
      </>
    );
  }
};

export default RestaurantsPage;
