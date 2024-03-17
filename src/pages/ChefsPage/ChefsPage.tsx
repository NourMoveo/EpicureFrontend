import "./ChefsPage.scss";
import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ChefCard, SwiperConfig } from '@/components';
import { ChefProps } from "@/models/Types";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store/store";
import { fetchChefsPageData } from "../../redux/thunk/chefsPageThunk";
import { LoadingGif } from "@/assets/Photos";

const menuButtons = [
  { name: "All", label: "All" },
  { name: "New", label: "New" },
  { name: "Most Viewed", label: "Most Viewed" },
];

const ChefsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(true);
  const [activeButton, setActiveButton] = useState("All");

  const handleClick = (buttonName: string) => {
    if (buttonName !== activeButton) {
      setActiveButton(buttonName);
    }
  };

  useEffect(() => {
    dispatch(fetchChefsPageData())
      .then(() => setIsLoading(false))
      .catch((error) => {
        console.error("Error fetching chef page data:", error);
        setIsLoading(false);
      });
  }, [dispatch]);

  const { newChefs, mostViewedChefs, allChefs } = useSelector(
    (state: RootState) => state.chefsPage
  );

  const getChefsByButton = (buttonName: string): ChefProps[] => {
    switch (buttonName) {
      case "New":
        return newChefs.chefs;
      case "Most Viewed":
        return mostViewedChefs.chefs;
      case "All":
        return allChefs.chefs;
      default:
        return [];
    }
  };

  const chefsToShow = getChefsByButton(activeButton);

  return (
    <div className="chefs-page">
      <h2 className="chefs-title">Chefs</h2>
      <div className="header-container">
        <div className="chefs-header">
          {menuButtons.map(({ name, label }) => (
            <button
              key={name}
              className={`menu-button ${activeButton === name ? "active" : ""}`}
              onClick={() => handleClick(name)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      {isLoading ? (
        <div className="loading-spinner">
          <img className="loading" src={LoadingGif} alt="Loading..." />
        </div>
      ) : (
        <div className="chefs-card">
          <Fade>
            <Swiper className="swiper" {...SwiperConfig("vertical")}>
              {chefsToShow.map((chef: ChefProps) => (
                <SwiperSlide className="swiper-slide" key={chef.fName}>
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
      )}
    </div>
  );
};

export default ChefsPage;
