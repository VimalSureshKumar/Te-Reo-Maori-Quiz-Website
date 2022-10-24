const quizquestions = [	
    {
        question : 'Question 1: What is Seafood in Te Reo Māori?',
        optionA : 'Kai Moana',
        optionB : 'Whakata',
        optionC : 'Painaina',
        optionD : 'Hakari ',
        answer : 'answer1'
    },
	
    {
        question : 'Question 2: What is Church in Te Reo Māori?',
        optionA : 'Hararei',
        optionB : 'Kauhoe',
        optionC : 'Whare Karakia',
        optionD : 'Tamanuitera',
        answer : 'answer3'
    },
	
    {
        question : 'Question 3: What is Entertainment in Te Reo Māori?',
        optionA : 'Painaina',
        optionB : 'Whakata',
        optionC : 'Manuhiri',
        optionD : 'Whakangahau',
        answer : 'answer4'
    },
	
    {
        question : 'Question 4: What are Sports in Te Reo Māori?',
        optionA : 'Perehame',
        optionB : 'Karekare',
        optionC : 'Marino',
        optionD : 'Hokinakina',
        answer : 'answer4'
    },
	
    {
        question : 'Question 5: What is Joyful in Te Reo Māori?',
        optionA : 'Tauera',
        optionB : 'Whiti',
        optionC : 'Harikoakoa',
        optionD : 'Tahamoana',
        answer : 'answer3'
    },
	
    {
        question : 'Question 6: What is Summer in Te Reo Māori?',
        optionA : 'Ramati',
        optionB : 'Makariri',
        optionC : 'Tatoto',
        optionD : 'Takaro',
        answer : 'answer1'
    },
	
    {
        question : 'Question 7: What is Laughing in Te Reo Māori?',
        optionA : 'Tuhitahi',
        optionB : 'Katakata',
        optionC : 'Matakitaki',
        optionD : 'Maranga',
        answer : 'answer2'
    },
	
    {
        question : 'Question 8: What is Watching in Te Reo Māori?',
        optionA : 'Pikiniki',
        optionB : 'Ahua',
        optionC : 'Mahana',
        optionD : 'Matakitaki',
        answer : 'answer4'
    },
	
    {
        question : 'Question 9: What is Quarter in Te Reo Māori?',
        optionA : 'Huawha',
        optionB : 'Tatua',
        optionC : 'Tarau Rao',
        optionD : 'Panekoti',
        answer : 'answer1'
    },
	
    {
        question : 'Question 10: What is Quiz in Te Reo Māori?',
        optionA : 'Tauira',
        optionB : 'Pataitai',
        optionC : 'Putaiao',
        optionD : 'Tikana-A-Iwi',
        answer : 'answer2'
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
        <a href="Hard Level.html" id="repeat"><img src="img_471012.png" alt="retry" class="retry"/></button><a href="Easy Level.html" id="nextlevel"><img src="R (1).png" alt="next" class="next"</a>`;
    }
});