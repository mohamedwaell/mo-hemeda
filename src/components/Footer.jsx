// Footer.jsx
import {  socialLinks } from '../const/index.js';
import * as FaIcons from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" text-black dark:text-white pt-6 pb-2 flex flex-col items-center justify-between gap-5  border-t-2">
      
    
        <div className="flex space-x-4">
          {socialLinks.map((social) => {
            const Icon = FaIcons[social.icon];
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:animate-pulse text-blue-500 hover:scale-110 transition"
                title={social.name}
              >
                <Icon  />
              </a>
            );
          })}
        </div>
        {/* <div>
           <img src="./home/footer-logo.jpg" alt="" className='w-70 mr-5'/>
      
        </div> */}
          
         <div className="mt-4 md:mt-0 text-center md:text-left ">
          <a href='https://hema-cyan.vercel.app/' target='_blank'>
          &copy; {new Date().getFullYear()} HEMA All rights reserved.
          </a>
        </div>

      
    </footer>
  );
};

export default Footer;
