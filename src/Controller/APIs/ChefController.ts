import { apiService } from "./apiServices";
import { Chef } from "@/Model/Interfaces";
class ChefController {
  static readonly endpoint = "/chefs";
  async getAllChefs(): Promise<Chef[]> {
    const response = await apiService.get<Chef[]>(`${ChefController.endpoint}`);
    return response.data;
  }
  async getNewChefs(): Promise<Chef[]> {
    const response = await apiService.get<Chef[]>(`${ChefController.endpoint}/new`);
    return response.data;
  }
  async getMostViewedChefs(): Promise<Chef[]> {
    const response = await apiService.get<Chef[]>(`${ChefController.endpoint}/most-viewed`);
    return response.data;
  }
  async getChefOfTheWeek(): Promise<Chef> {
    const response = await apiService.get<Chef>(`${ChefController.endpoint}/chef-of-the-week`);
    
    return response.data;
  }
}

export const chefController = new ChefController();