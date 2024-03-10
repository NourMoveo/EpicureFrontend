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



export const allRestaurants: Cards = await fetchAllData<DBRestaurant, Cards>("/restaurants", transformRestaurantsData);
export const popularRestaurants: Cards = await fetchAllData<DBRestaurant, Cards>("/restaurants/popular", transformRestaurantsData);
export const newRestaurants: Cards = await fetchAllData<DBRestaurant, Cards>("/restaurants/new", transformRestaurantsData);
export const openNowRestaurants: Cards = await fetchAllData<DBRestaurant, Cards>("/restaurants/open-now", transformRestaurantsData);

export const allChefs: ChefsProps = await fetchAllData<DBChef, ChefsProps>("/chefs", transformChefsData);

export const chefOfTheWeek: ChefsProps = await fetchAllData<DBChef, ChefsProps>("/chefs/chef-of-the-week", transformChefsData);
export const mostViewedChefs: ChefsProps = await fetchAllData<DBChef, ChefsProps>("/chefs/most-viewed", transformChefsData);
export const newChefs: ChefsProps = await fetchAllData<DBChef, ChefsProps>("/chefs/new", transformChefsData);

export const allDishes: Cards = await fetchAllData<DBDish, Cards>("/dishes", transformDishesData);
export const SignatureDishes: Cards = await fetchAllData<DBDish, Cards>("/dishes/signature", transformDishesData);
