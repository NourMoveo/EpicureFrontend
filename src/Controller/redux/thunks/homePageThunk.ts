import { createAsyncThunk } from "@reduxjs/toolkit";
import { restaurantAPI } from "@/Model/APIs/RestaurantAPI";
import { dishAPI } from "@/Model/APIs/DishAPI";
import { chefAPI } from "@/Model/APIs/ChefAPI";
import { setData } from "../../utils/getSetFunc";
import { Dish, Restaurant, Chef, dataTypes } from "@/Model/Interfaces";


interface HomePageData {
  popularRestaurants: Restaurant[];
  signatureDishes: Dish[];
  chefOfTheWeek: Chef;
}

export const fetchHomePageData = createAsyncThunk("homePage/fetchData", async (): Promise<HomePageData> => {
  const restaurantData: dataTypes = await setData({ interfaceType: 'r', data: await restaurantAPI.getPopularRestaurants() });
  const signatureDishes: dataTypes = await setData({ interfaceType: 'd', data: await dishAPI.getSignatureDishes() });
  console.log("signatureDishes  :",signatureDishes)
  const chefOfTheWeek: dataTypes = await setData({ interfaceType: 'c', data: [await chefAPI.getChefOfTheWeek()] });

  return {
    popularRestaurants:  restaurantData.data as Restaurant[] | [],
    signatureDishes: signatureDishes.data as Dish[] | [],
    chefOfTheWeek:  (chefOfTheWeek.data)[0] as Chef ,
  };
});
