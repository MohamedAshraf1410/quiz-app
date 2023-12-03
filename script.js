 let currentScreen = 1;
    let username = "";
    let score = 0;
    let currentQuestionIndex = 0;

    const quizData = [
      {
        question: "who has the most zamalek goal contribiutes over time ?",
        options: ["zizo", "shikabala", "hazem emam", "gamal hamza"],
        correctAnswer: "shikabala",
      },
      {
        question: "how many times did zamalek win caf champions league?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "5",
      },
      {
        question: "how many times did zamalek win egyptian primier league?",
        options: ["20", "15", "14", "10"],
        correctAnswer: "14",
      }, 
      {
        question: "who did zamalek beat in champions league super cup 1987?",
        options: ["wydad", "esperance", "ahly", "enimba"],
        correctAnswer: "ahly",
      },
      {
        question: "who scored zamalek winning goal in the last time they won caf champions league?",
        options: ["hazem emam", "gamal hamza", "hossam hassan", "tamer abd elhamied"],
        correctAnswer: "tamer abd elhamied",
      },
    ];

    function startQuiz() {
      username = document.getElementById("username").value;
      if (username === "") {
        alert("Please enter your name");
        return;
      }
      currentScreen = 2;
      showScreen();
      showQuestion();
    }

    function showQuestion() {
      const questionElement = document.getElementById("question");
      const optionsElement = document.getElementById("options");

      if (currentQuestionIndex < quizData.length) {
        const currentQuestion = quizData[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;

        optionsElement.innerHTML = "";
        currentQuestion.options.forEach((option) => {
          const button = document.createElement("button");
          button.textContent = option;
          button.onclick = function () {
            checkAnswer(option);
          };
          optionsElement.appendChild(button);
        });
      } else {
        end();
      }
    }

    function checkAnswer(selectedOption) {
      const currentQuestion = quizData[currentQuestionIndex];
      if (selectedOption === currentQuestion.correctAnswer) {
        score++;
      }
      currentQuestionIndex++;
      setTimeout(showQuestion, 100);
    }

    function end() {
      currentScreen = 3;
      showScreen();
      const userScoreElement = document.getElementById("user-score");
      userScoreElement.textContent = `${username}, Your score is ${score}/${quizData.length}`;
    }

    function showHistory() {
      currentScreen = 4;
      showScreen();
      const historyElement = document.getElementById("history");
      historyElement.innerHTML = "";

      const playerHistory = [
        { name: "mahmoud", score: 3 },
        { name: "ahmed", score: 1 },
        { name: "mohamed", score: 2 },
        { name: "yasser", score: 4 },
        { name: "ali", score: 5},
      ];

      playerHistory.sort((a, b) => b.score - a.score);

      const table = document.createElement("table");
      const Row = table.insertRow(0);
      const name = Row.insertCell(0);
      const score = Row.insertCell(1);

      name.textContent = "Name";
      score.textContent = "Score";

      playerHistory.forEach((player, index) => {
        const row = table.insertRow(index + 1);
        const name2 = row.insertCell(0);
        const score2 = row.insertCell(1);

        name2.textContent = player.name;
        score2.textContent = player.score;
      });

      historyElement.appendChild(table);
    }

    function showScreen() {
      for (let i = 1; i <= 4; i++) {
        const screenElement = document.getElementById(`screen${i}`);
        if (i === currentScreen) {
          screenElement.style.display = "";
        } else {
          screenElement.style.display = "none";
        }
      }
    }