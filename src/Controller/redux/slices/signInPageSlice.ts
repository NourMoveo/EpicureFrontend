import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SignInPageState {
  email:string;
  loading: boolean;
  error: string | null;
}

const initialState: SignInPageState = {
  email: "",
  loading: false,
  error: null,
};

const signInPageSlice = createSlice({
  name: "SignInPage",
  initialState,
  reducers: {
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    resetState(state) {
      state.email ="";
      state.loading = false;
      state.error = null;
    },
  },

});

export const { setEmail, setLoading, setError, resetState } = signInPageSlice.actions;

export default signInPageSlice.reducer;
