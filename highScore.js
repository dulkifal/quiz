const highScoreList = document.getElementById('highScoreList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

highScoreList.innerHTML = highScores.map((score, index) => {
  return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join('');