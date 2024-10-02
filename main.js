import "./style.css";

const quiz = [
  {
    f: 4,
    s: 2,
    r: 6,
  },
  {
    f: 3,
    s: 3,
    r: "X",
  },
  {
    f: 2,
    s: 2,
    r: 4,
  },
];
const quizAnswer = [
  [4, 6],
  [4, 22, "X"],
  [4, 22],
];

let quizNum = 0;
let answerBtnList = "";
const next = document.getElementById("next");
const answerBtn = document.getElementById("btn-group");
const quizTitle = document.getElementById("quiz");
const changeAnswerBtn = () => {
  answerBtnList = "";
  quizTitle.innerText = `${quiz[quizNum].f} + ${quiz[quizNum].s} = ?`;
  quizAnswer[quizNum].forEach((quiz) => {
    let answer = quiz;
    if (quiz === "X") answer = "정답이 없습니다.";
    answerBtnList += `
      <div class="col-6 mb-2">
        <button class="w-100 btn btn-secondary" id="${quiz}">${answer}</button>
      </div>
    `;
  });
  answerBtn.innerHTML = answerBtnList;
};

answerBtn.addEventListener("click", (e) => {
  let answer = e.target.id;
  let result = answer === quiz[quizNum].r.toString();

  quizAnswer[quizNum].forEach((q) => {
    let btnId = document.getElementById(q);

    btnId.id === quiz[quizNum].r.toString()
      ? btnId.classList.add("bg-success")
      : btnId.classList.add("bg-danger");
  });

  result
    ? document.querySelector("body").classList.add("text-bg-success")
    : document.querySelector("body").classList.add("text-bg-danger");

  next.classList.remove("d-none");
  if (quizNum === 2)
    next.innerHTML = `<button class="btn btn-secondary btn-lg">Restart</button>`;
  e.target.classList.add();
});

const handleNextClick = () => {
  if (quizNum === 2) {
    clear();
    return;
  }
  quizNum += 1;
  changeAnswerBtn();
  removeBodyClass();
  next.classList.add("d-none");
};

const clear = () => {
  quizNum = 0;
  next.innerHTML = `<button class="btn btn-secondary btn-lg">Next</button>`;
  next.classList.add("d-none");
  removeBodyClass();
  changeAnswerBtn();
};

const removeBodyClass = () => {
  document.querySelector("body").classList.remove("text-bg-success");
  document.querySelector("body").classList.remove("text-bg-danger");
};

next.addEventListener("click", handleNextClick);
changeAnswerBtn();
