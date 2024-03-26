import { createAsyncThunk } from "@reduxjs/toolkit";
import { Chef } from "@/Model/Interfaces";
import  {chefAPI}  from "@/Model/APIs/ChefAPI";
import { setData } from "../../utils/getSetFunc";


interface ChefsPageData {
  allChefs: Chef[];
  newChefs: Chef[];
  mostViewedChefs: Chef[];
}
export const fetchChefsPageData = createAsyncThunk("chefsPage/fetchData", async (): Promise<ChefsPageData> => {
  const allChefs = await setData({ interfaceType: 'c', data: await chefAPI.getAllChefs()});
  const newChefs = await setData({ interfaceType: 'c', data: await chefAPI.getNewChefs()});
  const mostViewedChefs = await setData({ interfaceType: 'c', data: await chefAPI.getMostViewedChefs()});

  return {
    allChefs: allChefs.data as Chef[] | [],
    newChefs: newChefs.data as Chef[] | [],
    mostViewedChefs: mostViewedChefs.data as Chef[] | [],
  };
});
