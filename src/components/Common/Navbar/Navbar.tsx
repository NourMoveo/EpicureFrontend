/**
 * Navbar.tsx
 *
 * Represents the navigation bar at the top of a webpage.
 * Includes buttons for menu navigation, a logo, search functionality, user account, and shopping bag.
 * Handles responsive behavior for different screen sizes.
 */

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
import { MenuPopup, SearchPopup, BagPopup } from "@/components";

const Navbar: React.FC = () => {
  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);
  const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false);
  const [isBagPopupOpen, setIsBagPopupOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024); // Check if screen size is desktop
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenuPopup = () => {
    setIsMenuPopupOpen(!isMenuPopupOpen);
    // Close other popups if open
    if (isSearchPopupOpen) setIsSearchPopupOpen(false);
    if (isBagPopupOpen) setIsBagPopupOpen(false);
  };

  const toggleSearchPopup = () => {
    setIsSearchPopupOpen(!isSearchPopupOpen);
    // Close other popups if open
    if (isMenuPopupOpen) setIsMenuPopupOpen(false);
    if (isBagPopupOpen) setIsBagPopupOpen(false);
  };

  const toggleBagPopup = () => {
    setIsBagPopupOpen(!isBagPopupOpen);
    // Close other popups if open
    if (isMenuPopupOpen) setIsMenuPopupOpen(false);
    if (isSearchPopupOpen) setIsSearchPopupOpen(false);
  };

  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <header className="navbar-container">
      {(isMenuPopupOpen || isSearchPopupOpen) && !isDesktop ? (
        // Render sub-navbar with exit button if menu or search popup is open and not on desktop
        <div className="sub-navbar">
          <button
            className="exit-icon"
            onClick={() => {
              if (isMenuPopupOpen) toggleMenuPopup();
              if (isSearchPopupOpen) toggleSearchPopup();
            }}
          >
            <img className="exit-icon" src={ExitIcon} alt="Exit" />
            <div className="search-popup-title">
              {isSearchPopupOpen && <span>Search</span>}
            </div>
          </button>
        </div>
      ) : (
        // Render navbar items
        <>
          <div className="navbar-left">
            <button className="navbar-hamburger-menu" onClick={toggleMenuPopup}>
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
              {isDesktop && ( // Render animated search bar if desktop
                <div
                  className="animated-search-bar"
                  onClick={toggleSearchPopup}
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
                  onClick={toggleSearchPopup}
                />
              )}
              <img className="navbar-icon" src={UserIcon} alt="User Account" />
              <img
                className="navbar-icon"
                src={BagIcon}
                alt="Shopping Bag"
                onClick={toggleBagPopup}
              />
            </div>
          </div>
        </>
      )}
      {isMenuPopupOpen && (
        <MenuPopup isOpen={isMenuPopupOpen} togglePopup={toggleMenuPopup} />
      )}
      {!isDesktop && isSearchPopupOpen && (
        <SearchPopup
          isOpen={isSearchPopupOpen}
          togglePopup={toggleSearchPopup}
        />
      )}
      {isBagPopupOpen && <BagPopup isOpen={isBagPopupOpen} />}
    </header>
  );
};

export default Navbar;
