import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const Features = () => {
  const { features } = config;
  const { title, subtitle, description, items: featuresList } = features;

  return (
    <div className="py-12 bg-background font-custom" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-[7vh] text-primary font-semibold leading-tight">
          {title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 === 0 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>

        <Divider />

        <p className="mt-2 font-extrabold tracking-tight text-gray-100 text-[5vh]">
          {subtitle}
        </p>

        <p className="mt-4 max-w-2xl mx-auto text-[3vh] text-gray-300">
          {description}
        </p>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {featuresList.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-background text-tertiary border-primary border-4">
                    <img
                      className="inline-block h-6 w-6 rounded-full"
                      src={feature.icon}
                      alt={feature.name}
                    />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-100">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-300">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
