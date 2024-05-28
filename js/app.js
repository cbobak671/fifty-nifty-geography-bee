/*-------------------------------- Constants --------------------------------*/
const roundOneQuestions = [
  {
    question: "Which state was the last to be admitted to the union?",
    answers: [
      { text: "Virginia", correct: false },
      { text: "Hawaii", correct: true },
      { text: "Puerto Rico", correct: false },
    ],
    points: 10,
  },
  {
    question: "Which state's nickname is the Empire State?",
    answers: [
      { text: "New York", correct: true },
      { text: "Oregon", correct: false },
      { text: "Florida", correct: false },
    ],
    points: 10,
  },
  {
    question: "Which state is known for its 10,000 lakes?",
    answers: [
      { text: "Alaska", correct: false },
      { text: "Minnesota", correct: true },
      { text: "Nevada", correct: false },
    ],
    points: 10,
  },
  {
    question:
      "Which two rivers combined form the longest continuous river system in the U.S.?",
    answers: [
      { text: "Ohio, Colorado", correct: false },
      { text: "Snake, Columbia", correct: false },
      { text: "Missouri, Mississippi", correct: true },
    ],
    points: 10,
  },
  {
    question: "Washington state is home to Tahoma, also known as: ",
    answers: [
      { text: "Mt. Rainier", correct: true },
      { text: "Mt. Hood", correct: false },
      { text: "Mt. St. Helens", correct: false },
    ],
    points: 10,
  },
  {
    question: "Which state was the first to be admitted to the union?",
    answers: [
      { text: "Pennsylvania", correct: false },
      { text: "Delaware", correct: true },
      { text: "Massachusetts", correct: false },
    ],
    points: 10,
  },
  {
    question: "Which four states form the Four Corners states?",
    answers: [
      { text: "Utah, Colorado, New Mexico, Arizona", correct: true },
      { text: "Maine, Massachusetts, New Hampshire, Vermont", correct: false },
      { text: "Alaska, Hawaii, Maine, Florida", correct: false },
    ],
    points: 10,
  },
  {
    question:
      "Where can you find the longest cave system in the United States AND the world??",
    answers: [
      { text: "North Dakota", correct: false },
      { text: "Kentucky", correct: true },
      { text: "Arkansas", correct: false },
    ],
    points: 10,
  },
  {
    question:
      "In which state is the deepest lake in the United States located?",
    answers: [
      { text: "Oregon", correct: true },
      { text: "Michigan", correct: false },
      { text: "South Carolina", correct: false },
    ],
    points: 10,
  },
  {
    question:
      "Which state is Fort Laramie, an important stop on the Oregon Trail, located?",
    answers: [
      { text: "Nebraska", correct: false },
      { text: "Oregon", correct: false },
      { text: "Wyoming", correct: true },
    ],
    points: 10,
  },
  {
    question:
      "What is the name of the national park in which the longest cave system in the U.S. can be found?",
    answers: [
      { text: "Mammoth Caves National Park", correct: true },
      { text: "Longest Cave in the World National Park", correct: false },
      { text: "Caves Caves Caves National Park", correct: false },
    ],
    points: 20,
  },
  {
    question:
      "What is the name of the national park and deepest lake in the U.S.?",
    answers: [
      { text: "Challenger Deep", correct: false },
      { text: "Lake Baikal", correct: false },
      { text: "Crater Lake", correct: true },
    ],
    points: 20,
  },
  {
    question:
      "Which National Park was the first official park designated a National Park?",
    answers: [
      { text: "Acadia", correct: false },
      { text: "Yellowstone", correct: true },
      { text: "Yosemite", correct: false },
    ],
    points: 20,
  },
  {
    question:
      "Which US National Park service site is the smallest at just 0.02 acres?",
    answers: [
      { text: "Gateway Arch National Park, Missouri", correct: false },
      { text: "Medgar-Myrlie Evers Home, New Mexico", correct: false },
      {
        text: "Thaddeus Kosciuszko National Memorial, Pennsylvania",
        correct: true,
      },
    ],
    points: 20,
  },
  {
    question: "Which is the largest national park in the lower-48?",
    answers: [
      { text: "Death Valley National Park", correct: true },
      { text: "Denali National Park", correct: false },
      { text: "Olympic National Park", correct: false },
    ],
    points: 20,
  },
  {
    question:
      "Which historical artifact is housed at the Independence National Historical Park?",
    answers: [
      { text: "Liberty Bell", correct: true },
      { text: "Declaration of Independence", correct: false },
      { text: "U.S. Constitution", correct: false },
    ],
  },
  {
    question:
      "Which famous writer, naturalist, and conservationist is credited with establishing the National Park System?",
    answers: [
      { text: "David Attenborough", correct: false },
      { text: "Jane Goodall", correct: false },
      { text: "John Muir", correct: true },
    ],
    points: 20,
  },
  {
    question: "How many National Parks are there in the U.S.?",
    answers: [
      { text: "50", correct: false },
      { text: "429", correct: true },
      { text: "367", correct: false },
    ],
    points: 20,
  },
  {
    question: "Which of these parks is NOT located at or near the ocean?",
    answers: [
      { text: "Dry Tortugas National Park", correct: false },
      { text: "War in the Pacific National Historical Park", correct: false },
      { text: "Capitol Reef National Park", correct: true },
    ],
    points: 20,
  },
  {
    question:
      "Which National Park is home to the most native species of trees (~100)?",
    answers: [
      { text: "Seqouia National Park", correct: false },
      { text: "Everglades National Park", correct: false },
      { text: "Great Smoky Mountains National Park", correct: true },
    ],
    points: 20,
  },
];

