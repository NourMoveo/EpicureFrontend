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

// Shared Components
import CustomCard from "./Shared/CustomCard/CustomCard";
import CustomCardsSection from "./Shared/CustomCardsSection/CustomCardsSection";

//Swiper
import { SwiperConfig } from "./Shared/Swiper/Swiper";

//Popups 
import MenuPopup from './Common/PopUps/MenuPopup/MenuPopup';
import SearchPopup from './Common/PopUps/SearchPopup/SearchPopup';
import BagPopup from './Common/PopUps/BagPopup/BagPopup';

export {
    SearchPopup,MenuPopup,BagPopup,
    Navbar,Footer,
    Dishes, Hero, IconsMeaning, Restaurants, WeekChef, AboutUs, 
    CustomCard, CustomCardsSection, SwiperConfig
};