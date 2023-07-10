import React from 'react';
import { motion } from 'framer-motion';

const FeaturedCard = () => {
  return (
    <div className='bg-white w-full mx-auto h-[20%] rounded-xl mt-[2%]'>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className='object-cover w-screen relative'
      >
        <img
          src='fintech.png'
          className='w-full h-[100%] object-cover rounded-xl'
          alt='Fintech'
        />
        <div className='absolute bottom-0 left-0 right-0 p-4 text-white mb-[52%] ml-[1%] 7'>
          <h2 className='md:text-3xl font-extrabold mb-2'>Investment in your financial well-being</h2>
          <button className='md:px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600'>
            Get Started
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturedCard;
