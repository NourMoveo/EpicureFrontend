import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signIn } from "../thunks/signInPageThunk";

interface SignInPageState {
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: SignInPageState = {
  token: null,
  loading: false,
  error: null,
};

const signInPageSlice = createSlice({
  name: "SignInPage",
  initialState,
  reducers: {
    signInWithEmailPassword: (state, action: PayloadAction<{ email: string; password: string }>) => {
      const { email, password } = action.payload;
      // Dispatch the signIn thunk with the email and password
      console.log(" signIn({ email, password });::::n ", email, password )
      signIn({ email, password });
    },
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    resetState(state) {
      state.token = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.token = action.payload;
      state.loading = false;
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export const { signInWithEmailPassword, setToken, setLoading, setError, resetState } = signInPageSlice.actions;

export default signInPageSlice.reducer;
