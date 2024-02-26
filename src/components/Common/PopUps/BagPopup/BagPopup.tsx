import React, { useState } from 'react';
import { BagIcon } from '../../../../assets/homePhotos';
import './BagPopup.scss';

/**
 * BagPopup component displays a popup for the user's bag.
 * It shows a message indicating the bag is empty and an option to view order history.
 */
interface BagPopupProps {
    isOpen: boolean; // Determines if the popup is open
}

const BagPopup: React.FC<BagPopupProps> = ({ isOpen }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(isOpen);

    // Function to toggle the popup open or closed
    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <div className={isPopupOpen ? 'bag-popup open' : 'bag-popup'}>
            <div className="bag-content">
                <img className='BagIcon' src={BagIcon} alt='Bag' />
                <div className='txt'>Your bag is empty</div>
                <button className="order-history-button">Order History</button>
            </div>
        </div>
    );
}

export default BagPopup;
