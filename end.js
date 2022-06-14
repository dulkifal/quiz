const username = document.getElementById('username')
const saveScoreBtn = document.getElementById('saveScoreBtn')
const mostRecentScore = localStorage.getItem('mostRecentScore')
const finalScore = document.getElementById('finalScore')
const highScore = JSON.parse(localStorage.getItem('highScores')) || []

console.log(highScore);
finalScore.innerText = mostRecentScore



username.addEventListener('keyup', ( )=>{
    
  console.log(username.value);
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = e =>{
e.preventDefault();
const score = {
    score: mostRecentScore,
    name: username.value

}
console.log(score);
highScore.push(score)
highScore.sort((a,b)=> b.score - a.score)
highScore.splice(5)
localStorage.setItem('highScores', JSON.stringify(highScore))
window.location.assign('/')

console.log(highScore);

}