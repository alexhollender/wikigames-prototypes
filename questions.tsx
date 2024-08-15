type QuestionType = {
  question: string;
  answerOptions: [string, string, string, string];
  correctAnswer: string;
};
export type QuestionsType = QuestionType[];

const questions: QuestionsType = [
  {
    question:
      "World War II: Germany and Slovakia invade Poland, beginning the European phase of World War II.",
    answerOptions: ["1937", "1939", "1941", "1944"],
    correctAnswer: "1939",
  },
  {
    question:
      "Xi Jinping is elected as General Secretary of the Chinese Communist Party by the Central Committee, beginning a third term of the paramount leader of China.",
    answerOptions: ["2000", "2009", "2018", "2022"],
    correctAnswer: "2022",
  },
  {
    question:
      "The White Ship sinks in the English Channel, drowning William Adelin, son and heir of Henry I of England.",
    answerOptions: ["1003", "1120", "1349", "1521"],
    correctAnswer: "1120",
  },
  {
    question: "The current constitution of France is adopted.",
    answerOptions: ["1944", "1958", "1964", "1971"],
    correctAnswer: "1958",
  },
  {
    question: "Nine Years' War: Piedmontese troops are defeated by the French.",
    answerOptions: ["1503", "1630", "1644", "1693"],
    correctAnswer: "1693",
  },
  {
    question:
      "Cold War: Korean Air Lines Flight 007 is shot down by a Soviet jet fighter after the commercial aircraft strayed into Soviet airspace, killing all 269 on board, including Congressman Lawrence McDonald.",
    answerOptions: ["1974", "1983", "1999", "2008"],
    correctAnswer: "1983",
  },
  {
    question:
      "English Parliament passes the first Act of Supremacy, making King Henry VIII head of the Anglican Church, supplanting the pope and the Roman Catholic Church.",
    answerOptions: ["1534", "1654", "1697", "1743"],
    correctAnswer: "1534",
  },
  {
    question:
      "The French invasion of Russia fails when Napoleon begins his retreat from Moscow.",
    answerOptions: ["1812", "1850", "1855", "1890"],
    correctAnswer: "1812",
  },
  {
    question:
      "The United States imposes a near-total trade embargo against Cuba.",
    answerOptions: ["1960", "1970", "1980", "1990"],
    correctAnswer: "1960",
  },
  {
    question:
      "Hurricane Wilma becomes the most intense Atlantic hurricane on record with a minimum pressure of 882 mb.",
    answerOptions: ["1968", "1983", "2005", "2021"],
    correctAnswer: "2005",
  },
  {
    question:
      "Mutineers take control of the Chilean penal colony of Punta Arenas in the Strait of Magellan.",
    answerOptions: ["1786", "1811", "1834", "1851"],
    correctAnswer: "1851",
  },
  {
    question:
      "Mines from SM U-73 sink HMHS Britannic, the largest ship lost in the First World War.",
    answerOptions: ["1916", "1922", "1948", "1976"],
    correctAnswer: "1916",
  },
  {
    question: "King Minkhaung I becomes king of Ava.",
    answerOptions: ["1209", "1328", "1400", "1516"],
    correctAnswer: "1400",
  },
  {
    question:
      "The Rochdale Society of Equitable Pioneers commences business at its cooperative in Rochdale, England, starting the Cooperative movement.",
    answerOptions: ["1814", "1844", "1865", "1934"],
    correctAnswer: "1844",
  },
  {
    question: "The Mapuche uprising begins in Chile.",
    answerOptions: ["1818", "1852", "1874", "1881"],
    correctAnswer: "1881",
  },
  {
    question:
      "Seven people are shot and killed and 12 wounded in the Milperra massacre, a shootout between the rival motorcycle gangs Bandidos and Comancheros in Sydney, Australia.",
    answerOptions: ["1965", "1984", "1988", "1997"],
    correctAnswer: "1984",
  },
];

export default questions;
