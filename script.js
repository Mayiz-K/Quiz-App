let globalIndex = 0
let score = 0
let score2 = 0

const questions = ["Who won the 2024 Las Vegas Grand Prix?", "Why did Charles Leclerc crash at the 2022 French Grand Prix while leading the race?", "Who is the engine supplier for the Alpine F1 Team?", "When did Lewis Hamilton win his first World Drivers Championship?", "Did Nico Hulkenburg ever win a race?"];
const answers = ["george russell", "oversteer", "renault", "2008", "no"];

function handleSubmit() {
  const input = document.getElementById("answer").value
  const typedAnswer = input.toLowerCase()

  if (answers[globalIndex] == typedAnswer && globalIndex < 5) {
    button.disabled = true
    document.getElementById("question").innerHTML = "Correct!!!"
    score += 1
  }

  else if (answers[globalIndex] != typedAnswer && globalIndex < 5) {
    button.disabled = true;
    document.getElementById("question").innerHTML = "Incorrect!!!"
  }
    

  setTimeout(() => {
    globalIndex += 1
    document.getElementById("question").innerHTML = questions[globalIndex]
    button.disabled = false

  if (globalIndex == 5) {
    button.disabled = true;
    document.getElementById("question").innerHTML = "Quiz Over! Your score is " + score + "/5";
    score2 = score
    globalIndex = 0
    score = 0
    document.getElementById("answer").value = ""
    return;
  }
    
    /// add restart button that restarts the quiz without refreshing the page

  }, 1000);
}

window.onload = function() {
    document.getElementById("question").innerHTML = questions[0]
    document.getElementById("button")
}