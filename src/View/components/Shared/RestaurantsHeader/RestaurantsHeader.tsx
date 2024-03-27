import React, { useState, useEffect, useRef } from "react";
import "./RestaurantsHeader.scss";
import { DownArrow } from "@/View/Photos";
import { MultiRangeSlider, SingleDistanceSlider, RangeFilter } from "../..";
// import {minAllPrice, maxAllPrice } from "@/data/MockData/Restaurants";
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

const RestaurantsHeader = ({onButtonClick, onAdditionalButtonClick }) => {
  const [isPriceRangeOpen, setIsPriceRangeOpen] = useState(false);
  const [isDistanceOpen, setIsDistanceOpen] = useState(false);
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(buttonsData[0].name);
  const [activeAdditionalButton, setActiveAdditionalButton] = useState(null);
  const [lastClickedButton, setLastClickedButton] = useState(null);
  const popupsRef = useRef(null);
  const minAllPrice=100;
  const maxAllPrice =10;
  useEffect(() => {
    onButtonClick(activeButton);
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [activeButton]);

  useEffect(() => {
    if (!isPriceRangeOpen) {
      setActiveAdditionalButton(null);
    }
  }, [isPriceRangeOpen]);

  useEffect(() => {
    if (!isDistanceOpen) {
      setActiveAdditionalButton(null);
    }
  }, [isDistanceOpen]);

  useEffect(() => {
    if (!isRatingOpen) {
      setActiveAdditionalButton(null);
    }
  }, []);

  const handleClick = (buttonName) => {
    closePopups();
    const isMainButton = buttonsData.some((button) => button.name === buttonName);
    if (isMainButton) {
      setActiveButton(buttonName);
    }
    onButtonClick(buttonName);
    if (additionalButtonsData.some((button) => button.name === buttonName)) {
      setActiveAdditionalButton(buttonName);
      onAdditionalButtonClick(buttonName); // Call onAdditionalButtonClick when an additional button is clicked
    }
    // Add double click event listener to remove 'active' class and close popup
    if (buttonName === lastClickedButton) {
      togglePopupBasedOnButtonName(buttonName);
      setLastClickedButton(null); // Reset lastClickedButton after handling double click
    } else {
      setLastClickedButton(buttonName);
    }
  };

  const togglePopupBasedOnButtonName = (buttonName) => {
    if (buttonName === "PriceRange") {
      togglePopup(setIsPriceRangeOpen);
    } else if (buttonName === "Distance") {
      togglePopup(setIsDistanceOpen);
    } else if (buttonName === "Rating") {
      togglePopup(setIsRatingOpen);
    }
  };

  const togglePopup = (setter) => {
    setter((prevState) => !prevState);
  };

  const closePopups = () => {
    setIsPriceRangeOpen(false);
    setIsDistanceOpen(false);
    setIsRatingOpen(false);
    setActiveAdditionalButton(null);
  };

  const handleOutsideClick = (event) => {
    if (popupsRef.current && !popupsRef.current.contains(event.target)) {
      closePopups();
    }
  };

  const handleDoubleClick = (buttonName) => {
    setActiveAdditionalButton(null);
  };

  return (
    <div className="header-container">
      <div className="restaurants-header">
        {buttonsData.map(({ name, label }) => (
          <button
            key={name}
            className={activeButton === name ? "active" : name}
            onClick={() => handleClick(name)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="button-wrapper" ref={popupsRef}>
        {additionalButtonsData.map(({ name, label }) => (
          <button
            key={name}
            id={name} // added id to identify the button
            className={`additional-button ${activeAdditionalButton === name ? "active" : ""}`}
            onClick={() => handleClick(name)}
            onDoubleClick={() => handleDoubleClick(name)}
          >
            {label} <img src={DownArrow} alt="Down Arrow" className="arrow-icon" />
          </button>
        ))}
      </div>
      {isPriceRangeOpen && (
        <MultiRangeSlider
          min={12}
          max={357}
          onChange={({ min, max }) => {}}
          isOpen={isPriceRangeOpen}
          togglePopup={() => togglePopup(setIsPriceRangeOpen)}
        />
      )}
      {isDistanceOpen && (
        <SingleDistanceSlider
          currentLocation="Your Location"
          maxDistance={4}
          onChange={(value) => {}}
          isOpen={isDistanceOpen}
          togglePopup={() => togglePopup(setIsDistanceOpen)}
        />
      )}
      {isRatingOpen && <RangeFilter />}
    </div>
  );
};

export default RestaurantsHeader;
