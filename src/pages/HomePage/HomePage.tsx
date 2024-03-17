import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store/store";
import { fetchHomePageData } from "../../redux/thunk/homePageThunk";
import { Hero, Restaurants, Dishes, IconsMeaning, WeekChef, AboutUs } from "../../components";
import { IconsData } from "../../data";
import { CustomCardsSection } from "@/components";
import { Cards } from '@/models/Types';
import { LoadingGif } from "../../assets/Photos";
import "./HomePage.scss"

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(true);
  const [popularRestaurantsLoading, setPopularRestaurantsLoading] = useState(true);
  const [signatureDishesLoading, setSignatureDishesLoading] = useState(true);
  const [chefOfTheWeekLoading, setChefOfTheWeekLoading] = useState(true);

  const { popularRestaurants, signatureDishes, chefOfTheWeek } = useSelector(
    (state: RootState) => state.homePage
  );
  const chef = chefOfTheWeek.chefs[0];
  const ChefData: { fName: string; lName: string; image: string; description: string; restaurants: Cards } = {
    fName: chef?.fName || "",
    lName: chef?.lName || "",
    image: chef?.image || "",
    description: chef?.description || "",
    restaurants: chef?.restaurants || { cards: [] },
  };

  useEffect(() => {
    dispatch(fetchHomePageData())
      .then(() => {
        setIsLoading(false);
        setPopularRestaurantsLoading(false);
        setSignatureDishesLoading(false);
        setChefOfTheWeekLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching home page data:", error);
        setIsLoading(false);
        setPopularRestaurantsLoading(false);
        setSignatureDishesLoading(false);
        setChefOfTheWeekLoading(false);
      });
  }, [dispatch]);

  return (
    <>
      <Hero />
      <Restaurants />
      {popularRestaurantsLoading ? (
        <div className="loading-spinner">
          <img className="loading" src={LoadingGif} alt="Loading..." />
        </div>
      ) : (
        <>
          {popularRestaurants && popularRestaurants.cards.length > 0 ? (
            <CustomCardsSection cardsData={popularRestaurants} cardType={1} pageType={1} layoutDirection="horizontal" />
          ) : (
            <p className="no-data">No popular restaurants found.</p>
          )}
        </>
      )}
      <Dishes />
      {signatureDishesLoading ? (
        <div className="loading-spinner">
          <img className="loading" src={LoadingGif} alt="Loading..." />
        </div>
      ) : (
        <>
          {signatureDishes && signatureDishes.cards.length > 0 ? (
            <CustomCardsSection cardsData={signatureDishes} cardType={2} pageType={1} layoutDirection="horizontal" />
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
          {chefOfTheWeek && chefOfTheWeek.chefs.length > 0 ? (
            <>
              <WeekChef chefDetails={ChefData} />{ChefData.restaurants.cards.length > 0 ? (
                <CustomCardsSection cardsData={ChefData.restaurants} cardType={3} pageType={1} layoutDirection="horizontal" />
              ) : (
                <p className="no-data">No restaurants associated with the chef of the week.</p>
              )}            </>
          ) : (
            <p className="no-data">No chef of the week found.</p>
          )}
        </>
      )}
      <AboutUs />
    </>
  );

};

export default HomePage;
