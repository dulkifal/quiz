const question = document.getElementById('question')
const choices = Array.from(document.getElementsByClassName('choice-text'))
const proressText = document.getElementById('prograssText')
const prograssBarfull = document.getElementById('prograssBarfull')
const loader  = document.getElementById('loader')
const game = document.getElementById('game')




const scoreText = document.getElementById('score')


let currentQuestion = {}
let acceptingAnswers = false
let score = 0
let questionCounter = 0
let availableQuestions = []

const questions = []

fetch('questions.json')
    .then(res => {
        return res.json()
    })
    .then(loadedQuestions => {
        questions.push(...loadedQuestions)
        console.log( loadedQuestions)
      
        startGame()
    }
    ).catch(err => {
        console.error(err)
    }
    )


    

let CORRECT_BONOUS = 10
let MAX_QUESTIONS = 3

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
    game.classList.remove('hidden')
    loader.classList.add('hidden')
}

getNewQuestion =()=>{
  if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
      localStorage.setItem('mostRecentScore', score)
      //go to the end page
      return window.location.assign('end.html')
  }
  questionCounter++
    proressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`
    //Update the progress bar
    prograssBarfull.style.width = `${(questionCounter/MAX_QUESTIONS)*100}%`

  const questionIndex = Math.floor(Math.random() * availableQuestions.length)
  currentQuestion = availableQuestions[questionIndex]
  question.innerText = currentQuestion.question
  choices.forEach(choice => {
      const number = choice.dataset['number']
      choice.innerText = currentQuestion['choice' + number]
  }
  )
  availableQuestions.slice(questionIndex, 1)
  acceptingAnswers = true

}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;
        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']
        const classToApply
         = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONOUS)
        }
        selectedChoice.parentElement.classList.add(classToApply)
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)      
    }
    )

}
)

incrementScore = num => {
    score += num
    scoreText.innerText = score
}


