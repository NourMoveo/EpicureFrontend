// Displays a menu popup with options like Restaurants, Chefs, Contact Us, Term of Use, and Privacy Policy.
// Handles click events on menu items.

import React from 'react';
import './MenuPopup.scss';
import { Link } from 'react-router-dom';
interface MenuPopupProps {
  isOpen: boolean;
  togglePopup: () => void;
}

const MenuPopup: React.FC<MenuPopupProps> = ({ isOpen, togglePopup }) => {
  const popupClassName = isOpen ? 'menu-popup open' : 'menu-popup';

  const handleMenuItemClick = (e: React.MouseEvent<HTMLLIElement>) => {
    e.stopPropagation(); // Prevents propagation to the popup container
  };

  return (
    <div className={popupClassName} onClick={togglePopup}>
      {isOpen && (
        <ul className="popup-buttons">
          <div className='first-section'>
          <Link to="/restaurants" className='link-route'>
            <li onClick={handleMenuItemClick}>Restaurants</li>
            </Link>
            <li onClick={handleMenuItemClick}>Chefs</li>
          </div>
          <div className='line'></div>
          <div className='second-section'>
            <li onClick={handleMenuItemClick}>Contact Us</li>
            <li onClick={handleMenuItemClick}>Term of Use</li>
            <li onClick={handleMenuItemClick}>Privacy Policy</li>
          </div>
        </ul>
      )}
    </div>
  );
}

export default MenuPopup;
