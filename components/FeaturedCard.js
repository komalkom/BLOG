import React from 'react';
import { motion } from 'framer-motion';

const FeaturedCard = () => {
  return (
    <div className='w-[100%] h-[20%]  rounded-xl mt-[2%]'>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 0.9 }}
        className='object-fit w-screen  relative'
      >
        <img
          src='fintech.png'
          className='w-[100%] rounded-xl'
          alt='Fintech'
        />
        <div className='hidden md:block absolute pt-6 bottom-0 left-0 right-0 font-wow w-[95%] text-white mb-[52%] ml-[1%] '>
          <h2 className='md:text-3xl font-extrabold mb-2'>Investment in your financial well-being</h2>
          <button className='md:px-4 py-2 bg-blue-500 text-white font-semibold rounded  hover:bg-blue-600'>
            Get Started
          </button>
        </div>
      </motion.div>

      <style jsx>{`
        @media (max-width: 768px) {
          /* Adjust styles for screens up to 768px wide */
          .object-cover {
            /* Adjust the size of the image */
            height: 200px;
          }

          .mb-[52%] {
            /* Adjust the bottom margin of the text container */
            margin-bottom: 40%;
          }

          .ml-[1%] {
            /* Adjust the left margin of the text container */
            margin-left: 1%;
          }

          .md:text-3xl {
            /* Adjust the font size of the heading */
            font-size: 1.5rem;
          }

          .md:px-4 {
            /* Adjust the horizontal padding of the button */
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default FeaturedCard;
