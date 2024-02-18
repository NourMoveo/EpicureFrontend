import { CustomCardsSection } from "@/components";
import { RestaurantsData } from "@/data";
import "./Restaurants.scss";
/*
 *responsible for rendering a section displaying popular restaurants within the Epicure application. 
 *It utilizes the "CustomCardsSection" component to present the restaurant data fetched from the "RestaurantsData" file.
*/
const Restaurants = () => {
  return (
    <div className="restaurants-container">
      <h2 className="restaurant-header">Popular Restaurants in Epicure:</h2>
      <CustomCardsSection cardsData={RestaurantsData} cardType={1} />
    </div>
  );
}

export default Restaurants;
