import "./dishOrderPopup.scss";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "@/Controller/redux/slices/homePageSlice";
import { ExitIcon} from "@/View/Photos";
import DishOrderContent from "@/View/components/Shared/DishOrderCnt/DishOrderCnt";

const DishOrderPopup: React.FC = () => {
  const dispatch = useDispatch();
  const handleClose = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);
  const handlePopupClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    
    event.stopPropagation();
  };
  return (
    <div className="dish-order-popup">
        <div className="popup-container" onClick={handlePopupClick}>
          <div className="close-btn-container">
            <button className="modal-close-btn" onClick={handleClose} >
              <img src={ExitIcon} alt="Close" />
            </button>
          </div>
          {<DishOrderContent/>}

        </div>
    </div>
  );
};

export default DishOrderPopup;
