import React, { useState, useEffect } from "react";
import {
  HamburMenu,
  LogoWithoutName,
  SearchIcon,
  UserIcon,
  BagIcon,
  ExitIcon,
} from "@/assets/homePhotos";
import "./Navbar.scss";
import { MenuPopup, SearchPopup, ShoppingBagPopup } from "@/components";

const Navbar: React.FC = () => {
  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);
  const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false);
  const [isBagPopupOpen, setIsBagPopupOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const togglePopup = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setter(prevState => !prevState);
  };

  const closePopups = () => {
    setIsMenuPopupOpen(false);
    setIsSearchPopupOpen(false);
    setIsBagPopupOpen(false);
  };

  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <header className="navbar-container">
      {(isMenuPopupOpen || isSearchPopupOpen) && !isDesktop && (
        <div className="sub-navbar">
          <button
            className="exit-icon"
            onClick={closePopups}
          >
            <img className="exit-icon" src={ExitIcon} alt="Exit" />
            <div className="search-popup-title">
              {isSearchPopupOpen && <span>Search</span>}
            </div>
          </button>
        </div>
      )}
      <>
        <div className="navbar-left">
          <button className="navbar-hamburger-menu" onClick={() => togglePopup(setIsMenuPopupOpen)}>
            <img className="navbar-icon-left-menu" src={HamburMenu} alt="Menu" />
          </button>
          <button className="navbar-logo" onClick={handleLogoClick}>
            <img
              className="navbar-icon-left-logo"
              src={LogoWithoutName}
              alt="Epicure Logo"
            />
          </button>
          <div className="navbar-links">
            <div className="big-link">EPICURE</div>
            <div className="small-link">Restaurants</div>
            <div className="small-link">Chefs</div>
          </div>
        </div>
        <div className="navbar-right">
          <div className="right-icons">
          <div className="desktop-searchbar">
            {isDesktop && (
              <div
                className="animated-search-bar"
                onClick={() => togglePopup(setIsSearchPopupOpen)}
              >
                <input
                  className="search-input"
                  type="text"
                  placeholder="Search for restaurant cuisine, chef"
                />
                <img className="navbar-icon" src={SearchIcon} alt="Search" />
              </div>
            )}
          </div>
            {!isDesktop && (
              <img
                className="navbar-icon"
                src={SearchIcon}
                alt="Search"
                onClick={() => togglePopup(setIsSearchPopupOpen)}
              />
            )}
            <img className="navbar-icon" src={UserIcon} alt="User Account" />
            <img
              className="navbar-icon"
              src={BagIcon}
              alt="Shopping Bag"
              onClick={() => togglePopup(setIsBagPopupOpen)}
            />
          </div>
        </div>
      </>
      {isMenuPopupOpen && (
        <MenuPopup isOpen={isMenuPopupOpen} togglePopup={() => togglePopup(setIsMenuPopupOpen)} />
      )}
      {!isDesktop && isSearchPopupOpen && (
        <SearchPopup
          isOpen={isSearchPopupOpen}
          togglePopup={() => togglePopup(setIsSearchPopupOpen)}
        />
      )}
      {isBagPopupOpen && <ShoppingBagPopup isOpen={isBagPopupOpen} />}
    </header>
  );
};

export default Navbar;
