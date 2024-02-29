import { useState } from 'react';
import './RestaurantsHeader.scss';

const RestaurantsHeader = () => {
    const [activeButton, setActiveButton] = useState('All'); // State to track active button

    const handleClick = (buttonName: string) => { // Specify the type of buttonName
        setActiveButton(buttonName); // Update active button on click
    };

    return (
        <div className="header-container">
            <div className="restaurants-header">
                <button className={activeButton === 'All' ? 'active' : ''} onClick={() => handleClick('All')}>All</button>
                <button className={activeButton === 'New' ? 'active' : ''} onClick={() => handleClick('New')}>New</button>
                <button className={activeButton === 'MostPopular' ? 'active' : ''} onClick={() => handleClick('MostPopular')}>Most Popular</button>
                <button className={activeButton === 'OpenNow' ? 'active' : ''} onClick={() => handleClick('OpenNow')}>Open Now</button>
            </div>
        </div>

    );
};

export default RestaurantsHeader;
