// HomePage.tsx
import { Hero, Navbar ,Restaurants, Dishes, IconsMeaning , WeekChef , AboutUs, Footer} from "../../components";
import "./HomePage.scss";
import {IconsData,ChefData} from "../../data";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <Restaurants/>
      <Dishes/>
      <IconsMeaning icons={IconsData}/>
      <WeekChef chefDetails={ChefData}/>
      <AboutUs/>
      <Footer/>
    </>
  );
};

export default HomePage;
