import { Dish } from "@/Model/Interfaces";
import { apiService } from "./apiServices";
class DishController {
  static readonly endpoint = "/dishes";
 
  async getAllDishes(): Promise<Dish[]> {
    const response = await apiService.get<Dish[]>(`${DishController.endpoint}`);
    return response.data;
  }
  async getSignatureDishes(): Promise<Dish[]> {
    const response = await apiService.get<Dish[]>(`${DishController.endpoint}/signature`);
    return response.data;
  }
}

export const dishController = new DishController();