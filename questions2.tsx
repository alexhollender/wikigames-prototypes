type QuestionType2 = {
  targetYear: string;
  answerOptions: [string, string, string];
  correctAnswer: number;
};
export type QuestionsType2 = QuestionType2[];

const questions: QuestionsType2 = [
  {
    targetYear: "1998",
    answerOptions: [
      "The Drudge Report breaks the story about U.S. President Bill Clinton's alleged affair with Monica Lewinsky, which will lead to the House of Representatives' impeachment of him.",
      "Colonel Ibrahim Baré Maïnassara deposes the first democratically elected President of Niger, Mahamane Ousmane, in a military coup.",
      "The Mainichi Shimbun newspaper exposes Japanese archeologist Shinichi Fujimura as a fraud; Japanese archaeologists had based their treatises on his findings.",
    ],
    correctAnswer: 0,
  },
  {
    targetYear: "1204",
    answerOptions: [
      "King John of England submits to Pope Innocent III, who in turn lifts the interdict of 1208 the following year.",
      "Valdemar II of Denmark is recognized as king in Norway.",
      "Mongol forces led by Baiju Noyan (operating under Hulagu Khan's command) win a victory over Kaykaus II, Seljuk ruler of the Sultanate of Rum, and capture Anatolia.",
    ],
    correctAnswer: 1,
  },
  {
    targetYear: "1483",
    answerOptions: [
      "The Medici Family are made official bankers of the Papacy.",
      "A Spanish army under Gonzalo Fernández de Córdoba lands in Calabria, with the purpose of ousting the French and restoring Ferdinand II of Naples to the throne.",
      "The powerful Fernando II, Duke of Braganza is executed in Portugal, followed by more than 80 other noblemen, for his plot against the royal crown",
    ],
    correctAnswer: 2,
  },
  {
    targetYear: "1984",
    answerOptions: [
      "A peace agreement between Kenya and Somalia is signed in the Egyptian capital Cairo. With this agreement, in which Somalia officially renounces its historical territorial claims, relations between the two countries begin to improve.",
      "The Polisario Front, Western Sahara's national liberation movement, declares independence of the territory under the name Sahrawi Arab Democratic Republic.",
      "Andrew Peacock deposes John Howard as Federal Opposition Leader of Australia.",
    ],
    correctAnswer: 0,
  },
  {
    targetYear: "1814",
    answerOptions: [
      "Oberlin College is founded in Oberlin, Ohio.",
      "British brig Lady of the Lake, on passage from Ireland to Quebec, is struck by ice and sunk off Cape St. Francis (Newfoundland) with the loss of between 170 and 265 lives and only 15 survivors.",
      "London Beer Flood: A large vat full of porter owned by Meux's Brewery of London bursts, demolishing buildings and killing 8 people.",
    ],
    correctAnswer: 2,
  },
  {
    targetYear: "1982",
    answerOptions: [
      "Michael Jackson releases Thriller, the best-selling music album of all time.",
      "Atari releases Pong, the first commercially successful video game.",
      "London Beer Flood: A large vat full of porter owned by Meux's Brewery of London bursts, demolishing buildings and killing 8 people.",
    ],
    correctAnswer: 2,
  },
  {
    targetYear: "1965",
    answerOptions: [
      "At Notre Dame Cathedral in Paris, Napoleon Bonaparte crowns himself Emperor of the French.",
      "Alabama ratifies the 13th Amendment to the U.S. Constitution, followed by North Carolina, then Georgia; U.S. slaves were legally free within two weeks.",
      "Puyi becomes Emperor of China at the age of two.",
    ],
    correctAnswer: 1,
  },
  {
    targetYear: "1940",
    answerOptions: [
      "Walt Disney's animated musical film Fantasia is first released at New York's Broadway Theatre, on the first night of a roadshow.",
      "The Soviet Union completes development of the AK-47, one of the first proper assault rifles.",
      "Ruby Bridges becomes the first black child to attend an all-white elementary school in Louisiana.",
    ],
    correctAnswer: 0,
  },
];

export default questions;
