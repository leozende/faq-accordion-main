const questions = document.querySelectorAll(".faq-questions>li")

questions.forEach((event, i) => {
    const question = event.querySelector(".faq-question")
    question.addEventListener('click',()=> activeContent(question))
    question.addEventListener('keydown',(e) => {
        if(e.key === 'ArrowUp'){
            if(i !== 0){
                questions[(i-1)].querySelector(".faq-question .faq-question__title").focus()
            } else{
                questions[3].querySelector(".faq-question .faq-question__title").focus()
            }
        }else if(e.key === 'ArrowDown'){
            if(i !== 3){
                questions[(i+1)].querySelector(".faq-question .faq-question__title").focus()
            } else{
                questions[0].querySelector(".faq-question .faq-question__title").focus()
            }
        }else if(e.key === 'Enter'){
            activeContent(question)
        }else if(e.key === 'Tab' ){
            if(i === 3){
                questions[0].querySelector(".faq-question .faq-question__title").focus()
            }
        }
    })
})

function activeContent(question){
    const questionContent = question.querySelector("p")
    const questionImg = question.querySelector("img")

    if(questionContent.classList.contains("active")){
        questionContent.classList.remove("active")
        questionImg.src = "./assets/images/icon-minus.svg"
        
    } else {
        questionContent.classList.add("active")
        questionImg.src = "./assets/images/icon-plus.svg"
    }
}