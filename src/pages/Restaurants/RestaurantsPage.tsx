import React from "react";
import { CustomCardsSection, Navbar, Footer, RestaurantsHeader } from "../../components";
import { RestaurantsData } from "../../data";
import "./RestaurantsPage.scss"; // Import SCSS file

const Restaurants = () => {
  return (
    <>
      <h2 className="restaurant-header">Restaurants</h2>
      <RestaurantsHeader />
      <CustomCardsSection cardsData={RestaurantsData} cardType={1} pageType={2} layoutDirection="vertical"/>
    </>
  );
};

export default Restaurants;
