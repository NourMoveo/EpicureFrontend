import { apiService } from "../../services/apiServices";

export interface DBChef {
  _id: string;
  fName: string;
  lName: string;
  image: string;
  description: string;
  restaurants: string[];
  isChefOfTheWeek: boolean;
  isMostViewedChef:boolean;
}

class ChefAdapter {
  static readonly endpoint = "/chefs";
  async getAllChefs(): Promise<DBChef[]> {
    const response = await apiService.get<DBChef[]>(`${ChefAdapter.endpoint}`);
    return response.data;
  }
  async getNewChefs(): Promise<DBChef[]> {
    const response = await apiService.get<DBChef[]>(`${ChefAdapter.endpoint}/new`);
    return response.data;
  }
  async getMostViewedChefs(): Promise<DBChef[]> {
    const response = await apiService.get<DBChef[]>(`${ChefAdapter.endpoint}/most-viewed`);
    return response.data;
  }
  async getChefOfTheWeek(): Promise<DBChef[]> {
    const response = await apiService.get<DBChef[]>(`${ChefAdapter.endpoint}/chef-of-the-week`);
    return response.data;
  }
}

export const chefAdapter = new ChefAdapter();