import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Restaurant } from "@/Model/Interfaces";
import {fetchRestaurantsPageData} from "../thunks/restaurantsPageThunk";

interface RestaurantsPageState {
  allRestaurants: Restaurant[];
  newRestaurants: Restaurant[];
  popularRestaurants: Restaurant[];
  openNowRestaurants: Restaurant[];
  selectedRestaurant: Restaurant | null,

}

const initialState: RestaurantsPageState = {
  allRestaurants: [],
  newRestaurants: [],
  popularRestaurants: [],
  openNowRestaurants: [],
  selectedRestaurant: null,
};

const restaurantsPageSlice = createSlice({
  name: "restaurantsPage",
  initialState,
  reducers: {
    setAllRestaurantsData(state, action: PayloadAction<Restaurant[]>) {
        state.allRestaurants = action.payload;
      },
      setNewRestaurantsData(state, action: PayloadAction<Restaurant[]>) {
        state.newRestaurants = action.payload;
      },
      setPopularRestaurantsData(state, action: PayloadAction<Restaurant[]>) {
        state.popularRestaurants = action.payload;
      },
      setOpenNowRestaurantsData(state, action: PayloadAction<Restaurant[]>) {
        state.openNowRestaurants= action.payload;
      },
      openRestaurantDetail: (state, action: PayloadAction<Restaurant>) => {
        
        state.selectedRestaurant= action.payload;
      }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRestaurantsPageData.fulfilled, (state, action) => {
        state.allRestaurants = action.payload.allRestaurants;
        state.newRestaurants = action.payload.newRestaurants;
        state.popularRestaurants = action.payload.popularRestaurants;
        state.openNowRestaurants = action.payload.openNowRestaurants;
    });
  },
});

export const { setAllRestaurantsData, setNewRestaurantsData, setPopularRestaurantsData ,  setOpenNowRestaurantsData, openRestaurantDetail} = restaurantsPageSlice.actions;

export default restaurantsPageSlice.reducer;
