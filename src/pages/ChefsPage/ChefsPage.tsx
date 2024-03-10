import React, { useState } from "react";
import "./ChefsPage.scss";
import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ChefCard, SwiperConfig } from '@/components';
import { ChefProps } from "@/models/Types";
import { newChefs, mostViewedChefs } from "@/data/dataFetcher/dataFetcher";

const menuButtons = [
  { name: "All", label: "All" },
  { name: "New", label: "New" },
  { name: "Most Viewed", label: "Most Viewed" },
];

const ChefsPage = () => {
  const [activeButton, setActiveButton] = useState("All");

  const handleClick = (buttonName: string) => {
    if (buttonName !== activeButton) {
      setActiveButton(buttonName);
    }
  };
  
  const getChefsByButton = (buttonName: string): ChefProps[] => {
    switch (buttonName) {
      case "New":
        return newChefs.chefs;
      case "Most Viewed":
        return mostViewedChefs.chefs;
      default:
        // Default case returns all chefs
        return [...newChefs.chefs, ...mostViewedChefs.chefs];
    }
  };

  const chefsToShow = getChefsByButton(activeButton);

  return (
    <div className="chefs-page">
      <h2 className="chefs-title">Chefs</h2>
      <div className="header-container">
        <div className="chefs-header">
          {menuButtons.map(({ name, label }) => {
            return (
              <button
                key={name}
                className={`menu-button ${activeButton === name ? "active" : ""}`}
                onClick={() => handleClick(name)}>
                {label}
              </button>
            );
          })}
        </div>
      </div>
      <div className="chefs-card">
        <Fade>
          <Swiper className='swiper' {...SwiperConfig("vertical")}>
            {chefsToShow.map((chef: ChefProps) => (
              <SwiperSlide className='swiper-slide' key={chef.fName}>
                <div>
                  <ChefCard chef={chef} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Fade>
        <div className="desktop-section">
          {chefsToShow.map((chef: ChefProps) => (
            <div key={chef.fName}>
              <ChefCard chef={chef} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefsPage;
