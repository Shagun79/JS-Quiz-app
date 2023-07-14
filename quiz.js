const questions = [
  {
    question: " Which is the largest animal  in the world ? ",
    answer: [
      { text: "Shark", correct: "false" },
      { text: "Blue Whale", correct: "true" },
      { text: "Elephant", correct: "false" },
      { text: "Giraffe", correct: "false" },
    ],
  },
  {
    question: " Which is the smallest country in the world ?",

    answer: [
      { text: "Vatican city", correct: "false" },
      { text: "Bhutan", correct: "true" },
      { text: "Nepal", correct: "false" },
      { text: "Shri Lanka ", correct: "false" },
    ],
  },
  {
    question: " What is the largest country in the world ?",

    answer: [
      { text: "Kalhari", correct: "false" },
      { text: "Gobi", correct: "false" },
      { text: "Sahara", correct: "false" },
      { text: "Antarctica", correct: "true" },
    ],
  },
  {
    question: " What is the smallest  continent  in the world ?",

    answer: [
      { text: "Asia", correct: "false" },
      { text: "Australia", correct: "true" },
      { text: "Arctic", correct: "false" },
      { text: "Africa", correct: "false" },
    ],
  },
  {
    question: " What is the smallest  continent  in the world ?",

    answer: [
      { text: "Asia", correct: "false" },
      { text: "Australia", correct: "true" },
      { text: "Arctic", correct: "false" },
      { text: "Africa", correct: "false" },
    ],
  },
];
const questionElement = document.getElementById("questions");
const answerButton = document.getElementById("answer-Buttons");
const nextButton = document.getElementById("next-btn");

var currentQuestionIndex = 0;
var score = 0;

function startQuiz() {
  currentQuestionIndex = 0;

  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  let currentQuestion = questions[currentQuestionIndex];

  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answer.forEach((answer) => {
    let button = document.createElement("button");
    button.innerHTML = answer.text;
    // console.log(answer.text);
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
       button.correct = answer.correct;
       console.log(button.dataset.correct,"81");

       console.log(answer.correct, "83");
     }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextButton.style.display = "none";

  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}
function selectAnswer(e) {
  console.log(e.target, "96");
  const selectBtn = e.target;

  const isCorrect = selectBtn.correct === "true";
  if (isCorrect) {
    selectBtn.classList.add("correct");
    score++;
  } else {
    selectBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
function showScore() {
  resetState();
  questionElement.innerHTML =
    " you Scored  " + score + " out of" + questions.length + "!";
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    Array.from(answerButton.children).forEach((button) => {
      button.classList.add("hide");
    });

    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
