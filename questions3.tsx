export type QuestionType3 = {
  id: number;
  content: string;
  year: number;
  correctPosition: number;
};
export type QuestionSetType = QuestionType3[];
export type QuestionSetsType = QuestionSetType[];

const questions3: QuestionSetsType = [
  [
    {
      id: 1,
      content: "The Free Software Foundation is founded",
      year: 1985,
      correctPosition: 1,
    },
    {
      id: 2,
      content: "Pope Paul VI begins the first papal visit to the Americas",
      year: 1965,
      correctPosition: 0,
    },
    {
      id: 3,
      content: "WikiLeaks is launched",
      year: 2006,
      correctPosition: 2,
    },
  ],
  [
    {
      id: 1,
      content:
        "Fidel Castro becomes President of Cuba, replacing Osvaldo Dorticós Torrado",
      year: 1976,
      correctPosition: 0,
    },
    {
      id: 2,
      content:
        "Colombian drug lord Pablo Escobar is shot and killed by police in Medellín",
      year: 1993,
      correctPosition: 2,
    },
    {
      id: 3,
      content:
        "At the University of Utah, Barney Clark becomes the first person to receive a permanent artificial heart",
      year: 1982,
      correctPosition: 1,
    },
  ],
  [
    {
      id: 1,
      content: "The Berlin Wall falls",
      year: 1989,
      correctPosition: 1,
    },
    {
      id: 2,
      content: "The iPhone is released",
      year: 2007,
      correctPosition: 2,
    },
    {
      id: 3,
      content: "The moon landing occurs",
      year: 1969,
      correctPosition: 0,
    },
  ],
  [
    {
      id: 1,
      content: "The Geneva Conference on the Arab–Israeli conflict opens",
      year: 1973,
      correctPosition: 2,
    },
    {
      id: 2,
      content:
        "Snow White and the Seven Dwarfs, the world's first full-length animated feature, premieres at the Carthay Circle Theatre",
      year: 1937,
      correctPosition: 0,
    },
    {
      id: 3,
      content:
        "British Prime Minister Winston Churchill receives the Nobel Prize in Literature",
      year: 1953,
      correctPosition: 1,
    },
  ],
  [
    {
      id: 1,
      content:
        "Martin Luther burns his copy of the papal bull Exsurge Domine outside Wittenberg's Elster Gate",
      year: 1520,
      correctPosition: 1,
    },
    {
      id: 2,
      content:
        "Henry V of England enters Paris alongside his father-in-law King Charles VI of France",
      year: 1420,
      correctPosition: 0,
    },
    {
      id: 3,
      content:
        "Spanish navigator Juan Fernández discovers islands now known as the Juan Fernández Islands off Chile",
      year: 1574,
      correctPosition: 2,
    },
  ],
  [
    {
      id: 1,
      content: "Scarlett Johansson is born",
      year: 1984,
      correctPosition: 1,
    },
    {
      id: 2,
      content: "Simone Biles is born",
      year: 1997,
      correctPosition: 2,
    },
    {
      id: 3,
      content: "Kirsten Dunst is born",
      year: 1982,
      correctPosition: 0,
    },
  ],
  [
    {
      id: 1,
      content: "SpaceX made its first Falcon 1 launch",
      year: 2006,
      correctPosition: 1,
    },
    {
      id: 2,
      content: "Tesla's first car, the Roadster, was released",
      year: 2009,
      correctPosition: 2,
    },
    {
      id: 3,
      content: "Enron files for Chapter 11 bankruptcy",
      year: 2001,
      correctPosition: 0,
    },
  ],
];

export default questions3;
