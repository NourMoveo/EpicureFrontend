import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Restaurant, Dish, Chef } from "@/Model/Interfaces";
import { fetchHomePageData } from "../thunks/homePageThunk";

interface HomePageState {
  popularRestaurants: Restaurant[];
  signatureDishes: Dish[];
  chefOfTheWeek: Chef;
  selectedRestaurant: Restaurant | null;
  isModalOpen: boolean;
  selectedDish: Dish | null;
}

const initialState: HomePageState = {
  popularRestaurants: [],
  signatureDishes: [],
  chefOfTheWeek: {
    _id: "",
    fName: "",
    lName: "",
    image: "",
    description: "",
    restaurant: [],
    isChefOfTheWeek: false,
    isMostViewedChef: false,
  },
  selectedRestaurant: null,
  isModalOpen: false,
  selectedDish: null,
};

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setPopularRestaurantsData(state, action: PayloadAction<Restaurant[]>) {
      state.popularRestaurants = action.payload;
    },
    setSignatureDishesData(state, action: PayloadAction<Dish[]>) {
      state.signatureDishes = action.payload;
    },
    setChefOfTheWeekData(state, action: PayloadAction<Chef>) {
      state.chefOfTheWeek = action.payload;
    },
    setSelectedRestaurant(state, action: PayloadAction<Restaurant | null>) {
      state.selectedRestaurant = action.payload;
    },
    setSelectedDish(state, action: PayloadAction<Dish | null>) {
      state.selectedDish = action.payload;
    },
    openModal: (state, action: PayloadAction<Dish>) => {
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
  },
});

export const {
  setPopularRestaurantsData,
  setSignatureDishesData,
  setChefOfTheWeekData,
  setSelectedRestaurant,
  openModal,
  closeModal,
  setSelectedDish
} = homePageSlice.actions;

export default homePageSlice.reducer;
