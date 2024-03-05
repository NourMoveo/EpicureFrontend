import React, { useState, useEffect } from 'react';
import { RatingComponent } from '@/components';
import './RatingFilter.scss';

interface RangeFilterPopupProps {
  onFilterChange: (selectedRatings: number[]) => void;
}

const RatingFilter: React.FC<RangeFilterPopupProps> = ({ onFilterChange }) => {
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [popupHeight, setPopupHeight] = useState<number>(9.5); // Initial height

  const handleRatingChange = (rating: number) => {
    if (selectedRatings.includes(rating)) {
      setSelectedRatings(selectedRatings.filter((r) => r !== rating));
    } else {
      setSelectedRatings([...selectedRatings, rating]);
    }
  };

  const handleClearFilter = () => {
    setSelectedRatings([]);
  };

  const applyFilter = () => {
    onFilterChange(selectedRatings);
  };

  useEffect(() => {
    if (selectedRatings.length > 0) {
      setPopupHeight(26.5); // Increase height when checkboxes are selected
    } else {
      setPopupHeight(22.5); // Restore initial height when no checkboxes are selected
    }
  }, [selectedRatings]);

  return (
    <div className="range-checkbox-filter-popup" style={{ height: `${popupHeight}vw` }}>
      <div className="rating-popup-title">Rating</div>
      <div className="filter-options">
        {[1, 2, 3, 4, 5].map((rating) => (
          <div key={rating} className="checkbox-rating">
            <input
              type="checkbox"
              checked={selectedRatings.includes(rating)}
              onChange={() => handleRatingChange(rating)}
            />
            <div className="rating">
              <RatingComponent number={rating} />
            </div>
          </div>
        ))}
      </div>
      <div className="button-container">
        {selectedRatings.length > 0 && (
          <button className="clear-button" onClick={handleClearFilter}>
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default RatingFilter;
