import { apiService } from  "../../services/apiServices";

export interface DBRestaurant {
  _id: string;
  title: string;
  image: string;
  rating: number;
  open:Date;
  close:Date;
  maxPrice:Number;
  minPrice:Number;
  distance:Number;
  chef: string;
  dishes: string[];
}

class RestaurantAdapter {
  static readonly endpoint = "/restaurants";
  async getAllRestaurants(): Promise<DBRestaurant[]> {
    const response = await apiService.get<DBRestaurant[]>(`${RestaurantAdapter.endpoint}`);
    return response.data;
  }
  async getPopularRestaurants(): Promise<DBRestaurant[]> {
    const response = await apiService.get<DBRestaurant[]>(`${RestaurantAdapter.endpoint}/popular`);
    return response.data;
  }
  async getNewRestaurants(): Promise<DBRestaurant[]> {
    const response = await apiService.get<DBRestaurant[]>(`${RestaurantAdapter.endpoint}/new`);
    return response.data;
  }
  async getOpenNowRestaurants(): Promise<DBRestaurant[]> {
    const response = await apiService.get<DBRestaurant[]>(`${RestaurantAdapter.endpoint}/open-now`);
    return response.data;
  }
  async groupRestaurantsByRating(): Promise<DBRestaurant[][]> {
    const response = await apiService.get<DBRestaurant[][]>(`${RestaurantAdapter.endpoint}/group-by-rating`);
    return response.data;
  }
}

export const restaurantAdapter = new RestaurantAdapter();