/*---------------------------- Variables (state) ----------------------------*/

const questionEl = document.querySelector(".questions");
const answerBtns = document.getElementById("answers");
const skipBtnEl = document.getElementById("skip-btn");
const scoreText = document.querySelector("#score");
const questionCount = document.getElementById("question-count");
const roundTracker = document.getElementById("round-count");
const totalQuestions = 20;

let playerName;
let currentQuestionIdx = 0;
let playerScore = 0;
let correctAnswerPoints = 10;
let round = "";
let questionCounter = 0;
let playWinner = document.getElementById("winnerMusic");
let playLoser = document.getElementById("loserMusic");

/*-------------------------------- Functions --------------------------------*/

function startGame() {
  currentQuestionIdx = 0;
  scoreText.HTML = `Score: 0`;
  round = 1;
  questionCounter = 0;
  skipBtnEl.innerHTML = "Next Question";
  questionCount.innerHTML = `Answered: ${questionCounter} of 20`;
  roundTracker.innerHTML = `Round ${1}`;
  scoreText.innerHTML = `Score: ${playerScore}`;
  displayQuestion();
}

function displayQuestion() {
  showCurrentAnswers();
  let currentQuestion = roundOneQuestions[currentQuestionIdx];
  let questionNumber = currentQuestionIdx + 1;
  questionEl.innerHTML = questionNumber + ". " + currentQuestion.question;
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerBtns.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", clickedAnswer);
  });
  updateRound();
}

function showCurrentAnswers() {
  skipBtnEl.style.display = "none";
  while (answerBtns.firstChild) {
    answerBtns.removeChild(answerBtns.firstChild);
  }
}

function updateRound() {
  if (currentQuestionIdx === 10) roundTracker.innerHTML = `Round 2`;
}

function clickedAnswer(e) {
  const clickedBtn = e.target;
  const correctAnswer = clickedBtn.dataset.correct === "true";
  if (correctAnswer && currentQuestionIdx < 10) {
    clickedBtn.classList.add("correct");
    playerScore += 10;
    scoreText.innerHTML = `Score: ${playerScore}`;
  } else if (correctAnswer && currentQuestionIdx >= 10) {
    clickedBtn.classList.add("correct");
    playerScore += 20;
    scoreText.innerHTML = `Score: ${playerScore}`;
  } else {
    clickedBtn.classList.add("incorrect");
  }
  Array.from(answerBtns.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = "true";
  });
  skipBtnEl.style.display = "block";
}

function playWinnerMusic() {
  let audioWinner = playWinner;
  audioWinner.play();
}

function playLoserMusic() {
  let audioLoser = playLoser;
  audioLoser.play();
}

function showFinalScore() {
  showCurrentAnswers();
  if (playerScore >= 200) {
    questionEl.innerHTML = `You scored ${playerScore} points! You're a winner, baby!`;
    playWinnerMusic();
  } else if (playerScore < 200) {
    questionEl.innerHTML = `Womp womp. You didn't score enough points to be a winner, baby. Try again!`;
    playLoserMusic();
  }
  skipBtnEl.innerHTML = "Start Over!";
  skipBtnEl.style.display = "block";
  playerScore = 0;
}

function handleSkipBtn() {
  currentQuestionIdx++;
  if (currentQuestionIdx < roundOneQuestions.length) {
    displayQuestion();
  } else {
    showFinalScore();
  }
  questionCounter++;
  questionCount.innerHTML = `Answered: ${questionCounter} of 20`;
}

skipBtnEl.addEventListener("click", () => {
  if (currentQuestionIdx < roundOneQuestions.length) {
    handleSkipBtn();
  } else {
    startGame();
  }
});

startGame();
