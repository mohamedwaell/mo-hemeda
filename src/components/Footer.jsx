// Footer.jsx
import {  socialLinks } from '../const/index.js';
import * as FaIcons from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" text-neon-white py-6 h-[30vh] flex flex-col md:flex-row items-center justify-between bg-no-repeat bg-cover bg-gray-900  " style={{backgroundImage: "url('./home/footer.png')"}}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">

      
        <div className="flex space-x-4">
          {socialLinks.map((social) => {
            const Icon = FaIcons[social.icon];
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-red-500 transition"
                title={social.name}
              >
                <Icon  />
              </a>
            );
          })}
        </div>
         <div className="mt-4 md:mt-0 text-center md:text-left ">
          <a href='https://hema-cyan.vercel.app/' target='_blank'>
          &copy; {new Date().getFullYear()} HEMA All rights reserved.
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
