import React ,{ useState }from "react";
import { useParams } from "react-router-dom";
import { CardProps, Cards } from "@/models/Types";
import {allDishes} from "@/data/dataFetcher/dataFetcher";
import "./dishOrderPopup.scss";
import { CustomCardsSection } from "@/components";
const dishOrderPopup = () => {
    const { title = "" } = useParams<{ title?: string }>();

    // Find the restaurant with the given title
    const dish: CardProps | undefined = allDishes.cards.find(
      (r: CardProps) => r.title === decodeURIComponent(title)
    );
    const quantity=0;
  return (
    <div className="dish-order-popup">
      <div className="dish-img">
        <img src="" alt="" />
      </div>
      <div className="dish-details">
        <div className="dish-title"></div>
        <div className="dish-description"></div>
        <div className="dish-icon"></div>
        <div className="dish-price">
          <div className="line"></div>
          <div className="value-logo-container">
            <img src="" alt="ILS" className="ils-icon" />
            {/*price &&*/ <span className="price-value"> </span>}
          </div>
          <div className="line"></div>
        </div>
      </div>
      <div className="dish-side">
        <div className="side-title">Choose a side</div>
        <div className="side-choices">
          <input type="checkbox" 
          className="side-checkbox"/>
        </div>
      </div>
      <div className="dish-changes">
        <div className="changes-title">Changes</div>
        <div className="side-choices">
          <input type="checkbox" className="changes-checkbox"/>
        </div>
      </div>
      <div className="dish-quantity">
        <button className="reduce">
            -
        </button>
        <div className="quantity">
            {quantity}
        </div>
        <button className="reduce">
            +
        </button>
      </div>
      <button className="add-to-bag">ADD TO BAG</button>
    </div>
  );
};

export default dishOrderPopup;
