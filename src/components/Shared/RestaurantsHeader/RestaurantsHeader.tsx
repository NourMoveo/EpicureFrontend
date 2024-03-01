import { useState } from "react";
import "./RestaurantsHeader.scss";
import { DownArrow, ILSLogo } from "../../../assets/homePhotos";
import { MultiRangeSlider } from "../../../components";

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
  const [activeButton, setActiveButton] = useState("All"); // State to track active button
  const [showRangeSlider, setShowRangeSlider] = useState(false); // State to control popup visibility
  const [min, setMin] = useState(0); // State to track minimum value of range slider
  const [max, setMax] = useState(1000); // State to track maximum value of range slider

  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName); // Update active button on click
    if (buttonName === "PriceRange") {
      // Toggle the showRangeSlider state
      setShowRangeSlider(prevState => !prevState);
    }
  };

  const closeRangeSlider = () => {
    setShowRangeSlider(false); // Close RangeSlider popup
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
      {/* Popup container */}
      {showRangeSlider && (
        <div className="popup-container" onClick={closeRangeSlider}>
           <div className="popup-title">Price Range Selected</div>
           <div className="range-display">
                {min} <img src={ILSLogo} alt="ILS Icon" /> - {max} <img src={ILSLogo} alt="ILS Icon" />
            </div>
            <MultiRangeSlider
              min={0}
              max={1000}
              onChange={({ min, max }: { min: number; max: number }) => {
                setMin(min);
                setMax(max);
              }}
            />
          </div>
      )}
    </div>
  );
};

export default RestaurantsHeader;
