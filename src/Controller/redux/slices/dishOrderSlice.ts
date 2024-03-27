import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from '@/Controller/redux/store/store';
import { Order, OrderDish } from "@/Model/Interfaces";

interface DishOrderPageState {
  order: Order;
  isModalOpen: boolean;
  selectedDish: OrderDish | null;
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
      state.order.total += (action.payload.dish.price * action.payload.quantity);
      state.totalQuantity += action.payload.quantity;
      state.order.arrivingTime+=(action.payload.quantity*10)
    },updateComment(state, action: PayloadAction<string>) {
      state.order.comment =action.payload;
    },
    setSelectedDish(state, action: PayloadAction<OrderDish | null>) {
      state.selectedDish = action.payload;
    },
    openModal(state, action: PayloadAction<OrderDish>) {
      state.isModalOpen = true;
      state.selectedDish = action.payload;
    },
    closeModal(state) {
      state.isModalOpen = false;
      state.selectedDish = null;
    },
  }
  });

export const {updateComment, setOrderData, addDishOrder, setSelectedDish, openModal, closeModal } = dishOrderPageSlice.actions;

export default dishOrderPageSlice.reducer;
