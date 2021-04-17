var question = document.querySelector('#question');
var choices = Array.from(document.querySelectorAll('.choice-text'));
var progressText = document.querySelector('#progressText');
var scoreText = document.querySelector('#score');
var progressBarfull = document.querySelector('#progressBarfull');


var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = {}

var questions = [
    {
    question: 'What does SMAW stand for? ',
    choice1: 'stick metal and women',
    choice2: 'suckers meet and weep',
    choice3: 'shielded metal arc welding',
    choice4: 'shielded metal arse wieling',
    answer: 'shielded metal arc welding'
},
{
    question: 'What does SMAW stand for? ',
    choice1: 'stick metal and women',
    choice2: 'suckers meet and weep',
    choice3: 'shielded metal arc welding',
    choice4: 'shielded metal arse wieling',
    answer: 'shielded metal arc welding' 
},
{
    question: 'What does MIG stand for? ',
    choice1: 'Metal inert gas',
    choice2: 'suckers meet and weep',
    choice3: 'shielded metal arc welding',
    choice4: 'shielded metal arse wieling',
    answer: 'shielded metal arc welding' 
}]

var Score_points = 100

var max_questions = 3

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...queestions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionsCounter > max_questions){
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

questionCounter++
progressText.innerText = 'Questions ${questionCounter} of ${max_questions}'
progressBarfull.getElementsByClassName.width = '${(questionCounter/max_question) * 100}%'

var questionsindex = Math.floor(Math.random() * availableQuestions.length)
currentQuestion = availabelQuestions(auestionIndex)
question.innerText = currentQuestion.question


}


