import React, { useRef } from "react";
import Typewriter from "../components/Text";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
gsap.registerPlugin(SplitText);
const Hema = ({ scrollToFeatures, text, image }) => {
  const timeLine = gsap.timeline();
  const splitRef = useRef(null);
  useGSAP(() => {
    timeLine.fromTo(
      "#home",
      { opacity: 0, x: -400 },
      { opacity: 1, duration: 2, x: 0, ease: "power2.out", delay: 1 }
    );
    timeLine.fromTo(
      "#text",
      { opacity: 0, x: 400 },
      { opacity: 1, duration: 2, x: 0, ease: "power2.out" }
    );

    timeLine.from(".split", {
      x: 150,
      opacity: 0,
      duration: 1.5,
      ease: "power4",
      stagger: 0.04,
    });
  });
  return (
    <>
      <div className="flex flex-col items-center justify-center  md:gap-15 lg:flex-row pb-10 lg:pb-0 min-h-screen overflow-hidden w-full">
        <div
          id="home"
          className="flex items-center justify-center h-full lg:w-1/2"
        >
          <img
            src={image}
            alt=""
            className="h-[50vh] md:h-[80vh] object-cover rounded-full hover:scale-105 transition-transform duration-500 mt-20"
          />
        </div>

        <div
          id="text"
          className="flex items-center justify-center flex-col h-full lg:w-1/2 p-4"
        >
          <h1
            ref={splitRef}
            className="split text-4xl lg:text-6xl text-white mb-5 lg:mb-10 text-center lg:text-right"
          >
            <span className="text-black dark:text-white"> الاستاذ </span>
            <span className="bg-[linear-gradient(to_bottom,#005A61_0%,#008A94_50%,#00B9C7_100%)] bg-clip-text text-transparent">
              محمد حميده
            </span>
          </h1>

          <Typewriter texts={text} />

          <div
            onClick={scrollToFeatures}
            className="shake flex items-center justify-center bg-[linear-gradient(to_bottom,#0F818C_0%,#095259_40%,#073A40_64%,#042326_100%)] py-2 px-4 md:px-6 rounded-lg mt-5 md:mt-10
             text-white text-lg md:text-2xl font-bold hover:scale-105 transition-transform duration-300 shadow-md cursor-pointer"
          >
            <img
              src="/home/yala-pena.png"
              alt=""
              className="w-8 md:w-12 mr-4"
            />
            <button className="bg-[linear-gradient(to_bottom,#CCCCCC_50%,#999999_100%)] bg-clip-text text-transparent">
              يلا بينا
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hema;
