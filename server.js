const expess = require('express');
const app = expess();
const port = process.env.PORT || 80
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
}
);
app.get('/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, '/style.css'));
}
);
app.get('/highScores.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/highScores.html'));
}
);
app.get('/highScore.css', (req, res) => {
  res.sendFile(path.join(__dirname, '/highScore.css'));
}
);
app.get('/highScore.js', (req, res) => {
  res.sendFile(path.join(__dirname, '/highScore.js'));
}
);

app.get('/game.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/game.html'));
}
);
app.get('/questions.json', (req, res) => {
  res.sendFile(path.join(__dirname, '/questions.json'));
}
);

app.get('/game.js', (req, res) => {
  res.sendFile(path.join(__dirname, '/game.js'));
}
);
app.get('/game.css', (req, res) => {
  res.sendFile(path.join(__dirname, '/game.css'));
}
);
app.get('/end.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/end.html'));
}
);
app.get('/end.js', (req, res) => {
  res.sendFile(path.join(__dirname, '/end.js'));
}
);
app.get('/end.css', (req, res) => {
  res.sendFile(path.join(__dirname, '/end.css'));
}
);


app.listen(port, () => console.log(`Server running on port ${port}`));