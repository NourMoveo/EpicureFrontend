import React, { useState, useEffect } from 'react';
import { RatingComponent } from '@/components';
import './RatingFilter.scss';
import { Cards } from '@/models/Types';

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
export const mergeCardsByRating = (arraysOfCards: Cards[], selectedRatings: number[]): Cards => {
  let mergedArray: Cards = { cards: [] }; // Initialize merged array

  selectedRatings.forEach(index => {
    // Check if the index is within the bounds of arraysOfCards
    if (index >= 0 && index < arraysOfCards.length) {
      // Check if arraysOfCards[index] and arraysOfCards[index].cards are defined
      if (arraysOfCards[index] && arraysOfCards[index].cards) {
        // Concatenate the cards from arraysOfCards at the given index to the merged array
        mergedArray.cards = mergedArray.cards.concat(arraysOfCards[index].cards);
      }
    }
  });

  return mergedArray;
};



export default RatingFilter;
