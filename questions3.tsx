// Define the type for individual questions
export type QuestionType3 = {
  id: number;
  content: string;
  year: number;
  correctPosition: number;
};

// Define the type for a set of questions
export type QuestionSetType = QuestionType3[];

// Define the type for multiple question sets
export type QuestionSetsType = QuestionSetType[];

const questions3: QuestionSetsType = [
  // First set of questions
  [
    {
      id: 1,
      content: "The Free Software Foundation is founded.",
      year: 1992,
      correctPosition: 2,
    },
    {
      id: 2,
      content: "Pope Paul VI begins the first papal visit to the Americas.",
      year: 1999,
      correctPosition: 1,
    },
    {
      id: 3,
      content: "WikiLeaks is launched.",
      year: 1985,
      correctPosition: 0,
    },
  ],
  // Second set of questions
  [
    {
      id: 4,
      content: "The Berlin Wall falls.",
      year: 1989,
      correctPosition: 1,
    },
    {
      id: 5,
      content: "The iPhone is released.",
      year: 2007,
      correctPosition: 0,
    },
    {
      id: 6,
      content: "The moon landing occurs.",
      year: 1969,
      correctPosition: 2,
    },
  ],
  // Add more sets as needed
];

export default questions3;
