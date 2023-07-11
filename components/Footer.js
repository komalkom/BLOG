import React from 'react';
  import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';

  const Footer = () => {
    return (
      <footer className="footer">
        <div className=" border-solid bottom-2 text-2xl font-wow contact">
          <button className=' text-2xl text-white bg-rose-300 hover:bg-rose-200 '>Contact Me</button>
          <p>Email: khandelwalkomal1308@gmail.com</p>
          <p>Phone: 9028975847</p>
        </div>
        <div className=" border-solid rounded-lg bottom-2 text-2xl font-wow contact">
        <button className=' text-2xl text-white bg-rose-300 hover:bg-rose-200 '>SOCIAL MEDIA HANDLES</button>
          <ul>
            <li>
              <a href="https://www.instagram.com/komal_khandelwal13/" target="_blank" rel="noopener noreferrer">
              <span className="flex items-center hover:underline hover:text-cyan-700  ">
                  <FiInstagram className="mr-2" />
                  Instagram
                </span>           
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/komal-khandelwal-14b158255/" target="_blank" rel="noopener noreferrer">
              <span className="flex items-center hover:underline hover:text-cyan-700  ">
                  <FiLinkedin className="mr-2" />
                  LinkedIn
                </span>            
              </a>
            </li>
            <li>
              <a href="https://github.com/komalkom" target="_blank" rel="noopener noreferrer">
              <span className="flex items-center hover:underline hover:text-cyan-700 ">
                  <FiGithub className="mr-2" />
                  Github
                </span>
              </a>
            </li>
          </ul>
        </div>
        <p className=" text-sm font-wow text-black mt-20 ">© 2023 KK-FINS. All rights reserved.</p>

      <style jsx>{`
        .footer {
          background-color: #c7d2fe;
          padding: 20px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
        }

        .contact,
        .social-media {
          margin-bottom: 20px;
        }

        .contact h3,
        .social-media h3 {
          font-size: 18px;
          margin-bottom: 10px;
        }

        .social-media ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }

        .social-media li {
          margin-bottom: 5px;
        }

        .social-media a {
          color: #333;
          text-decoration: none;
        }

        .credit {
          font-size: 14px;
          color: #888;
          text-align: center;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
