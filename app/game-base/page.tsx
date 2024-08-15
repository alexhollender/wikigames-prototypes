"use client";

import * as React from "react";

type QuestionType = {
  question: string;
  possibleAnswers: string[];
  correctAnswer: string;
  score: number | null;
};

type RoundTrackerType = {
  roundNumber: number;
  roundScore: number | null;
};

const Game = () => {
  const [roundTracker, setRoundTracker] = React.useState<RoundTrackerType[]>([
    {
      roundNumber: 0,
      roundScore: null,
    },
  ]);
  const [questionSet, setQuestionSet] = React.useState<QuestionType[]>([
    {
      question: "which number is the largest?",
      possibleAnswers: ["13", "33", "1"],
      correctAnswer: "33",
      score: null,
    },
    {
      question: "which number is the largest?",
      possibleAnswers: ["4", "44", "234"],
      correctAnswer: "234",
      score: null,
    },
    {
      question: "which number is the largest?",
      possibleAnswers: ["55", "236", "231"],
      correctAnswer: "236",
      score: null,
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = React.useState<number>(0);

  const handleSubmit = (submittedAnswer: string) => {
    console.log(questionSet[currentQuestion]);
    setQuestionSet((prevQuestionSet) =>
      prevQuestionSet.map((question, index) =>
        index === currentQuestion
          ? {
              ...question,
              score: question.correctAnswer === submittedAnswer ? 1 : 0,
            }
          : question
      )
    );
  };

  const handleNextQuestion = (): void => {
    setCurrentQuestion((previousValue) => previousValue + 1);
  };

  return (
    <main>
      <div>{questionSet[currentQuestion].question}</div>
      <div>
        {questionSet[currentQuestion].possibleAnswers.map((answer, index) => {
          return <div key={index}>{answer}</div>;
        })}
      </div>
      <button
        className="bg-blue-500 text-white py-1 px-3"
        onClick={() => handleSubmit("4")}
      >
        Submit answer
      </button>
      <button
        className="bg-gray-500 text-white py-1 px-3"
        onClick={handleNextQuestion}
      >
        Next question
      </button>

      {/* Debugger */}
      <div className="mt-10 bg-gray-200 text-s flex flex-col gap-y-3">
        {questionSet.map((question, index) => {
          return (
            <div key={index}>
              <div>Question score: {question.score}</div>
            </div>
          );
        })}
        <div>Current question: {questionSet[currentQuestion].question}</div>
      </div>
    </main>
  );
};

export default Game;
