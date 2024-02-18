import { Fade } from "react-awesome-reveal";
import "./AboutUs.scss";
import { AboutUsData } from "@/data";

// Renders the About Us section of the application, displaying the company logo, Epicure buttons, and a brief description.
const AboutUs = () => {
  return (
    <Fade>
      <div className='about-us-container'>
        <img className='app-logo' src={AboutUsData.epicLogo} alt='Epicure Logo' />
        <div className='description-and-buttons'>
          <div className='epicure-buttons'>
            <img className='epicure-logo' src={AboutUsData.googleLogo} alt='Google Logo' />
            <img className='epicure-logo' src={AboutUsData.appleLogo} alt='Apple Logo' />
          </div>
          <div className='about-us-content'>
            <h3 className='about-us-title'>{AboutUsData.title}</h3>
            <p className='about-us-description part-one'>{AboutUsData.firstP}</p>
            <p className='about-us-description part-two'>{AboutUsData.seconedP}</p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default AboutUs;
