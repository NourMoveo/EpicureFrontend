import { Restaurant } from "@/Model/Interfaces";
import { apiService } from  "./apiServices";
class RestaurantController {
  static readonly endpoint = "/restaurants";
  async getAllRestaurants(): Promise<Restaurant[]> {
    const response = await apiService.get<Restaurant[]>(`${RestaurantController.endpoint}`);
    return response.data;
  }
  async getPopularRestaurants(): Promise<Restaurant[]> {
    const response = await apiService.get<Restaurant[]>(`${RestaurantController.endpoint}/popular`);
    return response.data;
  }
  async getNewRestaurants(): Promise<Restaurant[]> {
    const response = await apiService.get<Restaurant[]>(`${RestaurantController.endpoint}/new`);
    return response.data;
  }
  async getOpenNowRestaurants(): Promise<Restaurant[]> {
    const response = await apiService.get<Restaurant[]>(`${RestaurantController.endpoint}/open-now`);
    return response.data;
  }
  async groupRestaurantsByRating(): Promise<Restaurant[][]> {
    const response = await apiService.get<Restaurant[][]>(`${RestaurantController.endpoint}/group-by-rating`);
    return response.data;
  }
  async getRestaurantById(id: string): Promise<Restaurant | null> {
    try {
      const response = await apiService.get<Restaurant>(`${RestaurantController.endpoint}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching restaurant with ID ${id}:`, error);
      return null;
    }
  }
}

export const restaurantController = new RestaurantController();