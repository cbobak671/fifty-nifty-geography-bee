/*-------------------------------- Constants --------------------------------*/
const roundOneQuestions = [
  {
    question: "Which state was the last to be admitted to the union?",
    answers: [
      { text: "Virginia", correct: false },
      { text: "Hawaii", correct: true },
      { text: "Puerto Rico", correct: false },
    ],
  },
  {
    question: "Which state's nickname is the Empire State?",
    answers: [
      { text: "New York", correct: true },
      { text: "Oregon", correct: false },
      { text: "Florida", correct: false },
    ],
  },
  {
    question: "Which state is known for its 10,000 lakes?",
    answers: [
      { text: "Alaska", correct: false },
      { text: "Minnesota", correct: true },
      { text: "Nevada", correct: false },
    ],
  },
  {
    question:
      "Which two rivers combined form the longest continuous river system in the U.S.?",
    answers: [
      { text: "Ohio, Colorado", correct: false },
      { text: "Snake, Columbia", correct: false },
      { text: "Missouri, Mississippi", correct: true },
    ],
  },
  {
    question: "Washington state is home to Tahoma, also known as: ",
    answers: [
      { text: "Mt. Rainier", correct: true },
      { text: "Mt. Hood", correct: false },
      { text: "Mt. St. Helens", correct: false },
    ],
  },
  {
    question: "Which state was the first to be admitted to the union?",
    answers: [
      { text: "Pennsylvania", correct: false },
      { text: "Delaware", correct: true },
      { text: "Massachusetts", correct: false },
    ],
  },
  {
    question: "Which four states from the Four Corners states?",
    answers: [
      { text: "Utah, Colorado, New Mexico, Arizona", correct: true },
      { text: "Maine, Massachusetts, New Hampshire, Vermont", correct: false },
      { text: "Alaska, Hawaii, Maine, Florida", correct: false },
    ],
  },
  {
    question:
      "Where can you find the longest cave system in the United States AND the world??",
    answers: [
      { text: "North Dakota", correct: false },
      { text: "Kentucky", correct: true },
      { text: "Arkansas", correct: false },
    ],
  },
  {
    question:
      "In which state is the deepest lake in the United States located?",
    answers: [
      { text: "Oregon", correct: true },
      { text: "Michigan", correct: false },
      { text: "South Carolina", correct: false },
    ],
  },
  {
    question:
      "Which state is Fort Laramie, an important stop on the Oregon Trail, located?",
    answers: [
      { text: "Nebraska", correct: false },
      { text: "Oregon", correct: false },
      { text: "Wyoming", correct: true },
    ],
  },
  {
    question:
      "What is the name of the national park in which the longest cave sytem in the U.S. can be found?",
    answers: [
      { text: "Mammoth Caves National Park", correct: true },
      { text: "Longest Cave in the World National Park", correct: false },
      { text: "Caves Caves Caves National Park", correct: false },
    ],
  },
  {
    question:
      "What is the name of the national park and deepest lake in the U.S.?",
    answers: [
      { text: "Challenger Deep", correct: false },
      { text: "Lake Baikal", correct: false },
      { text: "Crater Lake", correct: true },
    ],
  },
  {
    question:
      "Which National Park was the first official park designated a National Park?",
    answers: [
      { text: "Acadia", correct: false },
      { text: "Yellowtone", correct: true },
      { text: "Yosemite", correct: false },
    ],
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
  },
  {
    question: "Which is the largest national park in the lower-48?",
    answers: [
      { text: "Death Valley National Park", correct: true },
      { text: "Denali National Park", correct: false },
      { text: "Olympic National Park", correct: false },
    ],
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
      { text: "Teddy Roosevelt", correct: false },
      { text: "Jane Goodall", correct: false },
      { text: "John Muir", correct: true },
    ],
  },
  {
    question: "How many National Parks are there in the U.S.?",
    answers: [
      { text: "50", correct: false },
      { text: "429", correct: true },
      { text: "367", correct: false },
    ],
  },
  {
    question: "Which of these parks is NOT located at or near the ocean?",
    answers: [
      { text: "Dry Tortugas National Park", correct: false },
      { text: "War in the Pacific National Historical Park", correct: false },
      { text: "Capitol Reef National Park", correct: true },
    ],
  },
  {
    question:
      "Which National Park is home to the most native species of trees (~100)?",
    answers: [
      { text: "Seqouia National Park", correct: false },
      { text: "Everglades National Park", correct: false },
      { text: "Great Smoky Mountains National Park", correct: true },
    ],
  },
];

