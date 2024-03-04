import React, { useState } from "react";
import "./RestaurantsHeader.scss";
import { DownArrow } from "../../../assets/homePhotos";
import { MultiRangeSlider, SingleDistanceSlider, RangeFilter } from "../../../components";

const buttonsData = [
  { name: "All", label: "All" },
  { name: "New", label: "New" },
  { name: "MostPopular", label: "Most Popular" },
  { name: "OpenNow", label: "Open Now" },
  { name: "MapView", label: "Map View" },
];

const additionalButtonsData = [
  { name: "PriceRange", label: "Price Range" },
  { name: "Distance", label: "Distance" },
  { name: "Rating", label: "Rating" },
];

const RestaurantsHeader = () => {
  const [isPriceRangeOpen, setIsPriceRangeOpen] = useState(false);
  const [isDistanceOpen, setIsDistanceOpen] = useState(false);
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("All"); // Set "All" as default
  const [activeAdditionalButton, setActiveAdditionalButton] = useState("");

  const handleClick = (buttonName: string) => {
    // Close all popups if the same button is clicked twice
    if (activeButton === buttonName || activeAdditionalButton === buttonName) {
      closePopups();
      setActiveButton("");
      setActiveAdditionalButton("");
      return;
    }

    // Close all popups
    closePopups();

    if (additionalButtonsData.some(button => button.name === buttonName)) {
      setActiveAdditionalButton(buttonName);
    } else {
      setActiveButton(buttonName);
    }

    if (buttonName === "PriceRange") {
      togglePopup(setIsPriceRangeOpen);
    } else if (buttonName === "Distance") {
      togglePopup(setIsDistanceOpen);
    } else if (buttonName === "Rating") {
      togglePopup(setIsRatingOpen);
    }
  };

  const togglePopup = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setter(prevState => !prevState);
  };

  const closePopups = () => {
    setIsPriceRangeOpen(false);
    setIsDistanceOpen(false);
    setIsRatingOpen(false);
  };

  return (
    <div className="header-container">
      <div className="restaurants-header">
        {buttonsData.map(({ name, label }) => (
          <button
            key={name}
            className={activeButton === name ? "active" : ""}
            onClick={() => handleClick(name)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="button-wrapper">
        {additionalButtonsData.map(({ name, label }) => (
          <button
            key={name}
            className={activeAdditionalButton === name ? "active additional-button" : "additional-button"}
            onClick={() => handleClick(name)}
          >
            {label} <img src={DownArrow} alt="Down Arrow" className="arrow-icon" />
          </button>
        ))}
      </div>
      {isPriceRangeOpen && (
        <MultiRangeSlider
          min={12}
          max={357}
          onChange={({ min, max }: { min: number; max: number }) => {}}
          isOpen={isPriceRangeOpen}
          togglePopup={() => togglePopup(setIsPriceRangeOpen)}
        />
      )}
      {isDistanceOpen && (
        <SingleDistanceSlider
          currentLocation="Your Location"
          maxDistance={4}
          onChange={(value: number) => {}}
          isOpen={isDistanceOpen}
          togglePopup={() => togglePopup(setIsDistanceOpen)}
        />
      )}
      {isRatingOpen && (
        <RangeFilter/>
      )}
    </div>
  );
};

export default RestaurantsHeader;
