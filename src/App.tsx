import React, { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/Route";
import {
  allRestaurants,
  allChefs,
  allDishes,
  popularRestaurants,
  openNowRestaurants,
  newRestaurants,
  chefOfTheWeek,
} from "./data/dataFetcher/dataFetcher";
import { AllRestaurantsGroupedByRating } from "./data/MockData/Restaurants";
import RatingFilter from "./components/Shared/RatingFilter/RatingFilter"; // Import the RatingFilter component
import "./App.scss"; // Import the app.scss file
import{LoadingGif} from "./assets/Photos";

function App() {
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  // Function to handle rating change and log selectedRatings array
  const handleRatingChange = (selectedRatings: number[]) => {
    console.log("Selected Ratings:", selectedRatings);
  };

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([
          allRestaurants,
          popularRestaurants,
          newRestaurants,
          openNowRestaurants,
          allChefs,
          chefOfTheWeek,
          allDishes,
        ]);
        setIsLoading(false); // Set loading to false when data fetching completes
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error if needed
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app-body">
      {isLoading ? ( // Render loading spinner if isLoading is true
        <div className="loading-spinner">
          <img src={LoadingGif} alt="Loading..." />
        </div>
      ) : (
        <RouterProvider router={router}>
          {/* Your JSX elements */}
        </RouterProvider>
      )}
    </div>
  );
}

export default App;
