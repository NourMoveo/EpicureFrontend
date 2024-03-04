import React, { ChangeEvent, FC, useEffect, useState, useRef } from "react";
import "./SingleDistanceSlider.scss";
import classnames from "classnames";

interface SingleDistanceSliderProps {
    maxDistance: number;
    onChange: (value: number) => void;
    isOpen: boolean;
    togglePopup: () => void;
}

const SingleDistanceSlider: FC<SingleDistanceSliderProps> = ({ maxDistance, onChange, isOpen, togglePopup }) => {
    const popupClassName = isOpen ? 'distance-popup open' : 'distance-popup';
    const [maxVal, setMaxVal] = useState(maxDistance);
    const [valuesChanged, setValuesChanged] = useState(false);
    const [isRangeChanged, setIsRangeChanged] = useState(false);
    const range = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isRangeChanged) {
            togglePopupHeight(12);
        } else {
            togglePopupHeight(9.5);
        }
    }, [isRangeChanged]);

    const togglePopupHeight = (height: number) => {
        const popupContainer = document.querySelector('.distance-popup-container') as HTMLElement;
        if (popupContainer) {
            popupContainer.style.height = `${height}vw`;
        }
    };

    const getPercent = (value: number) => Math.round((value / maxDistance) * 100);

    useEffect(() => {
        if (range.current) {
            const maxPercent = getPercent(maxVal);
            range.current.style.width = `${maxPercent}%`;
        }
    }, [maxVal]);

    useEffect(() => {
        onChange(maxVal);
        setValuesChanged(maxVal !== maxDistance);
        setIsRangeChanged(maxVal !== maxDistance);
    }, [maxVal, onChange, maxDistance]);

    const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        setMaxVal(maxDistance);
        setValuesChanged(false);
        setIsRangeChanged(false);
    };

    return (
        <div className="distance-popup-container" onClick={togglePopup}>
            <div className="distance-popup-title">Distance</div>
            <div className="distance-container">
                <div className="distance-slider">
                    <div className="distance-slider__track"></div>
                    <div ref={range} className="distance-slider__range"></div>
                    <div className={classnames("distance-slider__left-value", { "distance-slider__left-value--orange": valuesChanged })}>
                        <div className="distance-left-circle"></div> 
                        <div className="distance-min-value">My location</div>
                    </div>

                    <input
                        type="range"
                        min={0}
                        max={maxDistance}
                        step={0.1} // Set step to 0.1
                        value={maxVal}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            const value = Math.max(+event.target.value, 0.1); // Ensure the minimum value is 0.1
                            setMaxVal(value);
                            event.target.value = value.toString();

                            if (!event.target.classList.contains('distance-thumb--orange')) {
                                event.target.classList.add('distance-thumb--orange');
                            }
                        }}
                        className="distance-thumb distance-thumb--zindex-4"
                    />
                    <div className={classnames("distance-slider__right-value", { "distance-slider__right-value--orange": valuesChanged })}>
                        <div className="distance-max-value">{maxVal}km</div>
                    </div>
                    {valuesChanged && <button className="distance-clear-button" onClick={handleClear}>Clear</button>}
                </div>
            </div>
        </div>
    );
};

export default SingleDistanceSlider;
