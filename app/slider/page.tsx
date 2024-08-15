"use client";

import * as React from "react";
import * as Utils from "@/utils";
import * as Icons from "@/icons";

type Answer = null | "active" | number;
type Answers = Answer[];

export default function Game2() {
  const [round, setRound] = React.useState<number>(0);
  const [questionNumber, setQuestionNumber] = React.useState<0 | 1 | 2 | 3>(0);
  const [answers, setAnswers] = React.useState<Answers>([
    "active",
    null,
    null,
    null,
  ]);
  const [sliderValue, setSliderValue] = React.useState<string>("1562");

  const currentQuestions = Utils.getQuestions(round);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(event.target.value);
  };

  const calculatePoints = (
    correctAnswer: string,
    currentGuess: string
  ): number => {
    const correctNumber = parseFloat(correctAnswer);
    const guessNumber = parseFloat(currentGuess);
    const difference = Math.abs(correctNumber - guessNumber);

    if (difference === 0) return 100;
    if (difference <= 10) return 50;
    if (difference <= 100) return 10;
    return 0;
  };

  const handleSubmit = (
    index: 0 | 1 | 2 | 3,
    correctAnswer: string,
    currentGuess: string
  ) => {
    const points = calculatePoints(correctAnswer, currentGuess);

    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = points;

      const activeIndex = newAnswers.indexOf("active");
      if (activeIndex !== -1 && activeIndex !== index) {
        newAnswers[activeIndex] = null;
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
        newAnswers[nextIndex] = "active";
      }
      return newAnswers;
    });

    setSliderValue("1562");
  };

  const handleUpdateRound = () => {
    setRound((prevRound) => prevRound + 1);
    setQuestionNumber(0);
    setAnswers(["active", null, null, null]);
    setSliderValue("1612");
  };

  const sumNumbers = (array: number[]): number => {
    return array.reduce((sum, value) => sum + value, 0);
  };

  const numericAnswers = answers.filter(
    (answer): answer is number => typeof answer === "number"
  );

  const answerButtonBaseClasses =
    "cursor-pointer p-2 border border-gray-300 mt-1 rounded-full text-center";

  const buttonBaseClasses =
    "cursor-pointer p-2 rounded-full text-center w-full text-white font-bold";

  return (
    <>
      <main className="w-[360px] h-[720px] border border-gray-300 p-4">
        <div>
          <Header />
          <div className="mb-6 text-gray-500 flex justify-between">
            <div>
              Question {questionNumber + 1} of {currentQuestions.length}
            </div>
            <div>Score: {sumNumbers(numericAnswers)}</div>
          </div>
          <div className="mb-2">Which year did this happen?</div>
          <div className="font-serif text-2xl h-[360px] overflow-y-auto">
            {currentQuestions[questionNumber].question}
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <input
              type="range"
              min="1100"
              max="2024"
              value={sliderValue}
              onChange={handleSliderChange}
              className={`
                w-full
                ${
                  typeof answers[questionNumber] === "number" &&
                  "pointer-events-none opacity-50"
                }
              `}
            />
            <p className="text-center text-lg">Your guess: {sliderValue}</p>
          </div>
          {questionNumber < currentQuestions.length &&
            answers[questionNumber] === "active" && (
              <button
                className={`${buttonBaseClasses} bg-blue-700`}
                onClick={() =>
                  handleSubmit(
                    questionNumber,
                    currentQuestions[questionNumber].correctAnswer,
                    sliderValue
                  )
                }
              >
                Submit
              </button>
            )}
          {questionNumber < currentQuestions.length - 1 &&
            typeof answers[questionNumber] === "number" && (
              <>
                <button
                  className={`${buttonBaseClasses} bg-gray-600`}
                  onClick={advanceQuestion}
                >
                  Next question
                </button>
                <div className="text-center">
                  Correct answer:{" "}
                  {currentQuestions[questionNumber].correctAnswer}
                </div>
                <div className="text-center">
                  Question points: {answers[questionNumber]}
                </div>
              </>
            )}
          {questionNumber === 3 &&
            typeof answers[questionNumber] === "number" && (
              <>
                <button
                  className={`${buttonBaseClasses} bg-black`}
                  onClick={handleUpdateRound}
                >
                  Next round
                </button>
                <div className="text-center">
                  Correct answer:{" "}
                  {currentQuestions[questionNumber].correctAnswer}
                </div>
                <div className="text-center">
                  Question points: {answers[questionNumber]}
                </div>
              </>
            )}
        </div>
      </main>
    </>
  );
}

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
