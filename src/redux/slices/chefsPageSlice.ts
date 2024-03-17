import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {ChefsProps} from "../../models/Types";
import {fetchChefsPageData} from "../thunk/chefsPageThunk";

interface ChefsPageState {
    allChefs: ChefsProps;
    newChefs: ChefsProps;
    mostViewedChefs: ChefsProps;
  selectedButton:string | " ";

}

const initialState: ChefsPageState = {
  allChefs: { chefs: [] },
  newChefs: { chefs: [] },
  mostViewedChefs: { chefs: [] },
  selectedButton: " ",
};

const chefsPageSlice = createSlice({
  name: "chefsPage",
  initialState,
  reducers: {
    setAllChefsData(state, action: PayloadAction<ChefsProps>) {
        state.allChefs = action.payload;
      },
      setNewChefsData(state, action: PayloadAction<ChefsProps>) {
        state.newChefs = action.payload;
      },
      setMostViewedChefsData(state, action: PayloadAction<ChefsProps>) {
        state.mostViewedChefs = action.payload;
      },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchChefsPageData.fulfilled, (state, action) => {
        state.allChefs = action.payload.allChefs;
        state.newChefs = action.payload.newChefs;
        state.mostViewedChefs = action.payload.mostViewedChefs;
    });
  },
});

export const { setAllChefsData, setNewChefsData, setMostViewedChefsData} = chefsPageSlice.actions;

export default chefsPageSlice.reducer;
