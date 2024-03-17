import { apiService } from "../../services/apiServices";

export interface DBDish {
  _id: string;
  title: string;
  image: string;
  ingredients: string;
  flavorIcon: string;
  price: number;
  restaurant: string;
  isSignature:boolean;
  type:string;
  dishSides: string[];
  changes: string[];
}

class DishAdapter {
  static readonly endpoint = "/dishes";

  async getAllDishes(): Promise<DBDish[]> {
    const response = await apiService.get<DBDish[]>(`${DishAdapter.endpoint}`);
    return response.data;
  }
  async getSignatureDishes(): Promise<DBDish[]> {
    const response = await apiService.get<DBDish[]>(`${DishAdapter.endpoint}/signature`);
    return response.data;
  }
}

export const dishAdapter = new DishAdapter();