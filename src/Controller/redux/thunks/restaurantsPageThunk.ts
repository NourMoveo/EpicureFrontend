import { createAsyncThunk } from "@reduxjs/toolkit";
import {Restaurant} from "@/Model/Interfaces";
import { restaurantAPI } from "@/Model/APIs/RestaurantAPI";
import { setData } from "../../utils/getSetFunc";


interface RestaurantsPageData {
  allRestaurants: Restaurant[];
  newRestaurants: Restaurant[];
  popularRestaurants: Restaurant[];
  openNowRestaurants: Restaurant[];
}
export const fetchRestaurantsPageData = createAsyncThunk("restaurantsPage/fetchData", async (): Promise<RestaurantsPageData> => {
    const allRestaurants = await setData({ interfaceType: 'r', data: await  await restaurantAPI.getAllRestaurants() });
    const newRestaurants = await setData({ interfaceType: 'r', data: await restaurantAPI.getNewRestaurants() });
    const popularRestaurants = await setData({ interfaceType: 'r', data: await restaurantAPI.getPopularRestaurants() }); ;
    const openNowRestaurants = await setData({ interfaceType: 'r', data: await restaurantAPI.getOpenNowRestaurants() }); 
    return {
        allRestaurants: allRestaurants.data as Restaurant[] | [],
        newRestaurants: newRestaurants.data as Restaurant[] | [],
        popularRestaurants:popularRestaurants.data as Restaurant[] | [],
        openNowRestaurants:openNowRestaurants.data as Restaurant[] | []
    };
  });
  