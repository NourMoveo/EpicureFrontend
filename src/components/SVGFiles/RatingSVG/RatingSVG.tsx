import React from 'react';
import './RatingSVG.scss'

const StarSVG = ({ filled }: { filled: boolean }): JSX.Element => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M20 0L24.4903 13.8197H39.0211L27.2654 22.3607L31.7557 36.1803L20 27.6393L8.2443 36.1803L12.7346 22.3607L0.97887 13.8197H15.5097L20 0Z"
            fill={filled ? "#DE9200" : "#fffff"}
            stroke="#DE9200"
        />
    </svg>
);

const RatingComponent: React.FC<{ number: number }> = ({ number }) => {
    return (
        <div className='svg-stars'>
            {[...Array(5)].map((_, index) => (
                <div key={index} className="svg-star">
                    <StarSVG filled={index < number} />
                </div>
            ))}
        </div>
    );
};

export default RatingComponent;
