import React, { ChangeEvent, FC, useEffect, useState, useRef } from "react";
import "./MultiRangeSlider.scss";
import classnames from "classnames";
import { ILSLogo } from "../../../assets/homePhotos";

interface MultiRangeSliderProps {
  min: number;
  max: number;
  onChange: (values: { min: number; max: number }) => void;
  isOpen: boolean;
  togglePopup: () => void;
}

const MultiRangeSlider: FC<MultiRangeSliderProps> = ({ min, max, onChange, isOpen, togglePopup }) => {
  const popupClassName = isOpen ? 'range-price-popup open' : 'range-price-popup';
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const [valuesChanged, setValuesChanged] = useState(false);
  const [isRangeChanged, setIsRangeChanged] = useState(false);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isRangeChanged) {
      togglePopupHeight(14);
    } else {
      togglePopupHeight(11);
    }
  }, [isRangeChanged]);

  const togglePopupHeight = (height: number) => {
    const popupContainer = document.querySelector('.popup-container') as HTMLElement;
    if (popupContainer) {
      popupContainer.style.height = `${height}vw`;
    }
  };

  const getPercent = (value: number) => Math.round(((value - min) / (max - min)) * 100);

  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal]);

  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal]);

  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
    setValuesChanged(minVal !== min || maxVal !== max);
    setIsRangeChanged(minVal !== min || maxVal !== max);

    if (minVal === min && maxVal === max) {
      minValRef.current?.classList.remove('thumb--orange');
      maxValRef.current?.classList.remove('thumb--orange');
    }
  }, [minVal, maxVal, onChange, min, max]);

  const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setMinVal(min);
    setMaxVal(max);
    setValuesChanged(false);
    setIsRangeChanged(false);
  };

  return (
    <div className="popup-container" onClick={togglePopup}>
      <div className="popup-title">Price Range Selected</div>
      <div className="range-display">
        <div className="ils-icon">
          <img className="ils-icon" src={ILSLogo} alt="ILS Icon" />
        </div>
        <div className="value">
          {min}
        </div>
        -
        <div className="ils-icon">
          <img className="ils-icon" src={ILSLogo} alt="ILS Icon" />
        </div>
        <div className="value">
          {max}
        </div>
      </div>
      <div className="container">
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          ref={minValRef}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const value = Math.min(+event.target.value, maxVal - 1);
            setMinVal(value);
            event.target.value = value.toString();

            if (!event.target.classList.contains('thumb--orange')) {
              event.target.classList.add('thumb--orange');
            }
          }}
          className={classnames("thumb thumb--zindex-3", {
            "thumb--zindex-5": minVal > max - 100,
          })}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          ref={maxValRef}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const value = Math.max(+event.target.value, minVal + 1);
            setMaxVal(value);
            event.target.value = value.toString();

            if (!event.target.classList.contains('thumb--orange')) {
              event.target.classList.add('thumb--orange');
            }
          }}
          className="thumb thumb--zindex-4"
        />
        <div className="slider">
          <div className="slider__track"></div>
          <div ref={range} className="slider__range"></div>
          <div className={classnames("slider__left-value", { "slider__left-value--orange": valuesChanged })}>
            <div className={classnames("ils-icon", { "ils-icon-value--orange": valuesChanged })}><img className="ils-img" src={ILSLogo} alt="ILS Icon" /></div>
            <div className="min-value">{minVal}</div>
          </div>
          <div className={classnames("slider__right-value", { "slider__right-value--orange": valuesChanged })}>
            <div className="ils-icon"><img src={ILSLogo} alt="ILS Icon" className="ils-img"/></div>
            <div className="max-value">{maxVal}</div>
          </div>
          {valuesChanged && <button className="clear-button" onClick={handleClear}>Clear</button>}
        </div>
      </div>
    </div>);
};

export default MultiRangeSlider;
