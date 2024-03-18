import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cards, ChefsProps, CardProps } from "../../models/Types";
import { fetchHomePageData } from "../thunk/homePageThunk";

interface HomePageState {
  popularRestaurants: Cards;
  signatureDishes: Cards;
  chefOfTheWeek: ChefsProps;
  selectedRestaurant: CardProps | null;
  selectedDish: CardProps | null;
  isModalOpen: boolean;
}

const initialState: HomePageState = {
  popularRestaurants: { cards: [] },
  signatureDishes: { cards: [] },
  chefOfTheWeek: {
    chefs: []
  },
  selectedRestaurant: null,
  isModalOpen: false,
  selectedDish:null,
  
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
    setSelectedRestaurant(state, action: PayloadAction<CardProps | null>) {
      
        state.selectedRestaurant = action.payload;
    },
    openModal: (state, action: PayloadAction<CardProps>) => {
      state.isModalOpen = true;
      state.selectedDish = action.payload;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.selectedDish = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomePageData.fulfilled, (state, action) => {
      state.popularRestaurants = action.payload.popularRestaurants;
      state.signatureDishes = action.payload.signatureDishes;
      state.chefOfTheWeek = action.payload.chefOfTheWeek;
    });
  }
});

export const { setPopularRestaurantsData, setSignatureDishesData, setChefOfTheWeekData, setSelectedRestaurant,openModal,closeModal } = homePageSlice.actions;

export default homePageSlice.reducer;
