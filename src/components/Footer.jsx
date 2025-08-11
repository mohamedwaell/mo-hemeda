import { useEffect } from "react";
import { socialLinks } from "../const/index.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as FaIcons from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    gsap.fromTo(
      ".footer",
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".footer",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".footer-link",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".footer",
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <footer className="footer text-white pt-6 md:pt-0 pb-2 border-t-3 border-gray-600 bg-no-repeat bg-cover bg-contain bg-gradient-to-r from-blue-900 via-blue-600 to-blue-300">
      <div className="flex items-center justify-center md:justify-around gap-5 flex-col md:flex-row w-full">
        <div className="flex flex-col items-center justify-center gap-5 border-b-5 border-green-500 md:border-0">
          <img
            src="/home/face.png"
            alt=""
            className="w-20 md:w-50 cursor-pointer hover:scale-110 duration-500 footer-link"
          />
          <h1 className="text-2xl md:text-3xl text-white text-center md:text-right footer-link">
            <span className="text-white"> الاستاذ </span>
            <span className="text-green-500">محمد حميده</span>
          </h1>
          <p className="text-[#c4d14f] mb-5 md:mb-0 footer-link">
            <span>❤️❤️</span> <span>الرياضيات بشكل تاني</span>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-10">
          <h1 className="footer-link">
            <span className="text-gray-200 text-2xl md:text-3xl">تواصل معنا</span>
          </h1>
          <div className="flex gap-5 items-center justify-center h-full">
            {socialLinks.map((social) => {
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-2 footer-link"
                  title={social.name}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-8 md:w-10 object-contain hover:scale-110 transition duration-300 ease-in-out"
                  />
                  <p className="text-gray-200 text-[10px]">{social.name}</p>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-[10px] md:text-lg footer-link">
        <a href="https://hema-cyan.vercel.app/" target="_blank">
          &copy; {new Date().getFullYear()} HEMA All rights reserved.
        </a>
      </div>
    </footer>
  );
};

export default Footer;
