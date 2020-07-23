//questions array
var questions = [
    {
        prompt: "What is a meta response tag?\n(a) Responsive tag for mobile devices\n\(b) A semantic element\n(c) html response",
        answer: "a"
    }
]
var score = 0;

//for loop
for (var i = 0; i < questions.length; i++) {
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer) {
        score++;
        alert("Correct!");
    } else {
        alert("Incorrect.");
    }
}
    alert("you got" + score + "/" + questions.length.numberofquestions)