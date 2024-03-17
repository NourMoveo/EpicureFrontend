import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cards, ChefsProps, CardProps } from "../../models/Types";
import { fetchHomePageData } from "../thunk/homePageThunk";

interface HomePageState {
  popularRestaurants: Cards;
  signatureDishes: Cards;
  chefOfTheWeek: ChefsProps;
  isModalOpen: boolean;
  selectedCard: CardProps | null;
}

const initialState: HomePageState = {
  popularRestaurants: { cards: [] },
  signatureDishes: { cards: [] },
  chefOfTheWeek: {
    chefs:[]
  },
  isModalOpen: false,
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
    },
    openModal: (state, action: PayloadAction<CardProps>) => {
      state.isModalOpen = true;
      state.selectedCard = action.payload;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.selectedCard = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomePageData.fulfilled, (state, action) => {
      state.popularRestaurants = action.payload.popularRestaurants;
      state.signatureDishes = action.payload.signatureDishes;
      state.chefOfTheWeek = action.payload.chefOfTheWeek;
    });
  },
});

export const { setPopularRestaurantsData, setSignatureDishesData, setChefOfTheWeekData, openModal, closeModal } = homePageSlice.actions;

export default homePageSlice.reducer;
