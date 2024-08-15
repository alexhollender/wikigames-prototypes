type QuestionType2 = {
  targetYear: string;
  answerOptions: [string, string, string];
  correctAnswer: number;
};
export type QuestionsType2 = QuestionType2[];

const questions: QuestionsType2 = [
  {
    targetYear: "1975",
    answerOptions: ["Tim was born", "Jill was born", "Erica was born"],
    correctAnswer: 2,
  },
  {
    targetYear: "1655",
    answerOptions: ["George died", "Lisa died", "Jane became president"],
    correctAnswer: 1,
  },
  {
    targetYear: "1883",
    answerOptions: ["Japan became", "America ruled", "Spain played soccer"],
    correctAnswer: 0,
  },
  {
    targetYear: "1775",
    answerOptions: ["columbus", "gold", "trees"],
    correctAnswer: 1,
  },
];

export default questions;
