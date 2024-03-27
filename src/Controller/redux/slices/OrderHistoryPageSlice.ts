// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { orderHistory } from "../thunks/orderHistoryPageThunk";

// interface OrdersHistoryPageState {

// }

// const initialState: OrderHistoryPageState = {
//   token: null,
//   loading: false,
//   error: null,
// };

// const orderHistoryPageSlice = createSlice({
//   name: "OrderHistoryPage",
//   initialState,
//   reducers: {
//     orderHistoryWithEmailPassword: (state, action: PayloadAction<{ email: string; password: string }>) => {
//       const { email, password } = action.payload;
//       // Dispatch the orderHistory thunk with the email and password
//       console.log(" orderHistory({ email, password });::::n ", email, password )
//       orderHistory({ email, password });
//     },
//     setToken(state, action: PayloadAction<string>) {
//       state.token = action.payload;
//     },
//     setLoading(state, action: PayloadAction<boolean>) {
//       state.loading = action.payload;
//     },
//     setError(state, action: PayloadAction<string | null>) {
//       state.error = action.payload;
//     },
//     resetState(state) {
//       state.token = null;
//       state.loading = false;
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(orderHistory.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     });
//     builder.addCase(orderHistory.fulfilled, (state, action) => {
//       state.token = action.payload;
//       state.loading = false;
//     });
//     builder.addCase(orderHistory.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.payload as string;
//     });
//   },
// });

// export const { orderHistoryWithEmailPassword, setToken, setLoading, setError, resetState } = orderHistoryPageSlice.actions;

// export default orderHistoryPageSlice.reducer;
