// // import { Cards,CardType,PagesType } from "../../models/Types";
// // import { claroRestau,FourStarsIcon,Lumina,TigerLilly ,ThreeStarsIcon } from "../../assets/Photos";
// // import DishesData from  "./Dishes";
// // const RestaurantsData: Cards = {
// //   cards: [
// //     {
// //       title: "Claro",
// //       image: claroRestau,
// //       description: "Ran Shmueli",
// //       rating:3,
// //       dishes:  DishesData,
// //       minPrice:65,
// //       maxPrice:98,
      
// //     }, {
// //       title: "Lumina",
// //       image: Lumina,
// //       description: "Meir Adoni",
// //       rating:2,
// //       dishes:  DishesData
// //       ,
// //       minPrice:65,
// //       maxPrice:98,
// //     }, {
// //       title: "Tiger Lilly",
// //       image: TigerLilly,
// //       description: "Yanir Green",
// //       rating:3,
// //       dishes:  DishesData,
// //       minPrice:65,
// //       maxPrice:98,
// //     }, {
// //       title: "Tiger Lilly",
// //       image: TigerLilly,
// //       description: "Yanir Green",
// //       rating:4,
// //       dishes:  DishesData,
// //       minPrice:65,
// //       maxPrice:98,
// //     }, {
// //       title: "Tiger Lilly",
// //       image: TigerLilly,
// //       description: "Yanir Green",
// //       rating:5,
// //       dishes:  DishesData,
// //       minPrice:65,
// //       maxPrice:98,
// //     },{
// //       title: "Claro",
// //       image: claroRestau,
// //       description: "Ran Shmueli",
// //       rating:4,
// //       dishes:  DishesData,
// //       minPrice:65,
// //       maxPrice:98,
// //     }, {
// //       title: "Lumina",
// //       image: Lumina,
// //       description: "Meir Adoni",
// //       rating:5,
// //       dishes:  DishesData,
// //       minPrice:65,
// //       maxPrice:98,
// //     }, {
// //       title: "Tiger Lilly",
// //       image: TigerLilly,
// //       description: "Yanir Green",
// //       rating:4,
// //       dishes:  DishesData,
// //       minPrice:65,
// //       maxPrice:98,
// //     }, {
// //       title: "Tiger Lilly",
// //       image: TigerLilly,
// //       description: "Yanir Green",
// //       rating:1,
// //       dishes:  DishesData,
// //       minPrice:65,
// //       maxPrice:98,
// //     }, {
// //       title: "Tiger Lilly",
// //       image: TigerLilly,
// //       description: "Yanir Green",
// //       rating:1,
// //       dishes:  DishesData,
// //       minPrice:65,
// //       maxPrice:98,
// //     },],
// // };

// // export default RestaurantsData;
// import { Cards, CardProps } from "../../models/Types";
// import { allRestaurants, newRestaurants, openNowRestaurants, popularRestaurants } from "../dataFetcher/dataFetcher";

// // Assuming `Cards` contains an array of `CardProps`
// const RestaurantsData: Cards = allRestaurants;

// function getMinMaxPrice(restaurants: Cards): { minAllPrice: Number, maxAllPrice: Number } {
//     let minAllPrice: Number = Infinity;
//     let maxAllPrice:Number = -Infinity;

//     for (const restaurant of restaurants.cards) {
//         // Check if the restaurant has a price
//         if (restaurant.minPrice !== undefined && restaurant.maxPrice !== undefined) {
//             if (restaurant.minPrice < minAllPrice) {
//                 minAllPrice = restaurant.minPrice;
//             }
//             if (restaurant.maxPrice > maxAllPrice) {
//                 maxAllPrice = restaurant.maxPrice;
//             }
//         }
//     }

//     // If no price information found, set default values
//     if (minAllPrice === Infinity) {
//         minAllPrice = 0;
//     }
//     if (maxAllPrice === -Infinity) {
//         maxAllPrice = 0;
//     }

//     return { minAllPrice, maxAllPrice };
// }

// const { minAllPrice, maxAllPrice } = getMinMaxPrice(RestaurantsData);


// function groupRestaurantsByRating(restaurants: Cards): Cards[] {
//     const RestaurantRatingGroup: Cards[] = [];

//     for (const restaurant of restaurants.cards) {
//         // Check if restaurant has a rating
//         if (restaurant.rating !== undefined) {
//             // Check if a rating group for this rating doesn't exist
//             if (!RestaurantRatingGroup[restaurant.rating]) {
//                 // Initialize an empty array of cards for this rating group
//                 const emptyCards: Cards = { cards: [] };
//                 RestaurantRatingGroup[restaurant.rating] = emptyCards;
//             }

//             // Push the restaurant to its corresponding rating group
//             RestaurantRatingGroup[restaurant.rating].cards.push(restaurant);
//         }
//     }

//     return RestaurantRatingGroup;
// }

// function filterRestaurantsByPriceRange(minimum: Number, maximum: Number, restaurants: Cards): Cards {
//     const filteredRestaurants: CardProps[] = [];

//     for (const restaurant of restaurants.cards) {
//         // Check if the restaurant has price information
//         if (restaurant.minPrice !== undefined && restaurant.maxPrice !== undefined) {
//             // Check if the restaurant's minimum price is greater than the received minimum or if the maximum price is less than the received maximum
//             if (restaurant.minPrice > minimum || restaurant.maxPrice < maximum) {
//                 filteredRestaurants.push(restaurant);
//             }
//         }
//     }

//     return { cards: filteredRestaurants };
// }

// const AllRestaurantsGroupedByRating: Cards[] = groupRestaurantsByRating(RestaurantsData);
// const NewRestaurantsGroupedByRating: Cards[] = groupRestaurantsByRating(newRestaurants);
// const OpenNowRestaurantsGroupedByRating: Cards[] = groupRestaurantsByRating(openNowRestaurants);
// const PopularRestaurantsGroupedByRating: Cards[] = groupRestaurantsByRating(popularRestaurants);

// export {
//     AllRestaurantsGroupedByRating,NewRestaurantsGroupedByRating,OpenNowRestaurantsGroupedByRating, PopularRestaurantsGroupedByRating,filterRestaurantsByPriceRange,minAllPrice, maxAllPrice

// }






// export default RestaurantsData;