/*---------------------------- Variables (state) ----------------------------*/
const playerNameEl = document.getElementById("player-name");
const questionEl = document.querySelector(".questions");
const answerBtns = document.getElementById("answers");
const skipBtnEl = document.getElementById("skip-btn");
const scoreText = document.querySelector("#score");
const questionCount = document.getElementById("question-count");
const roundTracker = document.getElementById("round-count");
const totalQuestions = 20;

let playerName = "";
let currentQuestionIdx = 0;
let playerScore = 0;
let correctAnswerPoints = 10;
let round = "";
let questionCounter = 0;

/*-------------------------------- Functions --------------------------------*/

function startGame() {
  playerNameEl.innerHTML = `${playerNameEl.innerHTML}`;
  currentQuestionIdx = 0;
  scoreText.HTML = `Score: 0`;
  round = 1;
  questionCounter = 1;
  skipBtnEl.innerHTML = "Next Question";
  questionCount.innerHTML = `Question: ${questionCounter} of 20`;
  roundTracker.innerHTML = `Round 1`;
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
}

function showCurrentAnswers() {
  skipBtnEl.style.display = "none";
  while (answerBtns.firstChild) {
    answerBtns.removeChild(answerBtns.firstChild);
  }
}

function clickedAnswer(e) {
  const clickedBtn = e.target;
  const correctAnswer = clickedBtn.dataset.correct === "true";
  if (correctAnswer) {
    clickedBtn.classList.add("correct");
    playerScore += 10;
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

function showScore() {
  showCurrentAnswers();
  questionEl.innerHTML = `You scored ${playerScore} points!`;
  skipBtnEl.innerHTML = "Restart Game!";
  skipBtnEl.style.display = "block";
}

function handleSkipBtn() {
  currentQuestionIdx++;
  if (currentQuestionIdx < roundOneQuestions.length) {
    displayQuestion();
  } else {
    showScore();
  }
  questionCounter++;
  questionCount.innerHTML = `Question ${questionCounter} of 20`;
}

skipBtnEl.addEventListener("click", () => {
  if (currentQuestionIdx < roundOneQuestions.length) {
    handleSkipBtn();
  } else {
    startGame();
  }
});
startGame();

// function resetQuestion() {
//   skipBtnEl.style.display = "block";
//   while (answerBtns.firstChild) {
//     answerBtns.removeChild(answerBtns.firstChild);
//   }
//   questionCounter++;
//   questionCount.innerText = `Question ${questionCounter} of 10`;
// }

// function chooseAnswer(e) {
//   const clickedAnswer = e.target;
//   const correctAnswer = clickedAnswer.dataset.correct === "true";
//   if (correctAnswer) {
//     clickedAnswer.classList.add("correct");
//   } else {
//     clickedAnswer.classList.add("incorrect");
//   }
//   Array.from(answerBtns.children).forEach((btn) => {
//     if (btn.dataset.correct === "true") {
//       btn.classList.add("correct");
//     }
//     btn.disabled = true;
//   });
//   skipBtnEl.style.display = "block";
// }

// // functions to create:
// // (a) function to welcome player;
// // function welcome() { }
// // (b) function to add player details and update player name;
// // (c) function to display rules of the game;
// // (d) function to keep and add to score;
// // (e) function to tally question count; switch game to Round 2 and update round number;
// // (f) funciton to play music when player wins or loses
// // (g) function to restart game when game ends
// /*----------------------------- Event Listeners -----------------------------*/
