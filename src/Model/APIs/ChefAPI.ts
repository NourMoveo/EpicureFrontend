import { genericAPI } from "./GenericAPI";
import { Chef } from "@/Model/Interfaces";

class ChefAPI {
  static readonly endpoint = "/chefs";

  async getAllChefs(): Promise<Chef[]> {
    const response = await genericAPI.get<Chef[]>(`${ChefAPI.endpoint}`);
    return response.data;
  }

  async getNewChefs(): Promise<Chef[]> {
    const response = await genericAPI.get<Chef[]>(`${ChefAPI.endpoint}/new`);
    return response.data;
  }

  async getMostViewedChefs(): Promise<Chef[]> {
    const response = await genericAPI.get<Chef[]>(`${ChefAPI.endpoint}/most-viewed`);
    return response.data;
  }

  async getChefOfTheWeek(): Promise<Chef> {
    const response = await genericAPI.get<Chef>(`${ChefAPI.endpoint}/chef-of-the-week`);
    return response.data;
  }

  async getChefsByIds(ids: string[]): Promise<Chef[]> {
    try {
      const allChefsResponse = await genericAPI.get<Chef[]>(ChefAPI.endpoint);
      const allChefs = allChefsResponse.data;
  
      const filteredChefs = allChefs.filter(chef => ids.includes(chef._id));
  
      return filteredChefs;
    } catch (error) {
      console.error("Error fetching chefs by IDs:", error);
      throw error;
    }
  }
  
  
}

export const chefAPI = new ChefAPI();
