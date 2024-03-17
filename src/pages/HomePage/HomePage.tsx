import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store/store";
import { fetchHomePageData } from "../../redux/thunk/homePageThunk";
import { Hero, Restaurants, Dishes, IconsMeaning, WeekChef, AboutUs } from "../../components";
import { IconsData } from "../../data";
import { CustomCardsSection } from "@/components";
import { Cards } from '@/models/Types';
import { LoadingGif } from "../../assets/Photos";

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(true); // State to manage loading state

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
    // Dispatch action to fetch home page data
    dispatch(fetchHomePageData())
      .then(() => {
        setIsLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching home page data:", error);
        setIsLoading(false); // Set loading to false in case of error
      });
  }, [dispatch]);

  return (
    <>
      {isLoading ? ( // Show loading spinner while data is being fetched
        <div className="loading-spinner">
          <img src={LoadingGif} alt="Loading..." />
        </div>
      ) : (
        <>
          <Hero />
          <Restaurants />
          <CustomCardsSection cardsData={popularRestaurants} cardType={1} pageType={1} layoutDirection='horizontal' />
          <Dishes />
          <CustomCardsSection cardsData={signatureDishes} cardType={2} pageType={1} layoutDirection='horizontal' />
          <IconsMeaning icons={IconsData} />
          <WeekChef chefDetails={ChefData} />
          <AboutUs />
        </>
      )}
    </>
  );
};

export default HomePage;
