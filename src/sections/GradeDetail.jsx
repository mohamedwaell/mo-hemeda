import { useParams, Link } from "react-router-dom";
import { Grade } from "../const/index.js";
import Hema from "../components/Hema.jsx";
import { useRef } from "react";

const GradeDetial = () => {
  const scrollRef = useRef();
  const { params } = useParams();
  const matchedGrade = Grade.find((grade) => grade.params === params);
  function scrollTonext() {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <section>
      <div>
        <Hema
          scrollToFeatures={scrollTonext}
          text={[`${matchedGrade.name}`]}
          image={"/grades/hero.png"}
        />
      </div>

      <div
        className="flex flex-col items-center justify-center gap-10 h-[100vh] "
        ref={scrollRef}
      >
        <img
          src={matchedGrade.photo}
          className="w-50 md:w-80 rounded-xl"
          alt=""
        />
        <h1 className="text-center text-3xl text-black dark:text-white">
          {matchedGrade.name}
        </h1>
        <Link
          to={"/"}
          className="text-center block text-2xl text-white hover:scale-110 duration-500 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-semibold py-2 px-6 rounded-lg mt-5"
        >
          Go back
        </Link>
      </div>
    </section>
  );
};

export default GradeDetial;
