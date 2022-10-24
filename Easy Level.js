const quizquestions = [
    {
        question : 'Question 1: What is Hello in Te Reo Māori?',
        optionA : 'Aroha',
        optionB : 'Kia Ora',
        optionC : 'Taniwha',
        optionD : 'Whero',
        answer : 'answer2'
    },
	
    {
        question : 'Question 2: What is Goodbye in Te Reo Māori?',
        optionA : 'Ka Kite',
        optionB : 'Tena Koe',
        optionC : 'Nga Mihi',
        optionD : 'Raupatu',
        answer : 'answer1'
    },
	
    {
        question : 'Question 3: What is School in Te Reo Māori?',
        optionA : 'Kuri',
        optionB : 'Rori',
        optionC : 'Rahui',
        optionD : 'Kura',
        answer : 'answer4'
    },
	
    {
        question : 'Question 4: What are Grandparents in Te Reo Māori?',
        optionA : 'Teina',
        optionB : 'Tipuna',
        optionC : 'Tuahine',
        optionD : 'Tungane',
        answer : 'answer2'
    },
	
    {
        question : 'Question 5: What is Father in Te Reo Māori?',
        optionA : 'Tama',
        optionB : 'Wahine',
        optionC : 'Matua',
        optionD : 'Koroua',
        answer : 'answer3'
    },
	
    {
        question : 'Question 6: What is Sister in Te Reo Māori?',
        optionA : 'Teina',
        optionB : 'Tuakana',
        optionC : 'Kuia',
        optionD : 'Matamua',
        answer : 'answer1'
    },
	
    {
        question : 'Question 7: What is Family in Te Reo Māori?',
        optionA : 'Tamarik',
        optionB : 'Tane',
        optionC : 'Whaea',
        optionD : 'Whanau',
        answer : 'answer4'
    },
	
    {
        question : 'Question 8: What is Dog in Te Reo Māori?',
        optionA : 'Manu',
        optionB : 'Kuri',
        optionC : 'Rapeti',
        optionD : 'Ngeru',
        answer : 'answer2'
    },
	
    {
        question : 'Question 9: What is House in Te Reo Māori?',
        optionA : 'Pakitara',
        optionB : 'Kuaha',
        optionC : 'Whare',
        optionD : 'Moenga',
        answer : 'answer3'
    },
	
    {
        question : 'Question 10: What is Fish in Te Reo Māori?',
        optionA : 'Ika',
        optionB : 'Kiore Nui',
        optionC : 'Kiore Iti',
        optionD : 'Ika Koura',
        answer : 'answer1'
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
        totalScore.innerHTML = `<h3><span id="score">Your Total Score is: ${score}/10</span></h3>
        <a href="Easy Level.html" id="repeat"><img src="img_471012.png" alt="retry" class="retry"/></button> <a href="Medium Level.html" id="nextlevel"><img src="R (1).png" alt="next" class="next"</a>`;
    }
});