// Footer.jsx
import {  socialLinks } from '../const/index.js';
import * as FaIcons from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-neon-white py-6 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">

        {/* Left */}
       

        

        {/* Right Social Icons */}
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
          &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
