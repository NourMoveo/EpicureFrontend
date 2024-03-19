import React from "react";
import { Fade } from "react-awesome-reveal";
import "./IconsMeaning.scss";
import { IconsMeaningProps } from "@/Model/Interfaces";
/**
 *  render a list of icons along with their corresponding names. 
 * It utilizes the Fade component from the react-awesome-reveal library to apply a fade-in effect when the component mounts.
 */
const IconsMeaning: React.FC<IconsMeaningProps> = ({ icons }) => {
  return (
    <Fade>
      <div className='main-container'>
        <h3 className='title'>the meaning of our icons:</h3>
        <div className='icon-container'>
          {icons.map((icon) => (
            <div className='icon-item' key={icon.name}>
              <img className='icon-img' alt='Icon' src={icon.image} />
              <h3 className='icon-label'>{icon.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
};

export default IconsMeaning;
