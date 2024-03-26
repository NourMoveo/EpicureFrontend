import { chefAPI } from "@/Model/APIs/ChefAPI";
import { dishAPI } from "@/Model/APIs/DishAPI";
import { restaurantAPI } from "@/Model/APIs/RestaurantAPI";
import { Chef, Dish, Restaurant, dataTypes} from "@/Model/Interfaces";
import { VegetarianIcon, SpicyFoodIcon, VeganIcon } from "@/View/Photos";

export const getFlavorIcon = (flavorIcon: string): string | undefined => {
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

export const setData = async (dataT: dataTypes): Promise<dataTypes> => {

  if (dataT.interfaceType === "r") {
    const restaurants = dataT.data as Restaurant[];
    return {
      interfaceType: "r",
      data: await Promise.all(restaurants.map(async (r: Restaurant) => ({
        ...r,
        chef: (await setChefsData([r.chef]))[0],
        dishes: await setDishesData(r.dishes)
      })))
    };
  } else if (dataT.interfaceType === "d") {
    const dishes = dataT.data as Dish[];
    console.log("dishes before :", dishes);
    return {
      interfaceType: "d",
      data: await Promise.all(dishes.map(async (d: Dish) => ({
        ...d,
        restaurant:await setRestaurantData(d.restaurant),
      })))
    };
  } else if (dataT.interfaceType === "c") {
    const chefs = dataT.data as Chef[]; 
    console.log("hhhhh:" , await setRestaurantsData(chefs[0].restaurant))
    return {
      interfaceType: "c",
      data: await Promise.all(chefs.map(async (c: Chef) => ({
        ...c,

        restaurant: await setChefsRestaurant(await setRestaurantsData(c.restaurant))
      })))
    };
  }
  return { interfaceType: dataT.interfaceType, data: [] };
};


export const setChefsData = async (chefsData: (string | Chef)[]): Promise<Chef[]> => {
  if (Array.isArray(chefsData)) {
    console.log("chef",chefsData)
    const chefsIds = chefsData.map(chef => typeof chef === 'string' ? chef : chef._id);
    const chefs = await chefAPI.getChefsByIds(chefsIds);
    return chefs;
  } else {
    return chefsData as Chef[];
  }
};

export const setDishesData = async (dishesData: (string | Dish)[]): Promise<Dish[]> => {
  if (Array.isArray(dishesData)) {
    const dishIds = dishesData.map(dish => typeof dish === 'string' ? dish : dish._id);
    const dishes = await dishAPI.getDishesByIds(dishIds);
    return dishes;
  } else {
    return dishesData as Dish[];
  }
};

export const setRestaurantsData = async (restaurantsData: (string | Restaurant)[]): Promise<Restaurant[]> => {
  if (Array.isArray(restaurantsData)) {
    const restaurantIds = restaurantsData.map(restaurant => typeof restaurant === 'string' ? restaurant : restaurant._id);
    const restaurants = await restaurantAPI.getRestaurantsByIds(restaurantIds);
    return restaurants;
  } else {
    return restaurantsData as Restaurant[];
  }
};
export const setRestaurantData = async (restaurantData: string | Restaurant): Promise<Restaurant> => {
  console.log("restaurantData :",restaurantData);
  if (typeof restaurantData === 'string') {
    console.log("restaurantData ",restaurantData);
    const restaurant = await restaurantAPI.getRestaurantById(restaurantData);
    console.log("resssstu ,  ", restaurant);
    return restaurant;
  } else {
    return restaurantData as Restaurant;
  }
};

export const setChefsRestaurant = async (restaurants:Restaurant[]): Promise<Restaurant[]> => {
  const updatedRestaurants: Restaurant[] = await Promise.all(restaurants.map(async (r: Restaurant) => {
    console.log(r.chef)
    const chef = await setChefsData([r.chef]);
    console.log(chef)
    const dishes = await setDishesData(r.dishes);
    return {
      ...r,
      chef: chef[0],
      dishes: dishes
    };
  }));

  return updatedRestaurants;
};