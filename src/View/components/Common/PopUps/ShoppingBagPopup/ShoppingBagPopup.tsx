import React, { useState } from 'react';
import { BagIcon, ILSLogo, ILSOrangeIcon } from '../../../../Photos';
import './ShoppingBagPopup.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/Controller/redux/store/store';
import { Restaurant, OrderDish, Order, PagesType } from '@/Model/Interfaces';
import { userAPI } from '@/Model/APIs/UserAPI';
import { updateComment } from '@/Controller/redux/slices/dishOrderSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

/**
 * BagPopup component displays a popup for the user's bag.
 * It shows a message indicating the bag is empty and an option to view order history.
 */
interface BagPopupProps {
    isOpen: boolean; // Determines if the popup is open
}
export const isMobile = window.matchMedia('(max-width: 768px)').matches;
    
export const ShoppingBagDishCard: React.FC<{ orderDish: OrderDish }> = ({ orderDish }) => {
    return (
        <div className='dish-card-popup'>
            <div className='dish-img-popup'><img className='dish-img-popup' src={orderDish.dish.image} alt="" /></div>
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
                        <div className='dish-price'>
                            {isMobile ? (
                                <div className='ils-logo'><img className='ils-logo' src={ILSLogo} alt="ils-logo" /></div>
                            ) : (
                                <div className='ils-logo'><img className='ils-logo' src={ILSOrangeIcon} alt="ils-logo" /></div>
                            )}
                            <div className='dish-mini-price'>{orderDish.dish.price}</div>

                        </div>
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
                    {orderDish.dish.dishSides.length > 0 && orderDish.dish.changes.length > 0 && <div className='split-line'>{"|"}</div>}
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

export const renderNewItemsBag: React.FC<{ orderArg: Order; customMethod: () => void }> = ({ orderArg, customMethod }) => {
    return (
        <div className={"bag-content-new-dishes"}>
            <div className="order-title">My Order</div>
            <div className="restaurant-name">{orderArg.dishes.length > 0 && ((orderArg.dishes[0].dish.restaurant) as Restaurant).title}</div>
            <div className="dishes-list">
                {orderArg.dishes.map((dishOrderIndex, index) => (
                    <div key={index} className="dish-item">
                        <ShoppingBagDishCard orderDish={dishOrderIndex} />
                    </div>
                ))}
            </div>
            <div className='second-part'>
                <div className='total-price'>
                    <div className='line' />
                    <div className="total-quantity">
                        <span className='total-txt'>{"total - "}</span>
                        <div className='ils-logo'><img className='ils-logo' src={ILSLogo} alt="ils-logo" />{orderArg.total}</div>
                    </div>
                    <div className='line' />
                </div>
                { !isMobile && <div className='line-desktop' />}
                <div className="add-comment">
                    <span className='add-comment-title'>Add A Comment</span>
                    <input className='comment-input' type="text" id="comment-input" placeholder="Special requests, allergies, detary restrictions, etc." />
                </div>
                <div className="buttons">
                    <button className="checkout-button" onClick={customMethod}>Checkout</button>
                </div>
            </div>
        </div>
    );
};

const BagPopup: React.FC<BagPopupProps> = ({ isOpen }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(isOpen);
    const { order } = useSelector(
        (state: RootState) => state.dishOrderPage
    );
    const { email } = useSelector(
        (state: RootState) => state.signInPage
    );
    const navigate = useNavigate(); // Initialize navigate
    // const dispatch = useDispatch();
    const handleCheckout = async () => {
        navigate('/checkout');
        // try {
        //     const comment = document.getElementById('comment-input')?.nodeValue || '';
        //     dispatch(updateComment(comment));
        //     await userAPI.addOrder(email, order);

        //     alert("added successfully!");
        //     navigate("/");
        // } catch (error) {
        //     console.error(error);
        //     if (error instanceof Error) {
        //         alert(error.message);
        //     } else {
        //         alert("Unknown error occurred ");
        //     }
        // }
    };

    const renderEmptyBag = () => (
        <div className="bag-content">
            <img className='BagIcon' src={BagIcon} alt='Bag' />
            <div className='content'>Your bag is empty</div>
            <button className="order-history-button">Order History</button>
        </div>
    );
    return (
        <div className={isPopupOpen && order.dishes.length === 0 ? 'bag-popup open' : 'bag-content-new-dishes open'}>
            {order.dishes.length === 0 ? renderEmptyBag() : renderNewItemsBag({ orderArg: order, customMethod: handleCheckout, })}
        </div>
    );
}

export default BagPopup;