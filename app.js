let playerScore = 0;
let computerScore = 0;

const UserResult = document.getElementById('UserResult');
const PCResult = document.getElementById('PCResult');
const Result = document.getElementById('Result');
const ScreenUser = document.getElementById('ScreenUser');
const ScreenPC = document.getElementById('ScreenPC');
const imagesUser = [
	'./assets/PiedraIzq.jpg',
	'./assets/PapelIzq.jpg',
	'./assets/TijeraIzq.jpg'
];
const imagesPC = [
	'./assets/PiedraDer.jpg',
	'./assets/PapelDer.jpg',
	'./assets/TijeraDer.jpg'
];

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === 0 && computerSelection === 2) ||
    (playerSelection === 1 && computerSelection === 0) ||
    (playerSelection === 2 && computerSelection === 1)
  ) {
    playerScore++;
    return 'You win!';
  } else {
    computerScore++;
    return 'Computer wins!';
  }
}

function updateScore(roundResult) {
	UserResult.value  = playerScore;
	PCResult.value  = computerScore;
	Result.textContent = roundResult;
}

function resetScore() {
  playerScore = 0;
  computerScore = 0;
  updateScore('Start playing!');
  changeImage(0,0);
}

function computerPlay() {
  const randomIndex = Math.floor(Math.random() * 3);
  return randomIndex;
}

function play(playerSelection) {
	clearInterval(IDinterval);
    const computerSelection = computerPlay();
	changeImage(playerSelection,computerSelection);
    const roundResult = playRound(playerSelection, computerSelection);
    updateScore(roundResult);
	wait(2000);
}

function changeImage(IndexUser,IndexPC) {
	const User =imagesUser[IndexUser];
	const PC =imagesPC[IndexPC];
	ScreenUser.src = User;
	ScreenPC.src = PC;
}

function randomImage() {
	const Index = Math.floor(Math.random() * 3);
	changeImage(Index,Index);
}

function EndGame() {
	alert((playerScore > computerScore)?'You won the Match':((playerScore = computerScore)?'You got even with PC':'You lose the Match'));
	resetScore();
}

window.onload = function() {
	IDinterval = setInterval(randomImage, 200);
  };