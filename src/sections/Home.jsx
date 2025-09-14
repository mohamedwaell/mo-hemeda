import { useRef } from "react";
import Fetures from "../components/Fetures";
import Grades from "../components/Grades";
import Hema from "../components/Hema";
import { questionsData } from "../const/exams";
const Home = () => {
  const featuresRef = useRef(null);
  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const totalQuestions = questionsData.length;
  return (
    <>
      <Hema
        scrollToFeatures={scrollToFeatures}
        text={["ازيك  يا باشا عامل ايه 😊", "مش كفايه لعب ويلا  نذاكر 🤓"]}
        image={"/home/hero.png"}
      />

      <div ref={featuresRef}>
        <Fetures />
      </div>
      <Grades />

      <div className=" mb-10 flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-indigo-600 dark:bg-indigo-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-10 h-10 text-white dark:text-gray-800 rounded-full"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 font-bold mb-2">
              امتحان الرياضيات
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg font-bold  ">
              اختبار شامل في النسب والتناسب
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6 text-right">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 font-bold mb-3">
              معلومات الامتحان:
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 font-bold">
              <li>• عدد الأسئلة: {totalQuestions} سؤال</li>
              <li>• نوع الأسئلة: اختيار من متعدد</li>
              <li>• الموضوع: النسب والتناسب</li>
              <li>• الوقت المقدر: 30 دقيقة</li>
            </ul>
          </div>

          <a
            href="/exam"
            className="px-8 py-4 bg-indigo-600 text-white dark:text-gray-200 font-bold rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 text-lg"
          >
            بدء الامتحان
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
