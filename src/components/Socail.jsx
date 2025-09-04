import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Socail = (grade) => {
  const scrollRef = useRef(null);
  const href = useRef(null);

  useGSAP(() => {
    if (!scrollRef.current) return;

    // Title animation
    gsap.fromTo(
      href.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: href.current,
          start: "top 85%",
          end: "top 40%",
          scrub: 1,
        },
      }
    );

    // Cards animation
    const boxes = gsap.utils.toArray(scrollRef.current.children);
    boxes.forEach((box) => {
      gsap.fromTo(
        box,
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: box,
            start: "top 85%",
            end: "top 40%",
            scrub: 1.2,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const cards = [
    {
      id: 1,
      title: "يوتيوب",
      img: grade.youtubeImage, // top image for YouTube
      link: grade.youtubeLink,
      points: [
        "هنا هتلاقو شرح مفصل و مبسط علي كل درس",
        "فيديو حل بعد كل درس عشان تطبيق",
        "فيديوهات لحل مسائل التفكير العليا",
      ],
    },
    {
      id: 2,
      title: "تليجرام",
      img: grade.telegramImage, // top image for Telegram
      link: grade.telegramLink,
      points: [
        "هنا بينزل مواعيد نزول الفيديوهات",
        "اي PDF شرح او مذكره بتنزل هناك",
        "واجبات مستمره وحلها",
        "تقدر نتواصل هناك عن فيديوهات انتو عايزينها",
      ],
    },
  ];
  return (
    <section className="my-20 w-full overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-20 my-5 md:my-10">
        <h1
          className="text-3xl md:text-5xl text-green-500 text-center font-bold"
          ref={href}
        >
          المحتوي الدراسي
        </h1>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-11/12 max-w-6xl"
          ref={scrollRef}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className=" bg-gray-300 dark:bg-gray-800 rounded-2xl overflow-hidden flex flex-col items-center justify-between hover:scale-105 duration-500 pb-4"
            >
              {/* Top Image */}
              <img
                src={card.img}
                alt={card.title}
                className="w-full  object-cover"
              />

              {/* Content */}
              <div className="flex flex-col items-center justify-start gap-4  p-4 text-center w-full h-full  ">
                <h3 className="text-3xl font-bold  bg-[linear-gradient(to_bottom,#005A61_0%,#008A94_50%,#00B9C7_100%)] bg-clip-text text-transparent">
                  : {card.title}
                </h3>
                <ul className="">
                  {card.points.map((point, i) => (
                    <li key={i} className=" text-black dark:text-white">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={card.link}
                target="_blank"
                className="px-6 py-2 bg-[linear-gradient(to_bottom,#0F818C_0%,#095259_40%,#073A40_64%,#042326_100%)] text-white font-bold rounded-lg shadow-md transition"
              >
                الدخول
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Socail;
