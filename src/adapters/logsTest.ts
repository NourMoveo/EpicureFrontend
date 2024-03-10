// Import your adapters
import { chefAdapter } from './DBModels/chefAdapter';
import { dishAdapter } from './DBModels/dishAdapter';
import { restaurantAdapter } from './DBModels/restaurantAdapter';

// Function to fetch and log all chefs
const logAllChefs = async () => {
  try {
    const chefs = await chefAdapter.getAllChefs();
    console.log('All chefs:', chefs);
  } catch (error) {
    console.error('Error fetching chefs:', error);
  }
};

// Function to fetch and log all dishes
const logAllDishes = async () => {
  try {
    const dishes = await dishAdapter.getAllDishes();
    console.log('All dishes:', dishes);
  } catch (error) {
    console.error('Error fetching dishes:', error);
  }
};

// Function to fetch and log all restaurants
const logAllRestaurants = async () => {
  try {
    const restaurants = await restaurantAdapter.getAllRestaurants();
    console.log('All restaurants:', restaurants);
  } catch (error) {
    console.error('Error fetching restaurants:', error);
  }
};

// Call the functions to log all chefs, dishes, and restaurants
logAllChefs();
logAllDishes();
logAllRestaurants();
