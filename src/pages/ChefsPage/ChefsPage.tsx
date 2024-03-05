import React, { useState } from "react";
import "./ChefsPage.scss";
import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ChefCard, SwiperConfig } from '@/components';
import ChefsData from '@/data/Chefs';
import { ChefProps } from "@/models/Types";

const menuButtons = [
  { name: "All", label: "All" },
  { name: "New", label: "New" },
  { name: "MostPopular", label: "Most Viewed" },
];

const ChefsPage = () => {
  const [activeButton, setActiveButton] = useState("All"); // Set "All" as default

  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName === activeButton ? "" : buttonName);
  };

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
            {ChefsData.chefs.map((chef: ChefProps) => (
              <SwiperSlide className='swiper-slide' key={chef.fName}>
                <div>
                  <ChefCard chef={chef} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Fade>
      </div>

    </div>

  );
};

export default ChefsPage;
