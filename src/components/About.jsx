import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const rootRef = useRef(null);
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const listRef = useRef(null);
  const ctaRef = useRef(null);

  useGSAP(() => {
    if (!rootRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(rootRef.current, { opacity: 0, duration: 0.6 })
      .from(
        headingRef.current?.children || [],
        { y: 40, opacity: 0, stagger: 0.1, duration: 0.8 },
        "<"
      )
      .from(subRef.current, { y: 20, opacity: 0, duration: 0.6 }, "-=0.2")
      .from(
        listRef.current?.children || [],
        { x: -20, opacity: 0, duration: 0.5, stagger: 0.1 },
        "-=0.2"
      )
      .from(ctaRef.current, { scale: 0.9, opacity: 0, duration: 0.4 }, "-=0.1")
      .from(imageRef.current, { x: 60, opacity: 0, duration: 0.8 }, "<");
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative w-full min-h-[80vh] md:min-h-[85vh] flex items-center justify-center flex-wrap-reverse  px-5 md:px-10 my-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full max-w-6xl">
        <div className="order-2 lg:order-1">
          <div ref={headingRef} className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight tracking-tight text-emerald-700 dark:text-emerald-300">
              <span className="mr-2" aria-hidden>
                📘
              </span>
              الاستاذ/ محمد حميدة
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-cyan-700 dark:text-cyan-300 mt-2">
              <span className="mr-2" aria-hidden>
                ✏️
              </span>
              مدرس رياضيات شغوف بخبرة سنوات
            </h2>
          </div>

          <p
            ref={subRef}
            className="mt-6 text-center text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto"
          >
            متخصص في جعل الرياضيات سهلة وممتعة لطلاب من خلفيات ومستويات مهارية
            مختلفة.
          </p>

          <ul
            ref={listRef}
            className="mt-6 space-y-3 text-center text-sm sm:text-base md:text-lg text-gray-800 dark:text-gray-200"
          >
            <li className="flex items-start justify-center gap-2">
              <span>استراتيجيات تعلم مُخصصة</span>
              <svg
                className="w-4 h-4 text-emerald-600"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li className="flex items-start justify-center gap-2">
              <span>أسلوب داعم وصبور</span>
              <svg
                className="w-4 h-4 text-emerald-600"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li className="flex items-start justify-center gap-2">
              <span>سجل مثبت لنجاح الطلاب</span>
              <svg
                className="w-4 h-4 text-emerald-600"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
          </ul>
        </div>

        <div className="order-1 lg:order-2">
          <div className="rounded-2xl bg-emerald-200/70 dark:bg-emerald-900/30 p-3 md:p-5 flex items-center justify-center">
            <img
              ref={imageRef}
              src="/grades/hero.png"
              alt="محمد حميدة"
              className="h-[35vh] w-full lg:h-full lg:w-1/2 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
