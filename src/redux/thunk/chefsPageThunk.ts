import { createAsyncThunk } from "@reduxjs/toolkit";
import { ChefsProps } from "../../models/Types";
import { chefAdapter } from "../../adapters/DBModels/chefAdapter";
import { transformChefsData, } from "../../adapters/utils/transformData";

interface ChefsPageData {
  allChefs: ChefsProps;
  newChefs: ChefsProps;
  mostViewedChefs: ChefsProps;
}
export const fetchChefsPageData = createAsyncThunk("chefsPage/fetchData", async (): Promise<ChefsPageData> => {
  const allChefsData = await chefAdapter.getAllChefs();
  const newChefsData = await chefAdapter.getNewChefs();
  const mostViewedChefsData = await chefAdapter.getMostViewedChefs();


  const allChefs = await transformChefsData(allChefsData);
  const newChefs = await transformChefsData(newChefsData);
  const mostViewedChefs = await transformChefsData(mostViewedChefsData);



  return {
    allChefs: { chefs: allChefs.chefs },
    newChefs: { chefs: newChefs.chefs },
    mostViewedChefs: { chefs: mostViewedChefs.chefs },
  };
});
