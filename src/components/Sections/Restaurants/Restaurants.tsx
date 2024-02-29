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
      <div className="restaurant-header-txt">Popular Restaurants in Epicure:</div>
      <CustomCardsSection cardsData={RestaurantsData} cardType={1} pageType={1} layoutDirection='horizontal'/>
    </div>
    
  );
}

export default Restaurants;
