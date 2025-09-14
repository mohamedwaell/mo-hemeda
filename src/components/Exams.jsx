// src/components/ExamComponent.js

import React, { useState } from "react";
import { questionsData } from "../const/exams";

const ExamComponent = () => {
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionChange = (questionId, optionId) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: optionId,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    let calculatedScore = 0;
    questionsData.forEach((question) => {
      const correctAnswer = question.options.find((opt) => opt.isCorrect);
      if (userAnswers[question.id] === correctAnswer.id) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Mathematics Exam
        </h1>

        <form onSubmit={handleSubmit}>
          {questionsData.map((question) => (
            <div
              key={question.id}
              className="mb-8 p-6 bg-gray-50 rounded-lg shadow-md"
            >
              {question.image && (
                <div className="mb-4">
                  <img
                    src={question.image}
                    alt={`Question ${question.id}`}
                    className="max-w-full h-auto rounded-md"
                  />
                </div>
              )}
              <h2 className="text-xl font-semibold text-gray-700 mb-4">{`Question ${question.id}: ${question.questionText}`}</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {question.options.map((option) => (
                  <label key={option.id} className="block cursor-pointer">
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={option.id}
                      checked={userAnswers[question.id] === option.id}
                      onChange={() =>
                        handleOptionChange(question.id, option.id)
                      }
                      className="hidden"
                    />
                    <div
                      className={`
                        p-4 rounded-lg border-2 transition-all duration-200 ease-in-out
                        ${
                          userAnswers[question.id] === option.id
                            ? "bg-blue-500 border-blue-500 text-white"
                            : "bg-white border-gray-300 text-gray-700 hover:bg-blue-50"
                        }
                        ${
                          submitted &&
                          option.isCorrect &&
                          "bg-green-500 border-green-500 text-white"
                        }
                        ${
                          submitted &&
                          userAnswers[question.id] === option.id &&
                          !option.isCorrect &&
                          "bg-red-500 border-red-500 text-white"
                        }
                      `}
                    >
                      <span className="font-medium">{option.text}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center mt-8">
            <button
              type="submit"
              className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              disabled={submitted}
            >
              Submit Exam
            </button>
          </div>
        </form>

        {submitted && (
          <div className="mt-8 p-6 bg-green-100 border-l-4 border-green-500 text-green-700 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Exam Results</h3>
            <p className="text-xl">
              You scored{" "}
              <span className="font-extrabold text-green-900">{score}</span> out
              of{" "}
              <span className="font-extrabold text-green-900">
                {questionsData.length}
              </span>
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExamComponent;
