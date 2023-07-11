import React from 'react';
import { BsLightningFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';

const Business = () => {
  return (
    <div className="business-container">
      <button className="text-center text-4xl justify-center ml-[40%] bg-sky-400 text-white">Business Insights</button>
      
      <h2 className=" text-3xl text-black ml-9 mt-9">Latest Articles</h2>
      <ul className=" mt-7">
        <li className="text-2xl hover:underline">
          <a href='#' className="business-link">
            <BsLightningFill className="business-icon" />
            10 Tips for Starting a Successful Business
          </a>
        </li>
        <li className="text-2xl hover:underline">
          <a href='#' className="business-link">
            <BsLightningFill className="business-icon" />
            How to Grow Your Customer Base
          </a>
        </li>
        <li className="text-2xl hover:underline">
          <a href='#' className="business-link">
            <BsLightningFill className="business-icon" />
            Effective Marketing Strategies for Small Businesses
          </a>
        </li>
      </ul>
      <h2 className="text-3xl text-black ml-9 mt-9">Popular Topics</h2>
      <ul className="mt-7">
        <li className="flex text-2xl hover:underline">
          <AiFillStar className="business-icon" />
          Entrepreneurship
        </li>
        <li className="flex text-2xl hover:underline">
          <AiFillStar className="business-icon" />
          Business Planning
        </li>
        <li className="flex text-2xl hover:underline">
          <AiFillStar className="business-icon" />
          Leadership
        </li>
        <li className="flex text-2xl hover:underline">
          <AiFillStar className="business-icon" />
          Market Research
        </li>
      </ul>

      <style jsx>{`
        .business-container {
          background-color: #f8f8f8;
          padding: 20px;
          border-radius: 8px;
        }

        .business-title {
          font-size: 24px;
          color: #333;
          text-align: center;
        }

        .business-section-title {
          font-size: 20px;
          color: #555;
          margin-top: 20px;
        }

        .business-list {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }

        .business-list-item {
          margin-bottom: 10px;
          display: flex;
          align-items: center;
        }

        .business-link {
          color: #333;
          text-decoration: none;
          display: flex;
          align-items: center;
        }

        .business-icon {
          margin-right: 5px;
          font-size: 18px;
        }
      `}</style>
    </div>
  );
};

export default Business;
