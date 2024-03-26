import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dish, Order, OrderDish } from "@/Model/Interfaces";

interface DishOrderPageState {
  order: Order;
  isModalOpen: boolean;
  selectedDish: Dish | null;
  totalQuantity: number;
}

const initialState: DishOrderPageState = {
  order: {
    date: new Date().toISOString(),
    total: 0,
    dishes: [],
    arrivingTime: 0,
    comment: ""
  },
  isModalOpen: false,
  selectedDish: null,
  totalQuantity: 0,
};


const dishOrderPageSlice = createSlice({
  name: "dishOrderPage",
  initialState,
  reducers: {
    setOrderData(state, action: PayloadAction<Order>) {
      state.order = action.payload;
    },
    addDishOrder(state, action: PayloadAction<OrderDish>) {
      state.order.dishes.push(action.payload);
      state.order.total += action.payload.dish.price * action.payload.quantity;
      state.totalQuantity += action.payload.quantity;
      console.log(" state.order: ",  state.totalQuantity);
    },
    setSelectedDish(state, action: PayloadAction<Dish | null>) {
      state.selectedDish = action.payload;
    },
    openModal(state, action: PayloadAction<Dish>) {
      state.isModalOpen = true;
      state.selectedDish = action.payload;
    },
    closeModal(state) {
      state.isModalOpen = false;
      state.selectedDish = null;
    },
  },
  extraReducers: (builder) => {

  },    
});

export const { setOrderData, addDishOrder, openModal, closeModal, setSelectedDish } = dishOrderPageSlice.actions;

export default dishOrderPageSlice.reducer;
