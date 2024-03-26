import "./DishOrderPage.scss";
import DishOrderContent from "@/View/components/Shared/DishOrderCnt/DishOrderCnt";

const DishOrderPopup: React.FC = () => {
 
  return (
    <div className="dish-order-pae">
          {<DishOrderContent/>}
          
    </div>
  );
};

export default DishOrderPopup;
