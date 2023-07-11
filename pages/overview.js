import React from 'react';
import { FiArrowRight, FiCheck } from 'react-icons/fi';

const Overview = () => {
  return (
    <div>
      <h1 className='text-5xl text-red-300 ml-[33%]'>Welcome to Our Blog!</h1>
      
      <p className='text-3xl text-center text-black mt-8'>
        In this blog, we cover a wide range of topics related to finance, technology, and entrepreneurship. Whether you're looking for investment advice, business tips, or updates on the latest fintech trends, you'll find it all here.
      </p>
      <button className='text-2xl text-center text-white bg-red-300 border-black-2xl rounded-sm ml-[43%] mt-7'>Categories</button>
      <ul className='text-2xl text-left text-black'>
        <li>
          <FiArrowRight className='inline mr-2' />
          Investing
        </li> 
        <li>
          <FiArrowRight className='inline mr-2' />
          Startups
        </li>
        <li>
          <FiArrowRight className='inline mr-2' />
          Financial Planning
        </li>
        <li>
          <FiArrowRight className='inline mr-2' />
          Technology
        </li>
        <li>
          <FiArrowRight className='inline mr-2' />
          Entrepreneurship
        </li>
      </ul>
      <p className='text-2xl text-center text-black mt-8'>
        Explore our categories to find articles that interest you the most. We strive to provide valuable insights and practical information to help you make informed decisions and succeed in your financial and entrepreneurial endeavors.
      </p>
    </div>
  );
};

export default Overview;
