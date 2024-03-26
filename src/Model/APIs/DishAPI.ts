import { Dish } from "@/Model/Interfaces";
import { genericAPI } from "./GenericAPI";

class DishAPI {
  static readonly endpoint = "/dishes";

  async getAllDishes(): Promise<Dish[]> {
    const response = await genericAPI.get<Dish[]>(`${DishAPI.endpoint}`);
    return response.data;
  }

  async getSignatureDishes(): Promise<Dish[]> {
    const response = await genericAPI.get<Dish[]>(`${DishAPI.endpoint}/signature`);
    return response.data;
  }

  async getDishesByIds(ids: string[]): Promise<Dish[]> {
    try {
      const allDishesResponse = await genericAPI.get<Dish[]>(DishAPI.endpoint);
      const allDishes = allDishesResponse.data;
  
      const filteredDishes = allDishes.filter(dish => ids.includes(dish._id));
  
      return filteredDishes;
    } catch (error) {
      console.error("Error fetching dishes by IDs:", error);
      throw error;
    }
  }
}

export const dishAPI = new DishAPI();
