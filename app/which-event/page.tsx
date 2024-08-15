"use client";

import * as React from "react";

import * as Utils from "@/utils";
import * as Icons from "@/icons";

type Answer = null | "active" | true | false;
type Answers = Answer[];

export default function Game3() {
  const [round, setRound] = React.useState<number>(0);
  const [questionNumber, setQuestionNumber] = React.useState<0 | 1 | 2 | 3>(0);
  const [answers, setAnswers] = React.useState<Answers>([
    "active",
    null,
    null,
    null,
  ]);
  const [selectedAnswer, setSelectedAnswer] = React.useState<string>("");

  const currentQuestions = Utils.getQuestions2(round);

  const handleAnswerSelection = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const updateAnswers = (index: 0 | 1 | 2 | 3, result: boolean) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers]; // Copy previous state
      newAnswers[index] = result; // Update the specific index
      const activeIndex = newAnswers.indexOf("active");
      if (activeIndex !== -1 && activeIndex !== index) {
        newAnswers[activeIndex] = null; // Clear the previous "active"
      }
      return newAnswers;
    });
  };

  const advanceQuestion = () => {
    setQuestionNumber((prevQuestionNumber) => {
      const nextQuestionNumber = (prevQuestionNumber + 1) as 0 | 1 | 2 | 3;
      return nextQuestionNumber;
    });

    setAnswers((prevAnswers) => {
      const nextIndex = prevAnswers.indexOf(null);
      const newAnswers = [...prevAnswers];
      if (nextIndex !== -1) {
        newAnswers[nextIndex] = "active"; // Set the next "active"
      }
      return newAnswers;
    });

    setSelectedAnswer("");
  };

  const handleUpdateRound = () => {
    setRound((prevRound) => prevRound + 1);
    setQuestionNumber(0);
    setAnswers(["active", null, null, null]);
  };

  const answerButtonBaseClasses =
    "cursor-pointer p-2 border border-gray-300 mt-1 rounded-full text-center";

  const buttonBaseClasses =
    "cursor-pointer p-2 rounded-full text-center w-full text-white font-bold";

  const AnswerButton: React.FC<{ answer: string }> = ({ answer }) => {
    if (answers[questionNumber] === "active") {
      return (
        <div
          onClick={() => handleAnswerSelection(answer)}
          className={`
                      ${answerButtonBaseClasses}
                      ${
                        answer === selectedAnswer
                          ? "bg-gray-200"
                          : "bg-transparent"
                      }
                    `}
        >
          {answer}
        </div>
      );
    } else {
      return (
        <div
          className={`
              ${answerButtonBaseClasses}
                      ${
                        answer === selectedAnswer &&
                        currentQuestions[questionNumber].answerOptions.indexOf(
                          answer
                        ) === currentQuestions[questionNumber].correctAnswer &&
                        "bg-green-500 border-green-500"
                      }
                      ${
                        answer === selectedAnswer &&
                        currentQuestions[questionNumber].answerOptions.indexOf(
                          answer
                        ) != currentQuestions[questionNumber].correctAnswer &&
                        "bg-red-500 border-red-500"
                      }
                      ${
                        answer != selectedAnswer &&
                        currentQuestions[questionNumber].answerOptions.indexOf(
                          answer
                        ) === currentQuestions[questionNumber].correctAnswer &&
                        "bg-green-200 border-green-200"
                      }
                      ${
                        answer != selectedAnswer &&
                        currentQuestions[questionNumber].answerOptions.indexOf(
                          answer
                        ) != currentQuestions[questionNumber].correctAnswer &&
                        "opacity-50"
                      }
                    `}
        >
          {answer}
        </div>
      );
    }
  };

  return (
    <>
      <main className="w-[360px] h-[720px] border border-gray-300 p-4">
        <div>
          <Header />
          <Progress answers={answers} />
          {/* Question heading */}
          <div className="mb-2 text-center">Which event happened in</div>
          {/* Question */}
          <div className="font-serif text-[38px] text-center mb-8">
            {currentQuestions[questionNumber].targetYear}
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          {/* Answer options */}
          <div className="grid grid-cols-1 gap-3">
            {currentQuestions[questionNumber].answerOptions.map(
              (answerOption, index) => (
                <AnswerButton key={index} answer={answerOption} />
              )
            )}
          </div>
          {questionNumber < currentQuestions.length + 1 &&
            answers[questionNumber] === "active" && (
              <button
                className={`${buttonBaseClasses} bg-blue-700 ${
                  selectedAnswer === "" && "opacity-50 pointer-events-none"
                }`}
                onClick={() =>
                  updateAnswers(
                    questionNumber,
                    currentQuestions[questionNumber].answerOptions.indexOf(
                      selectedAnswer
                    ) === currentQuestions[questionNumber].correctAnswer
                  )
                }
              >
                Submit
              </button>
            )}
          {questionNumber < currentQuestions.length - 1 &&
            (answers[questionNumber] === true ||
              answers[questionNumber] === false) && (
              <button
                className={`${buttonBaseClasses} bg-gray-600`}
                onClick={advanceQuestion}
              >
                Next question
              </button>
            )}
          {questionNumber === 3 &&
            (answers[questionNumber] === true ||
              answers[questionNumber] === false) && (
              <button
                className={`${buttonBaseClasses} bg-black`}
                onClick={handleUpdateRound}
              >
                Next round
              </button>
            )}
        </div>
      </main>
      {/* <div className="mt-14">
        <div>active question: {questionNumber + 1}</div>
        <div>selected answer: {selectedAnswer}</div>
        <div>
          correct answer:{" "}
          {
            currentQuestions[questionNumber].answerOptions[
              currentQuestions[questionNumber].correctAnswer
            ]
          }
        </div>
        <div>
          {answers.map((answer, index) => {
            return (
              <div key={index}>
                question {index + 1}:
                {(answer === null || answer === "active") && "unanswered"}
                {answer === true && "true"}
                {answer === false && "false"}
              </div>
            );
          })}
        </div>
      </div> */}
    </>
  );
}

const Progress: React.FC<{ answers: Answers }> = ({ answers }) => {
  return (
    <div className="mb-6 flex gap-x-5 justify-center">
      {answers.map((answer, index) => {
        return (
          <div key={index}>
            {answer === "active" && <Icons.ProgressIndicators.Active />}
            {answer === null && <Icons.ProgressIndicators.Inactive />}
            {answer === true && <Icons.ProgressIndicators.Correct />}
            {answer === false && <Icons.ProgressIndicators.Incorrect />}
          </div>
        );
      })}
    </div>
  );
};

const Header = () => {
  return (
    <div className="mb-8 flex gap-x-2 items-center">
      <div>
        <Icons.Back />
      </div>
      <div className="flex-1 font-bold">WikiDate Detective</div>
      <div>
        <Icons.More />
      </div>
    </div>
  );
};
