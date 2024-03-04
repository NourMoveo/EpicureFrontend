import { useState } from "react";
import "./RestaurantsHeader.scss";
import { DownArrow, ILSLogo } from "../../../assets/homePhotos";
import { MultiRangeSlider, SingleDistanceSlider } from "../../../components";


const buttonsData = [
  { name: "All", label: "All" },
  { name: "New", label: "New" },
  { name: "MostPopular", label: "Most Popular" },
  { name: "OpenNow", label: "Open Now" },
  { name: "MapView", label: "Map View" },
  // Add more button data as needed
];

const additionalButtonsData = [
  { name: "PriceRange", label: "Price Range" },
  { name: "Distance", label: "Distance" },
  { name: "Rating", label: "Rating" },
  // Add more additional button data as needed
];

const RestaurantsHeader = () => {
  const [isPriceRangeOpen, setIsPriceRangeOpen] = useState(false);
  const [isDistanceOpen, setIsDistanceOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("All");

  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName);
    if (buttonName === "PriceRange") {
      togglePopup(setIsPriceRangeOpen);
    } else if (buttonName === "Distance") {
      togglePopup(setIsDistanceOpen);
    } else {
      closePopups();
    }
  };

  const togglePopup = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setter(prevState => !prevState);
  };

  const closePopups = () => {
    setIsPriceRangeOpen(false);
    setIsDistanceOpen(false);
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
            className="additional-button"
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
          onChange={({ min, max }: { min: number; max: number }) => {
            // Implement onChange functionality if needed
          }}
          isOpen={isPriceRangeOpen}
          togglePopup={() => togglePopup(setIsPriceRangeOpen)}
        />
      )}
      {isDistanceOpen && (
        <SingleDistanceSlider
          currentLocation="Your Location"
          maxDistance={4} // Example max distance value
          onChange={(value: number) => {
            // Implement onChange functionality if needed
          }}
          isOpen={isDistanceOpen}
          togglePopup={() => togglePopup(setIsDistanceOpen)}
        />
      )}
    </div>
  );
};

export default RestaurantsHeader;
