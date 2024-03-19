import { createAsyncThunk } from "@reduxjs/toolkit";
import {Restaurant} from "@/Model/Interfaces";
import { restaurantController } from "@/Controller/APIs/RestaurantController";


interface RestaurantsPageData {
  allRestaurants: Restaurant[];
  newRestaurants: Restaurant[];
  popularRestaurants: Restaurant[];
  openNowRestaurants: Restaurant[];
}
export const fetchRestaurantsPageData = createAsyncThunk("restaurantsPage/fetchData", async (): Promise<RestaurantsPageData> => {
    const allRestaurants = await restaurantController.getAllRestaurants();
    const newRestaurants = await restaurantController.getNewRestaurants();
    const popularRestaurants = await restaurantController.getPopularRestaurants();
    const openNowRestaurants = await restaurantController.getOpenNowRestaurants();
    return {
        allRestaurants: allRestaurants,
        newRestaurants: newRestaurants,
        popularRestaurants:popularRestaurants,
        openNowRestaurants:openNowRestaurants
    };
  });
  