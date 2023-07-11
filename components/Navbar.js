import React from 'react';

const Navbar = () => {
  return (
    <div className='w-[95%] h-fit flex bg-white'>
      <div className=' flex items-center justify-between'>
        <img src='FINILOGO.png' alt='logo' className='h-24' />
        <div className='grid gap-6 grid-cols-2 sm:grid-cols-3  md:grid-cols-6 xl:grid-cols-6 md:gap-9  text-2xl from-neutral-600 font-extralight font-wow'>
          <a href='overview' className='text-gray-800 mx-2 hover:underline font-bold'>Overview</a>
          <a href='category' className='text-gray-800 mx-2 hover:underline font-bold'>Category</a>
          <a href='business' className='text-gray-800 mx-2 hover:underline font-bold'>Business</a>
          <a href='featuredpost' className='text-gray-800 mx-2 hover:underline font-bold'>FeaturedPost</a>
          <button className='px-4 py-2 bg-black text-white font-semibold rounded '>Help</button>
          <button className='px-4 py-2 bg-black text-white font-semibold rounded'>Register</button>
        </div>
        {/* <div className='flex'>
        </div> */}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {

          .w-[10%] {
           
            width: 15%;
          }

          .h-[8%] {
            
            height: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
