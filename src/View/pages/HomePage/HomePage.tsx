import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../Controller/redux/store/store";
import { fetchHomePageData } from "../../../Controller/redux/thunks/homePageThunk";
import { Hero, IconsMeaning, WeekChef, AboutUs, DishOrderPopup } from "../../components";
import { IconsData } from "@/Model/constants";
import { CustomCardsSection } from "@/View/components";
import { LoadingGif } from "../../Photos";
import "./HomePage.scss";
import { setChefOfTheWeekData } from "@/Controller/redux/slices/homePageSlice";

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { popularRestaurants, signatureDishes, chefOfTheWeek, isModalOpen, popularRestaurantsLoading, signatureDishesLoading, chefOfTheWeekLoading } = useSelector(
    (state: RootState) => state.homePage
  );

  useEffect(() => {
    dispatch(fetchHomePageData())
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching home page data:", error);
        setIsLoading(false);
      });
  }, [dispatch]);

  return (
    <>
      <Hero />
      <div className="sub-title-home-page">Popular Restaurants in Epicure:</div>
      {popularRestaurantsLoading ? (
        <div className="loading-spinner">
          <img className="loading" src={LoadingGif} alt="Loading..." />
        </div>
      ) : (
        <>
          {popularRestaurants && popularRestaurants.length > 0 ? (
            <CustomCardsSection cardsData={popularRestaurants} cardType={1} pageType={1} layoutDirection="horizontal" />
          ) : (
            <p className="no-data">No popular restaurants found.</p>
          )}
        </>
      )}
      <h2 className="sub-title-home-page">Signature Dishes Of:</h2>
      {signatureDishesLoading ? (
        <div className="loading-spinner">
          <img className="loading" src={LoadingGif} alt="Loading..." />
        </div>
      ) : (
        <>
          {signatureDishes && signatureDishes.length > 0 ? (
            <CustomCardsSection cardsData={signatureDishes}  cardType={2} pageType={1} layoutDirection="horizontal" />
          ) : (
            <p className="no-data">No signature dishes found.</p>
          )}
        </>
      )}
      <IconsMeaning icons={IconsData} />
      {chefOfTheWeekLoading ? (
        <div className="loading-spinner">
          <img className="loading" src={LoadingGif} alt="Loading..." />
        </div>
      ) : (
        <>
          {chefOfTheWeek ? (
            <>
              <WeekChef {...chefOfTheWeek} />
              {chefOfTheWeek.restaurant && chefOfTheWeek.restaurant.length > 0 ? (
                <CustomCardsSection
                  cardsData={chefOfTheWeek.restaurant} 
                  cardType={3}
                  pageType={1}
                  layoutDirection="horizontal"
                />
              ) : (
                <p key="no-restaurants" className="no-data">No restaurants associated with the chef of the week.</p>
              )}
            </>
          ) : (
            <p key="no-chef" className="no-data">No chef of the week found.</p>
          )}
        </>
      )}
      <AboutUs />
    </>
  );
};

export default HomePage;
