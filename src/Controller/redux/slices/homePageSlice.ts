// homePageSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Restaurant, Dish, Chef } from "@/Model/Interfaces";
import { fetchHomePageData } from "../thunks/homePageThunk";
import { restaurantController } from "@/Controller/APIs/RestaurantController";

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
    restaurants: [],
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
            // Fetching details for each restaurant in chefOfTheWeek.restaurants
            const restaurantPromises = state.chefOfTheWeek.restaurants.map(async (restaurant) => {
              try {
                const formData = new FormData();
                const restaurantData = await restaurantController.getRestaurantById(restaurant._id, formData);
                return restaurantData;
              } catch (error) {
                console.error(`Error fetching restaurant ${restaurant._id}:`, error);
                return null;
              }
            });
            // Resolve all promises and update the restaurants array
            Promise.all(restaurantPromises).then((restaurants) => {
              state.chefOfTheWeek.restaurants = restaurants.filter((restaurant) => restaurant !== null) as Restaurant[];
            });
    },
    setSelectedRestaurant(state, action: PayloadAction<Restaurant | null>) {
      state.selectedRestaurant = action.payload;
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
} = homePageSlice.actions;

export default homePageSlice.reducer;
