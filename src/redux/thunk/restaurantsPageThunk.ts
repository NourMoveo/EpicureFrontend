import { createAsyncThunk } from "@reduxjs/toolkit";
import { Cards} from "../../models/Types";
import { restaurantAdapter } from "../../adapters/DBModels/restaurantAdapter";
import { transformRestaurantsData,} from "../../adapters/utils/transformData";

interface RestaurantsPageData {
  allRestaurants: Cards;
  newRestaurants: Cards;
  popularRestaurants: Cards;
  openNowRestaurants: Cards;
  
  
}
export const fetchRestaurantsPageData = createAsyncThunk("restaurantPage/fetchData", async (): Promise<RestaurantsPageData> => {
    const allRestaurantsData = await restaurantAdapter.getAllRestaurants();
    const newRestaurantsData = await restaurantAdapter.getNewRestaurants();
    const popularRestaurantsData = await restaurantAdapter.getPopularRestaurants();
    const openNowRestaurantsData = await restaurantAdapter.getOpenNowRestaurants();

  
    const allRestaurants = await transformRestaurantsData(allRestaurantsData);
    const newRestaurants = await transformRestaurantsData(newRestaurantsData);
    const popularRestaurants = await transformRestaurantsData(popularRestaurantsData);
    const openNowRestaurants = await transformRestaurantsData(openNowRestaurantsData);

  
    return {
        allRestaurants: { cards: allRestaurants.cards },
        newRestaurants: { cards: newRestaurants.cards },
        popularRestaurants: { cards: popularRestaurants.cards },
        openNowRestaurants: { cards: openNowRestaurants.cards },

    };
  });
  