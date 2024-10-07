

import React from 'react';
import './slide.css'; // Import CSS specific to Slide component

function Slide({ title, description, image, additionalImage, additionalDescription , style }) {
  return (
    <div className="slide transition-all duration-[1s] ease-in-out" style={style}>
      <img className='image1' src={image} alt={title} />
      <h2 className='h-[136px] w-[768px] m-[auto] flex items-center text-[24px] font-semibold font-[sans-serif]'>{title}</h2>
      <div>
      {additionalImage && <img className="w-[56px] h-[56px" src={additionalImage} alt="Additional" style={{width:"56px" , height:"56px"}} />}
      <p className=' font-[sans-serif] font-bold'>{description}</p>
      <p className='text-[#666666] font-[sans-serif]'>{additionalDescription}</p>
      </div>
    </div>
  );
}

export default Slide;

