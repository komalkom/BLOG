import React from 'react';

const Navbar = () => {
  return (
    <div className='w-full flex bg-white'>
      <div className='w-[17%] p-4 flex items-center h-[85%]'>
        <img src='FINILOGO.png' alt='logo' className='w-[100%] h-[100%] object-contain' />
      </div>
      <div className='flex-grow md:pl-10 pl-5 flex items-center'>
        <div className='flex ml-[26%] text-2xl from-neutral-600 font-extralight font-wow'>
          <a href='#' className='text-gray-800 mx-2 hover:underline font-bold'>Overview</a>
          <a href='#' className='text-gray-800 mx-2 hover:underline font-bold'>Category</a>
          <a href='#' className='text-gray-800 mx-2 hover:underline font-bold'>Business</a>
          <a href='#' className='text-gray-800 mx-2 hover:underline font-bold'>Featured Post</a>
        </div>
        <div className='flex ml-auto'>
          <button className='px-4 py-2 bg-black text-white font-semibold rounded mr-4'>Help</button>
          <button className='px-4 py-2 bg-black text-white font-semibold rounded'>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
