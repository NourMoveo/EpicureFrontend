// Common Components :
import Navbar from './Common/Navbar/Navbar';
import Footer from './Common/Footer/Footer';

// Sections :
import Dishes from "./Sections/Dishes/Dishes";
import Hero from "./Sections/Hero/Hero";
import IconsMeaning from "./Sections/IconsMeaning/IconsMeaning";
import Restaurants from "./Sections/Restaurants/Restaurants";
import WeekChef from "./Sections/WeekChef/WeekChef";
import AboutUs from "./Sections/AboutUs/AboutUs"
import RestaurantDetails from './Sections/RestaurantDetails/RestaurantDetails';

// Shared Components
import CustomCard from "./Shared/CustomCard/CustomCard";
import CustomCardsSection from "./Shared/CustomCardsSection/CustomCardsSection";
import RestaurantsHeader from './Shared/RestaurantsHeader/RestaurantsHeader';
import MultiRangeSlider from './Shared/MultiRangeSlider/MultiRangeSlider';
import SingleDistanceSlider from './Shared/SingleDistanceSlider/SingleDistanceSlider'
//Swiper
import { SwiperConfig } from "./Shared/Swiper/Swiper";

//Popups 
import MenuPopup from './Common/PopUps/MenuPopup/MenuPopup';
import SearchPopup from './Common/PopUps/SearchPopup/SearchPopup';
import ShoppingBagPopup from './Common/PopUps/ShoppingBagPopup/ShoppingBagPopup';

export {
    SearchPopup,MenuPopup,ShoppingBagPopup,
    Navbar,Footer,
    Dishes, Hero, IconsMeaning, Restaurants, WeekChef, AboutUs, RestaurantDetails,
    CustomCard, CustomCardsSection, RestaurantsHeader , SwiperConfig ,MultiRangeSlider,SingleDistanceSlider,
};