import { useParams, Link } from "react-router-dom";
import { Grade } from "../const/index.js";
import Hema from "../components/Hema.jsx";
import { useRef } from "react";
import Socail from "../components/Socail.jsx";

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

      <Socail {...matchedGrade} />
    </section>
  );
};

export default GradeDetial;
