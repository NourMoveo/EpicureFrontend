import React, { useState } from 'react';
import { BagIcon, ILSLogo } from '../../../../Photos';
import './ShoppingBagPopup.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/Controller/redux/store/store';
import { Dish, Restaurant, OrderDish } from '@/Model/Interfaces';

/**
 * BagPopup component displays a popup for the user's bag.
 * It shows a message indicating the bag is empty and an option to view order history.
 */
interface BagPopupProps {
    isOpen: boolean; // Determines if the popup is open
}

const BagPopup: React.FC<BagPopupProps> = ({ isOpen }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(isOpen);
    const { order, totalQuantity } = useSelector(
        (state: RootState) => state.dishOrderPage
    );


    const ShoppingBagDishCard: React.FC<{ orderDish: OrderDish }> = ({ orderDish }) => {
        return (
            <div className='dish-card-popup'>
                <div className='dish-img-popup'><img src={orderDish.dish.image} alt="" /></div>
                <div className='dish-details-popup'>
                    <div className='quantity-name-price'>
                        <div className='quantity'>
                            <button className='quantity-button'>{orderDish.quantity}</button>
                            <div className='quantity-value'>{orderDish.quantity + "x"}</div>
                        </div>
                        <div className='name-price'>
                            <div className='dish-name'>
                                {orderDish.dish.title}
                            </div>
                            <div className='ils-logo'><img src={ILSLogo} alt="ils-logo" /></div>
                            <div className='dish-mini-price'>{orderDish.dish.price}</div>
                        </div>

                    </div>
                    <div className='dish-side-changes'>
                        <div className='dish-side'>
                            {orderDish.dish.dishSides.map((side, index) => (
                                <div key={index} className="dish-side">
                                    <span>{side}</span>
                                </div>
                            ))}
                        </div>
                        <div className='split-line'>{"|"}</div>
                        <div className='dish-changes'>
                            {orderDish.dish.changes.map((change, index) => (
                                <div key={index} className="dish-change">
                                    <span>{change}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='main-dish-price'>
                        <div className='ils-logo'><img src={ILSLogo} alt="ils-logo" /></div>
                        <div className='price-value'>{orderDish.dish.price}</div>
                    </div>
                </div>
            </div>
        );
    };

    const renderEmptyBag = () => (
        <div className="bag-content">
            <img className='BagIcon' src={BagIcon} alt='Bag' />
            <div className='content'>Your bag is empty</div>
            <button className="order-history-button">Order History</button>
        </div>
    );


    const renderNewItemsBag = () => (
        <div className="bag-content">
            <div className="order-title">My Order</div>
            <div className="restaurant-name">{order.dishes.length > 0 && ((order.dishes[0].dish.restaurant) as Restaurant).title}</div>
            <div className="dishes-list">
                {order.dishes.map((dishOrderIndex, index) => (
                    <div key={index} className="dish-item">
                        <ShoppingBagDishCard orderDish={dishOrderIndex} />
                    </div>
                ))}
            </div>
            <div className="total-quantity">Total Quantity: {totalQuantity}</div>
            <div className="add-comment">
                <input type="text" placeholder="Add a comment" />
            </div>
            <div className="buttons">
                <button className="checkout-button">Checkout</button>
                <button className="order-history-button">Order History</button>
            </div>
        </div>
    );

    return (
        <div className={isPopupOpen ? 'bag-popup open' : 'bag-popup'}>
            {order.dishes.length === 0 ? renderEmptyBag() : renderNewItemsBag()}
        </div>
    );
}

export default BagPopup;
