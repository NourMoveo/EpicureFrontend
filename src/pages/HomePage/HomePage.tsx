// HomePage.tsx
import { Hero, Navbar ,Restaurants, Dishes, IconsMeaning , WeekChef , AboutUs, Footer} from "../../components";
import "./HomePage.scss";
import {IconsData,ChefData} from "../../data";

const HomePage = () => {
  return (
    <>
      <Hero/>
      <Restaurants/>
      <Dishes/>
      <IconsMeaning icons={IconsData}/>
      <WeekChef chefDetails={ChefData}/>
      <AboutUs/>
    </>
  );
};

export default HomePage;
