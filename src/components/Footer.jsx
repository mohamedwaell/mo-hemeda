// Footer.jsx
import { socialLinks } from '../const/index.js';
import * as FaIcons from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" text-black dark:text-white pt-6 pb-2 flex flex-col items-center justify-between gap-5  border-t-2">


      <div className="flex space-x-4">
        {socialLinks.map((social) => {
          return(
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
              title={social.name}
            >
              <img src={social.icon} alt={social.name} className="w-10 object-contain" />
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
