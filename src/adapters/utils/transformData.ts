import { DBRestaurant } from "../DBModels/restaurantAdapter";
import { DBChef } from "../DBModels/chefAdapter";
import { DBDish } from "../DBModels/dishAdapter";

import { Cards , ChefsProps , ChefProps } from "../../models/Types";
import { apiService } from "../../services/apiServices";
import { VegetarianIcon , SpicyFoodIcon,VeganIcon } from '../../assets/Photos';


export const getFoodIcon = (flavorIcon: string): string | undefined => {
  switch (flavorIcon) {
    case "Spicy":
      return SpicyFoodIcon;
    case "Vegan":
      return VeganIcon;
    case "Vegetarian":
      return VegetarianIcon;
    default:
      return undefined;
  }
};
export const transformChefsData = async (data: DBChef[]): Promise<ChefsProps> => {
  try {
    const chefPromises = data.map(async (chef) => {
      const restaurants = await transformRestaurantsById(chef.restaurants);
      return {
        chefs: [{
          id:chef._id,
          fName: chef.fName,
          lName: chef.lName,
          image: chef.image,
          description: chef.description,
          restaurants: { cards: restaurants.cards },
        }],
      };
    });
    const transformedChefs: { chefs: ChefProps[] }[] = await Promise.all(chefPromises);
    const chefs: ChefProps[] = transformedChefs.map(transformedChef => transformedChef.chefs[0]);
    return { chefs };
  } catch (error) {
    console.error("Error transforming chef data:", error);
    return { chefs: [] };
  }
};

export const transformDishesData = (data:  DBDish[]): Promise<Cards> => {
  const cardPromises = data.map(async (dish) => {
    return {
      id: dish._id,
      title: dish.title,
      image: dish.image,
      description: dish.ingredients,
      foodIcon: getFoodIcon(dish.flavorIcon),
      price: dish.price,
      isSignature: dish.isSignature,
      type: dish.type,
      dishSides: dish.dishSides,
      changes: dish.changes,
    };
  });

  return Promise.all(cardPromises).then((cards) => ({ cards }));
};

export const transformRestaurantsData = (data: DBRestaurant[]): Promise<Cards> => {
  const cardPromises = data.map(async (restaurant) => {
    const dishes = await transformRestaurantDishesById(restaurant.dishes);
    const chef = await transformChefById(restaurant.chef);
    return {
      id:restaurant._id,
      title: restaurant.title,
      image: restaurant.image,
      description: chef.fName+" "+chef.lName,
      rating: restaurant.rating,
      open: restaurant.open,
      close: restaurant.close,
      maxPrice: restaurant.maxPrice,
      minPrice: restaurant.minPrice,
      distance: restaurant.distance,
      dishes:dishes,
    };
  });

  return Promise.all(cardPromises).then((cards) => ({ cards }));
};


const transformRestaurantDishesById = async (dishIds: string[]): Promise<Cards> => {
  try {
    const dishRequests = dishIds.map((dishId) => {
      return apiService.get<DBDish>(`/dishes/${dishId}`);
    });

    const dishResponses = await Promise.all(dishRequests);
    const dishesData: DBDish[] = dishResponses.map((response) => response.data);
    const transformedDishesData: Cards = await transformDishesData(dishesData);

    return transformedDishesData;
  } catch (error) {
    console.error("Error fetching dishes:", error);
    return { cards: [] };
  }
};


export const transformRestaurantsById = async (restaurantIds: string[] | undefined): Promise<Cards> => {
  try {
    if (!restaurantIds || restaurantIds.length === 0) {
      return { cards: [] };
    }

    const restaurantRequests = restaurantIds.map((restaurantId) => {
      return apiService.get<DBRestaurant>(`/restaurants/${restaurantId}`);
    });

    const restaurantResponses = await Promise.all(restaurantRequests);
    const restaurantsData: DBRestaurant[] = restaurantResponses.map((response) => response.data);
    const transformedRestaurantsData: Cards = await transformRestaurantsData(restaurantsData);
    return transformedRestaurantsData;
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    return { cards: [] };
  }
};


export const transformChefById = async (chefId: string): Promise<ChefProps> => {
  try {
    const chefRequest = await apiService.get<DBChef>(`/chefs/${chefId}`);
    const chefData: DBChef = chefRequest.data;
    const transformedChefsData: ChefsProps = await transformChefsData([chefData]);
    const chefProps: ChefProps = transformedChefsData.chefs[0];
    return Promise.resolve(chefProps);
  } catch (error) {
    console.error("Error fetching chef:", error);
    return Promise.resolve({
      fName: "",
      lName: "",
      image: "",
      description: "",
      restaurants: { cards: [] },
    });
  }
};

