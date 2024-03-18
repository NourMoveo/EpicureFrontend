import "./dishOrderPopup.scss";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fade } from "react-awesome-reveal";
import { closeModal } from "@/redux/slices/homePageSlice";
import { RootState } from "@/redux/store/store";
import { ExitIcon, ILSLogo } from "@/assets/Photos";

const DishOrderPopup: React.FC = () => {
  const dispatch = useDispatch();
  const selectedDish = useSelector(
    (state: RootState) => state.homePage.selectedDish
  );
  const handleClose = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);
  const [quantity, setQuantity] = useState(0);

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handlePopupClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    // Prevent event propagation to parent elements
    event.stopPropagation();
  };

  const renderPopupContent = () => (
    <div className="dish-order-popup" onClick={handleClose}>
      <Fade cascade duration={300}>
        <div className="popup-container" onClick={handlePopupClick}>
          <div className="close-btn-container">
            <button className="modal-close-btn" onClick={handleClose}>
              <img src={ExitIcon} alt="Close" />
            </button>
          </div>
          {selectedDish && (
            <>
              <div className="dish-img">
                <img src={selectedDish.image} alt="dish-image" />
              </div>
              <div className="dish-details">
                <div className="dish-title">{selectedDish.title}</div>
                <div className="dish-description">
                  {selectedDish.description}
                </div>
                <div className="dish-icon">{selectedDish.foodIcon}</div>
                <div className="dish-price">
                  <div className="line" />
                  <div className="value-logo-container">
                    <img src={ILSLogo} alt="ILS" className="ils-icon" />
                    <span className="price-value">{selectedDish.price}</span>
                  </div>
                  <div className="line" />
                </div>
              </div>
              <div className="dish-side">
                <div className="side-title">Choose a side</div>
                <div className="side-choices">
                  {selectedDish.dishSides?.map((dishSide, index) => (
                    <label key={index}>
                      <input type="checkbox" className="side-checkbox" />
                      {dishSide}
                    </label>
                  ))}
                </div>
              </div>
              <div className="dish-changes">
                <div className="changes-title">Changes</div>
                <div className="side-choices">
                  {selectedDish.changes?.map((dishChange, index) => (
                    <label key={index}>
                      <input type="checkbox" className="changes-checkbox" />
                      {dishChange}
                    </label>
                  ))}
                </div>
              </div>
              <div className="dish-quantity">
                <button
                  className="reduce"
                  onClick={handleDecreaseQuantity}
                >
                  -
                </button>
                <div className="quantity">{quantity}</div>
                <button className="add" onClick={handleIncreaseQuantity}>
                  +
                </button>
              </div>
              <button className="add-to-bag">ADD TO BAG</button>
            </>
          )}
        </div>
      </Fade>
    </div>
  );

  return renderPopupContent();
};

export default DishOrderPopup;
