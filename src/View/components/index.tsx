// Common Components :
import Navbar from './Common/Navbar/Navbar';
import Footer from './Common/Footer/Footer';

// Sections :
import Hero from "./Sections/Hero/Hero";
import IconsMeaning from "./Sections/IconsMeaning/IconsMeaning";
import WeekChef from "./Sections/WeekChef/WeekChef";
import AboutUs from "./Sections/AboutUs/AboutUs"

// Shared Components
import CustomCard from "./Shared/CustomCard/CustomCard";
import CustomCardsSection from "./Shared/CustomCardsSection/CustomCardsSection";
import RestaurantsHeader from './Shared/RestaurantsHeader/RestaurantsHeader';
import MultiRangeSlider from './Shared/MultiRangeSlider/MultiRangeSlider';
import SingleDistanceSlider from './Shared/SingleDistanceSlider/SingleDistanceSlider'
import RangeFilter from './Shared/RatingFilter/RatingFilter'
import ChefCard from './Shared/ChefCard/ChefCard';
//Swiper
import { SwiperConfig } from "./Shared/Swiper/Swiper";

//Popups 
import MenuPopup from './Common/PopUps/MenuPopup/MenuPopup';
import SearchPopup from './Common/PopUps/SearchPopup/SearchPopup';
import ShoppingBagPopup from './Common/PopUps/ShoppingBagPopup/ShoppingBagPopup';
import DishOrderPopup from './Common/PopUps/dishOrderPopup/dishOrderPopup';
import SignInPopup from './Common/PopUps/SignInPopup/SignInPopup';
//SVG files
import RatingComponent from './SVGFiles/RatingSVG/RatingSVG'
export {
    SearchPopup,MenuPopup,ShoppingBagPopup,DishOrderPopup,SignInPopup,
    Navbar,Footer,
     Hero, IconsMeaning,  WeekChef, AboutUs,
    CustomCard, CustomCardsSection, RestaurantsHeader , SwiperConfig ,MultiRangeSlider,SingleDistanceSlider,
    RatingComponent,RangeFilter,ChefCard,
};