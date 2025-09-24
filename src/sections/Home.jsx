import { useRef } from "react";
import Fetures from "../components/Fetures";
import Grades from "../components/Grades";
import Hema from "../components/Hema";
import About from "../components/About";
const Home = () => {
  const featuresRef = useRef(null);
  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Hema
        scrollToFeatures={scrollToFeatures}
        text={["ازيك  يا باشا عامل ايه 😊", "مش كفايه لعب ويلا  نذاكر 🤓"]}
        image={"/home/hero.png"}
      />
      <About />
      <div ref={featuresRef}>
        <Fetures />
      </div>
      <Grades />
    </>
  );
};

export default Home;
