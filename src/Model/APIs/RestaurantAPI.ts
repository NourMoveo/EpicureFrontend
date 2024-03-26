import { Restaurant } from "@/Model/Interfaces";
import { genericAPI } from  "./GenericAPI";
class RestaurantAPI {
  static readonly endpoint = "/restaurants";
  async getAllRestaurants(): Promise<Restaurant[]> {
    const response = await genericAPI.get<Restaurant[]>(`${RestaurantAPI.endpoint}`);
    return response.data;
  }
  async getPopularRestaurants(): Promise<Restaurant[]> {
    const response = await genericAPI.get<Restaurant[]>(`${RestaurantAPI.endpoint}/popular`);
    return response.data;
  }
  async getNewRestaurants(): Promise<Restaurant[]> {
    const response = await genericAPI.get<Restaurant[]>(`${RestaurantAPI.endpoint}/new`);
    return response.data;
  }
  async getOpenNowRestaurants(): Promise<Restaurant[]> {
    const response = await genericAPI.get<Restaurant[]>(`${RestaurantAPI.endpoint}/open-now`);
    return response.data;
  }
  async groupRestaurantsByRating(): Promise<Restaurant[][]> {
    const response = await genericAPI.get<Restaurant[][]>(`${RestaurantAPI.endpoint}/group-by-rating`);
    return response.data;
  }
  async getRestaurantsByIds(ids: string[]): Promise<Restaurant[]> {
    try {
      const allRestaurantsResponse = await genericAPI.get<Restaurant[]>(RestaurantAPI.endpoint);
      const allRestaurants = allRestaurantsResponse.data;
  
      const filteredRestaurants = allRestaurants.filter(restaurant => ids.includes(restaurant._id));
  
      return filteredRestaurants;
    } catch (error) {
      console.error("Error fetching restaurants by IDs:", error);
      throw error;
    }
  }
  async getRestaurantById(id: string): Promise<Restaurant> {
    try {
      const response = await genericAPI.get<Restaurant>(`${RestaurantAPI.endpoint}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching restaurant by ID:", error);
      throw error;
    }
  }
}

export const restaurantAPI = new RestaurantAPI();