import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cards} from "../../models/Types";
import {fetchRestaurantsPageData} from "../thunk/restaurantsPageThunk";

interface RestaurantsPageState {
  allRestaurants: Cards;
  newRestaurants: Cards;
  popularRestaurants: Cards;
  openNowRestaurants: Cards;
  selectedButton:string | " ";

}

const initialState: RestaurantsPageState = {
  allRestaurants: { cards: [] },
  newRestaurants: { cards: [] },
  popularRestaurants: { cards: [] },
  openNowRestaurants: { cards: [] },
  selectedButton: " ",
};

const restaurantsPageSlice = createSlice({
  name: "restaurantsPage",
  initialState,
  reducers: {
    setAllRestaurantsData(state, action: PayloadAction<Cards>) {
        state.allRestaurants = action.payload;
      },
      setNewRestaurantsData(state, action: PayloadAction<Cards>) {
        state.newRestaurants = action.payload;
      },
      setPopularRestaurantsData(state, action: PayloadAction<Cards>) {
        state.popularRestaurants = action.payload;
      },
      setOpenNowRestaurantsData(state, action: PayloadAction<Cards>) {
        state.openNowRestaurants= action.payload;
      },

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

export const { setAllRestaurantsData, setNewRestaurantsData, setPopularRestaurantsData ,  setOpenNowRestaurantsData} = restaurantsPageSlice.actions;

export default restaurantsPageSlice.reducer;
