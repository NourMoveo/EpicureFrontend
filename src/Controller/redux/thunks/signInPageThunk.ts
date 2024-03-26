import { createAsyncThunk } from "@reduxjs/toolkit";
import { userAPI } from "../../../Model/APIs/UserAPI";

export const signIn = createAsyncThunk(
    "signIn/signIn",
    async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
      try {
        const token = await userAPI.login(email, password);
        console.log("token  :",token);
        return token;
      } catch (error: unknown) { 
        return rejectWithValue(error instanceof Error ? error.message : "An error occurred during sign in");
      }
    }
  );
  