import { createAsyncThunk } from "@reduxjs/toolkit";
import { Chef } from "@/Model/Interfaces";
import  {chefController}  from "@/Controller/APIs/ChefController";


interface ChefsPageData {
  allChefs: Chef[];
  newChefs: Chef[];
  mostViewedChefs: Chef[];
}
export const fetchChefsPageData = createAsyncThunk("chefsPage/fetchData", async (): Promise<ChefsPageData> => {
  const allChefs = await chefController.getAllChefs();
  const newChefs = await chefController.getNewChefs();
  const mostViewedChefs = await chefController.getMostViewedChefs();

  return {
    allChefs: allChefs,
    newChefs: newChefs,
    mostViewedChefs: mostViewedChefs,
  };
});
