import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cards, ChefsProps, CardProps } from "../../models/Types";
import { fetchHomePageData } from "../thunk/homePageThunk";

interface HomePageState {
  popularRestaurants: Cards;
  signatureDishes: Cards;
  chefOfTheWeek: ChefsProps;
  selectedCard: CardProps | null;
}

const initialState: HomePageState = {
  popularRestaurants: { cards: [] },
  signatureDishes: { cards: [] },
  chefOfTheWeek: {
    chefs:[]
  },
  selectedCard: null,
};

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setPopularRestaurantsData(state, action: PayloadAction<Cards>) {
      state.popularRestaurants = action.payload;
    },
    setSignatureDishesData(state, action: PayloadAction<Cards>) {
      state.signatureDishes = action.payload;
    },
    setChefOfTheWeekData(state, action: PayloadAction<ChefsProps>) {
      state.chefOfTheWeek = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomePageData.fulfilled, (state, action) => {
      state.popularRestaurants = action.payload.popularRestaurants;
      state.signatureDishes = action.payload.signatureDishes;
      state.chefOfTheWeek = action.payload.chefOfTheWeek;
    });
  },
});

export const { setPopularRestaurantsData, setSignatureDishesData, setChefOfTheWeekData,  } = homePageSlice.actions;

export default homePageSlice.reducer;
