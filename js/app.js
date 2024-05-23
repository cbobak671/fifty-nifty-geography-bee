/*-------------------------------- Constants --------------------------------*/
const roundOneQuestions = [
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },
];

const roundTwoQuestions = [
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },
];

/*---------------------------- Variables (state) ----------------------------*/
const questionEl = document.getElementById("question");
const answerBtn = document.getElementById("answers");
const skipBtnEl = document.getElementById("skip-btn");

let currentQuestionIdx = 0;
let score = 0;

/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/
function startGame() {
  currentQuestionIdx = 0;
  score = 0;
  skipBtnEl.innerHTML = "Skip";
  nextQuestion();
}

function nextQuestion(){
    let currentQuestion = questions[currentQuestionIdx];
    let questionIdx = currentQuestionIdx + 1;
    questionEl.innerHTML = questionIdx + '. ' + currentQuestion.question;
}

function 
/*----------------------------- Event Listeners -----------------------------*/
