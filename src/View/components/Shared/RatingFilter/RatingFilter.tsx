import React, { useState, useEffect } from 'react';
import { RatingComponent } from '@/View/components';
import './RatingFilter.scss';
import { Restaurant } from '@/Model/Interfaces';

interface RangeFilterPopupProps {
  onFilterChange: (selectedRatings: number[]) => void;
}

const RatingFilter: React.FC<RangeFilterPopupProps> = ({ onFilterChange }) => {
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [popupHeight, setPopupHeight] = useState<number>(9.5); // Initial height

  const handleRatingChange = (rating: number) => {
    const updatedRatings = selectedRatings.includes(rating)
      ? selectedRatings.filter((r) => r !== rating)
      : [...selectedRatings, rating];
    
    setSelectedRatings(updatedRatings);
    onFilterChange(updatedRatings); // Send updated ratings to the restaurant page
  };

  const handleClearFilter = () => {
    setSelectedRatings([]);
    onFilterChange([]); // Send an empty array to clear the filter
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

export const mergeRestaurantsByRating = (arraysOfRestaurant: Restaurant[], selectedRatings: number[]): Restaurant[] => {
  let mergedArray: Restaurant[] = []; // Initialize merged array

  selectedRatings.forEach(index => {
    // Check if the index is within the bounds of arraysOfRestaurant
    if (index >= 0 && index < arraysOfRestaurant.length) {
      // Check if arraysOfRestaurant[index] and arraysOfRestaurant[index].restaurants are defined
      if (arraysOfRestaurant[index] ) {
        // Concatenate the restaurants from arraysOfRestaurant at the given index to the merged array
        mergedArray = mergedArray.concat(arraysOfRestaurant[index]);
      }
    }
  });

  return mergedArray;
};

export default RatingFilter;
