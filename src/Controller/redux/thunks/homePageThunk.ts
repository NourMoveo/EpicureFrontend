import { createAsyncThunk } from "@reduxjs/toolkit";
import { restaurantController } from "@/Controller/APIs/RestaurantController";
import { dishController } from "@/Controller/APIs/DishController";
import { chefController } from "@/Controller/APIs/ChefController";

import { Dish, Restaurant ,Chef} from "@/Model/Interfaces";

interface HomePageData {
  popularRestaurants: Restaurant[]; 
  signatureDishes: Dish[];
  chefOfTheWeek: Chef;
}
// Create an asynchronous thunk to fetch data for the home page
export const fetchHomePageData = createAsyncThunk("homePage/fetchData", async (): Promise<HomePageData> => {
    const popularRestaurants = await restaurantController.getPopularRestaurants();
    const signatureDishes = await dishController.getSignatureDishes();
    const chefOfTheWeek = await chefController.getChefOfTheWeek();

    return {
      popularRestaurants: popularRestaurants,
      signatureDishes: signatureDishes, 
      chefOfTheWeek: chefOfTheWeek, 
    };
    
  });
  