import {RouterProvider} from 'react-router-dom';
import router from "./router/Route";
import {allRestaurants,allChefs,allDishes,popularRestaurants,openNowRestaurants,newRestaurants,chefOfTheWeek} from "./data/dataFetcher/dataFetcher";
import{AllRestaurantsGroupedByRating} from'./data/MockData/Restaurants';
import RatingFilter from './components/Shared/RatingFilter/RatingFilter'; // Import the RatingFilter component

function App() {
  console.log("All Restaurants:", allRestaurants);
  console.log("new Restaurants:", newRestaurants);
  console.log("popular Restaurants:", popularRestaurants);
  console.log("openNow Restaurants:", openNowRestaurants);
  console.log("All Chefs:", allChefs);
  console.log("All Dishes:", allDishes.cards);
  console.log("chefOfTheWeek:", chefOfTheWeek);
  // Function to handle rating change and log selectedRatings array
  const handleRatingChange = (selectedRatings: number[]) => {
    console.log('Selected Ratings:', selectedRatings);
  };

  return (
    <RouterProvider router={router}>
      {/* Your JSX elements */}
    </RouterProvider>
  );
}

export default App;
