const questions = document.querySelectorAll(".faq-questions>ul>li");

questions.forEach((event, i) => {
  const question = event.querySelector(".faq-question");
  question.addEventListener("click", () => activeContent(question));
  question.addEventListener("keydown", (e) => handleKeyDown(e, questions, i));
});

function activeContent(question) {
  const questionContent = question.querySelector("p");
  const questionImg = question.querySelector("img");

  questions.forEach((event) => {
    const otherQuestion = event.querySelector(".faq-question");
    if (otherQuestion !== question) {
      disableContent(otherQuestion);
    }
  });

  questionContent.classList.toggle("active");
  const activeClass = questionContent.classList.contains("active");
  questionImg.src = activeClass
    ? "./assets/images/icon-minus.svg"
    : "./assets/images/icon-plus.svg";
}

function disableContent(otherQuestion) {
  const otherQuestionContent = otherQuestion.querySelector("p");
  const otherQuestionImg = otherQuestion.querySelector("img");
  otherQuestionContent.classList.remove("active");
  otherQuestionImg.src = "./assets/images/icon-plus.svg";
}

function handleKeyDown(e, questions, index) {
  const lastIndex = questions.length - 1;

  switch (e.key) {
    case "ArrowUp":
      focusQuestionTitle(index !== 0 ? index - 1 : lastIndex);
      break;
    case "ArrowDown":
      focusQuestionTitle(index !== 0 ? index + 1 : 0);
      break;
    case "Enter":
      activeContent(questions[index]);
      break;
    case "Tab":
      if (index === lastIndex) focusQuestionTitle(0);
      break;

    default:
      break;
  }
}

function focusQuestionTitle(index) {
  questions[index].querySelector(".faq-question-title").focus();
}
