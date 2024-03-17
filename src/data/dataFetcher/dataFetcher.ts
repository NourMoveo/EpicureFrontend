import { DBRestaurant } from "../../adapters/DBModels/restaurantAdapter";
import { DBChef } from "../../adapters/DBModels/chefAdapter";
import { DBDish } from "../../adapters/DBModels/dishAdapter";
import { apiService } from "../../services/apiServices";
import { transformRestaurantsData, transformChefsData, transformDishesData,} from "../../adapters/utils/transformData";
import { Cards, ChefsProps } from "../../models/Types";
import { AxiosResponse } from "axios";

type TransformFunction<T, U> = (data: T[]) => Promise<U>;

export const fetchAllData = async <T, U>(
  endpoint: string,
  transformFunction: TransformFunction<T, U>
): Promise<U> => {
  try {
    const response: AxiosResponse<T[]> = await apiService.get<T[]>(endpoint);
    const data: T[] = response.data;
    return transformFunction(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};



