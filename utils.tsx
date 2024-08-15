export const getFormattedDate = (daysAhead: number): string => {
  const date = new Date();
  date.setDate(date.getDate() + daysAhead); // Adjust the date by the specified number of days

  const formattedDate = date
    .toLocaleString("en-US", { month: "long", day: "numeric" })
    .replace(
      /\d+/,
      (d: string) =>
        d +
        ["th", "st", "nd", "rd"][
          parseInt(d) % 10 > 3 || Math.floor((parseInt(d) % 100) / 10) === 1
            ? 0
            : parseInt(d) % 10
        ]
    );

  return formattedDate;
};

import { QuestionsType } from "./questions";
import questions from "./questions";

export const getQuestions = (startIndex: number): QuestionsType => {
  return questions.slice(startIndex * 4, startIndex * 4 + 4);
};

import { QuestionsType2 } from "./questions2";
import questions2 from "./questions2";

export const getQuestions2 = (startIndex: number): QuestionsType2 => {
  return questions2.slice(startIndex * 4, startIndex * 4 + 4);
};
