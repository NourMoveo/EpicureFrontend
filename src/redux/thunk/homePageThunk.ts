import { createAsyncThunk } from "@reduxjs/toolkit";

import { Cards, ChefsProps} from "../../models/Types";
import { restaurantAdapter } from "../../adapters/DBModels/restaurantAdapter";
import { dishAdapter } from "../../adapters/DBModels/dishAdapter";
import { chefAdapter } from "../../adapters/DBModels/chefAdapter";
import { transformRestaurantsData, transformDishesData, transformChefsData } from "../../adapters/utils/transformData";

interface HomePageData {
  popularRestaurants: Cards;
  signatureDishes: Cards;
  chefOfTheWeek: ChefsProps;
}
// Create an asynchronous thunk to fetch data for the home page
export const fetchHomePageData = createAsyncThunk("homePage/fetchData", async (): Promise<HomePageData> => {
    const popularRestaurantsData = await restaurantAdapter.getPopularRestaurants();
    const signatureDishesData = await dishAdapter.getSignatureDishes();
    const chefOfTheWeekData = await chefAdapter.getChefOfTheWeek();
  
    const popularRestaurants = await transformRestaurantsData(popularRestaurantsData);
    const signatureDishes = await transformDishesData(signatureDishesData);
    const chefOfTheWeek = await transformChefsData(chefOfTheWeekData);
  
    return {
      popularRestaurants: { cards: popularRestaurants.cards },
      signatureDishes: { cards: signatureDishes.cards }, 
      chefOfTheWeek: {chefs: chefOfTheWeek.chefs }, 
    };
  });
  