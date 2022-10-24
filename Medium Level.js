const quizquestions = [
    {
        question : 'Question 1: What is Beautiful in Te Reo Māori?',
        optionA : 'Poraka',
        optionB : 'Kaitiak',
        optionC : 'Taniwha',
        optionD : 'Ruru',
        answer : 'answer3'
    },
	
    {
        question : 'Question 2: What is Milk in Te Reo Māori?',
        optionA : 'Hinu',
        optionB : 'Raupatu',
        optionC : 'Raupo',
        optionD : 'Miraka',
        answer : 'answer4'
    },
	
    {
        question : 'Question 3: What is Mathematics in Te Reo Māori?',
        optionA : 'Papama',
        optionB : 'Pangarau',
        optionC : 'Ropu Ako',
        optionD : 'Kaupapa',
        answer : 'answer2'
    },
	
    {
        question : 'Question 4: What is Playground in Te Reo Māori?',
        optionA : 'Kaiako',
        optionB : 'Papa Takakaro',
        optionC : 'Pukapuka',
        optionD : 'Ruri',
        answer : 'answer2'
    },
	
    {
        question : 'Question 5: What is High School in Te Reo Māori?',
        optionA : 'Kura Tuarua',
        optionB : 'Kura Naenganui',
        optionC : 'Kura Tuatahi',
        optionD : 'Karaka',
        answer : 'answer1'
    },
	
    {
        question : 'Question 6: What is Television in Te Reo Māori?',
        optionA : 'Kakahu',
        optionB : 'Wharekai',
        optionC : 'Wharepukapuka',
        optionD : 'Ponaka Whakaata',
        answer : 'answer4'
    },
	
    {
        question : 'Question 7: What are Vegetables in Te Reo Māori?',
        optionA : 'Hamipeka',
        optionB : 'Kumara',
        optionC : 'Huawhenua',
        optionD : 'Kapeti',
        answer : 'answer3'
    },
	
    {
        question : 'Question 8: What are Utensils in Te Reo Māori?',
        optionA : 'Taputapu',
        optionB : 'Arani',
        optionC : 'Hehei',
        optionD : 'Kotakota Riwai',
        answer : 'answer1'
    },
	
    {
        question : 'Question 9: What is Fruit in Te Reo Māori?',
        optionA : 'Panana',
        optionB : 'Huarakau',
        optionC : 'Heki',
        optionD : 'Paukena',
        answer : 'answer2'
    },
	
    {
        question : 'Question 10: What is Drink in Te Reo Māori?',
        optionA : 'Pereti',
        optionB : 'Pihikete',
        optionC : 'Paraoa',
        optionD : 'Inu',
        answer : 'answer4'
    },
]

const question = document.querySelector('.question');
const Option1 = document.querySelector('#optionA');
const Option2 = document.querySelector('#optionB');
const Option3 = document.querySelector('#optionC');
const Option4 = document.querySelector('#optionD');
const Submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const totalScore = document.querySelector('#showScore');
let score= 0;

let questionCount = 0;
const loadQuestions = () => 
{
	const questionList = quizquestions[questionCount];
    question.innerText =  questionList.question;
    Option1.innerText = questionList.optionA;
    Option2.innerText = questionList.optionB;
    Option3.innerText = questionList.optionC;
    Option4.innerText = questionList.optionD;
}
loadQuestions();

const getCheckAnswer = () => 
{
	let answer;
    answers.forEach(currenAnswer => 
	{
        if(currenAnswer.checked)
		{
            answer = currenAnswer.id;
        }
    });
    return answer;
};

const deSelectAll = () => 
{
    answers.forEach((currenAnswer) =>
	{
        currenAnswer.checked = false;
    })
}

Submit.addEventListener('click', () => 
{
    const checkAnswer = getCheckAnswer();
	
    if(checkAnswer === quizquestions[questionCount].answer)
	{
        score++;
		document.body.style.color = "green";
    }
	else
	{
		document.body.style.color = "red";
	}
    questionCount++;

    deSelectAll();
    if(questionCount < quizquestions.length)
	{
        loadQuestions();
    }
    else
	{    
        totalScore.classList.remove('scoreArea');
        totalScore.innerHTML = `<h3><span id="score">Your Total Score Is: ${score}/10</span></h3>
        <a href="Medium Level.html" id="repeat"><img src="img_471012.png" alt="retry" class="retry"/></button> <a href="Hard Level.html" id="nextlevel"><img src="R (1).png" alt="next" class="next"</a>`;
    }
});