import React from 'react';

import config from '../config/index.json';

const MainHeroImage = () => {
  const { mainHero } = config;
  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lgleft-30 lg:w-1/2">
      <img
        // className="h-auto w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        className='w-auto md:h-[100%] object-cover md:ml-36 h-[30%] md:mt-12'
        src={mainHero.img}
        alt="happy team image"
      />
    </div>
  );
};

export default MainHeroImage;
