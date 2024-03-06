import './Dishes.scss';
import { CustomCardsSection } from "@/components";
import {DishesData} from "@/data";

/*
*This file implements a component called "Dishes" that renders a section displaying the signature dishes of Epicure.
*It utilizes a custom card section to present the dish data fetched from the "DishesData" file.
*/
const Dishes = () => {
  return (
    <div className="dishes-container">
      <h2 className="dishes-header">Signature Dishs Of:</h2>
      <CustomCardsSection cardsData={DishesData} cardType={2} pageType={1} layoutDirection='horizontal'/>
    </div>
  )
}

export default Dishes