import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const Product = () => {
  const { product } = config;
  const [firstItem, secondItem, thirdItem, fourthItem] = product.items;

  return (
    <section className={`bg-background py-8`} id="product">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-[7vh] font-bold leading-tight text-center text-primary font-custom`}
        >
          {product.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={!(index % 3) ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />

        <div className={`flex flex-wrap justify-center`}>
          <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
            <h3
              className={`text-[6vh] text-border font-bold leading-none mb-3 font-custom`}
            >
              {firstItem?.title}
            </h3>
            <p className={`text-gray-400 text-[3vh] font-custom`}>
              {firstItem?.description}
            </p>
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6 bg-blend-normal scale-105 sm:-mb-10 "
              src={firstItem?.img}
              alt={firstItem?.title}
            />
          </div>
        </div>

        <div
          className={`flex flex-wrap flex-col-reverse sm:flex-row sm:mt-20 justify-center`}
        >
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6 bg-blend-normal scale-150 sm:-mb-20"
              src={secondItem?.img}
              alt={secondItem?.title}
            />
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-[6vh] text-primary font-bold leading-none mb-3 font-custom`}
              >
                {secondItem?.title}
              </h3>
              <p className={`text-gray-400 mb-8 text-[3vh] font-custom`}>
                {secondItem?.description}
              </p>
            </div>
          </div>

          <div className={`flex flex-wrap sm:mt-20 justify-center`}>
            <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
              <h3
                className={`text-[6vh] text-border font-bold leading-none mb-3 font-custom`}
              >
                {thirdItem?.title}
              </h3>
              <p className={`text-gray-400 text-[3vh] font-custom`}>
                {thirdItem?.description}
              </p>
            </div>
            <div className={`w-full sm:w-1/2 p-6`}>
              <img
                className="h-6/6 md:scale-150 scale-105 sm:mt-24 sm:-mb-10 sm:ml-20 "
                src={thirdItem?.img}
                alt={thirdItem?.title}
              />
            </div>
          </div>
          <div
            className={`flex flex-wrap flex-col-reverse sm:flex-row sm:mt-20 justify-center`}
          >
            <div className={`w-full sm:w-1/2 p-6`}>
              <img
                className="h-6/6 bg-blend-normal"
                src={fourthItem?.img}
                alt={fourthItem?.title}
              />
            </div>
            <div className={`w-full sm:w-1/2 p-6 `}>
              <div className={`align-middle sm:mt-16`}>
                <h3
                  className={`text-[6vh] text-primary font-bold leading-none mb-3 font-custom`}
                >
                  {fourthItem?.title}
                </h3>
                <p className={`text-gray-400 mb-8 text-[3vh] font-custom`}>
                  {fourthItem?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
