// import { Cards,CardType,PagesType } from "../../models/Types";
// import { claroRestau,FourStarsIcon,Lumina,TigerLilly ,ThreeStarsIcon } from "../../assets/Photos";
// import DishesData from  "./Dishes";
// const RestaurantsData: Cards = {
//   cards: [
//     {
//       title: "Claro",
//       image: claroRestau,
//       description: "Ran Shmueli",
//       rating:3,
//       dishes:  DishesData,
//       minPrice:65,
//       maxPrice:98,
      
//     }, {
//       title: "Lumina",
//       image: Lumina,
//       description: "Meir Adoni",
//       rating:2,
//       dishes:  DishesData
//       ,
//       minPrice:65,
//       maxPrice:98,
//     }, {
//       title: "Tiger Lilly",
//       image: TigerLilly,
//       description: "Yanir Green",
//       rating:3,
//       dishes:  DishesData,
//       minPrice:65,
//       maxPrice:98,
//     }, {
//       title: "Tiger Lilly",
//       image: TigerLilly,
//       description: "Yanir Green",
//       rating:4,
//       dishes:  DishesData,
//       minPrice:65,
//       maxPrice:98,
//     }, {
//       title: "Tiger Lilly",
//       image: TigerLilly,
//       description: "Yanir Green",
//       rating:5,
//       dishes:  DishesData,
//       minPrice:65,
//       maxPrice:98,
//     },{
//       title: "Claro",
//       image: claroRestau,
//       description: "Ran Shmueli",
//       rating:4,
//       dishes:  DishesData,
//       minPrice:65,
//       maxPrice:98,
//     }, {
//       title: "Lumina",
//       image: Lumina,
//       description: "Meir Adoni",
//       rating:5,
//       dishes:  DishesData,
//       minPrice:65,
//       maxPrice:98,
//     }, {
//       title: "Tiger Lilly",
//       image: TigerLilly,
//       description: "Yanir Green",
//       rating:4,
//       dishes:  DishesData,
//       minPrice:65,
//       maxPrice:98,
//     }, {
//       title: "Tiger Lilly",
//       image: TigerLilly,
//       description: "Yanir Green",
//       rating:1,
//       dishes:  DishesData,
//       minPrice:65,
//       maxPrice:98,
//     }, {
//       title: "Tiger Lilly",
//       image: TigerLilly,
//       description: "Yanir Green",
//       rating:1,
//       dishes:  DishesData,
//       minPrice:65,
//       maxPrice:98,
//     },],
// };

// export default RestaurantsData;
import { Cards } from "../../models/Types";
import { allRestaurants, newRestaurants, openNowRestaurants, popularRestaurants } from "../dataFetcher/dataFetcher";

// Assuming `Cards` contains an array of `CardProps`
const RestaurantsData: Cards = allRestaurants;

function groupRestaurantsByRating(restaurants: Cards): Cards[] {
    const RestaurantRatingGroup: Cards[] = [];

    for (const restaurant of restaurants.cards) {
        // Check if restaurant has a rating
        if (restaurant.rating !== undefined) {
            // Check if a rating group for this rating doesn't exist
            if (!RestaurantRatingGroup[restaurant.rating]) {
                // Initialize an empty array of cards for this rating group
                const emptyCards: Cards = { cards: [] };
                RestaurantRatingGroup[restaurant.rating] = emptyCards;
            }

            // Push the restaurant to its corresponding rating group
            RestaurantRatingGroup[restaurant.rating].cards.push(restaurant);
        }
    }

    return RestaurantRatingGroup;
}

const AllRestaurantsGroupedByRating: Cards[] = groupRestaurantsByRating(RestaurantsData);
const NewRestaurantsGroupedByRating: Cards[] = groupRestaurantsByRating(newRestaurants);
const OpenNowRestaurantsGroupedByRating: Cards[] = groupRestaurantsByRating(openNowRestaurants);
const PopularRestaurantsGroupedByRating: Cards[] = groupRestaurantsByRating(popularRestaurants);

export {
    AllRestaurantsGroupedByRating,NewRestaurantsGroupedByRating,OpenNowRestaurantsGroupedByRating, PopularRestaurantsGroupedByRating

}






export default RestaurantsData;


