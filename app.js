"use strict";

var question = document.getElementById("question");
var button = document.querySelectorAll("button");
var progress = document.getElementById("progress");
var questionNumber = 0;
var resultNumber = 0;

var questions = [
    {
        text: "Kam naudingos morkos?",
        choices: ["niekam", "Hitleriui", "Kepenims", "Odai"],
        answer: "Odai"
    },

    {
        text: "Kam naudingi obuoliai?",
        choices: ["Širdžiai", "Kojoms", "Delfinams", "Virškinimui"],
        answer: "Virškinimui"
    },

    {
        text: "Kokias ligas padeda gydyti agrastai?",
        choices: ["Cukrini diabetą", "Kepenų cirozę", "Nemiga", "Vėžį"],
        answer: "Cukrini diabetą"
    },

    {
        text: "Kokio vitamino gausu apelsinuose?",
        choices: ["Vitamino E", "Vitamino A", "Vitamino C", "Vitamino B"],
        answer: "Vitamino C"
    },

    {
        text: "Kokiais dalykais yra turtingi arbūzai?",
        choices: ["Vitaminais", "Mineralais", "Antioksidantais", "Visi teisingi"],
        answer: "Visi teisingi"
    }
]

// Uzkrauna klausima ir atsakymus
var populate = () => {
    setTimeout(function () {
        if (questionNumber < questions.length) {
            question.innerText = questions[questionNumber].text;
            button.forEach((x, i) => {
                x.innerText = `${questions[questionNumber].choices[i]}`;
            });
        } else {
            // uzkrauna rezultatus
            showResult();
        }
    }, 500)
}

// skaiciuoja teisingus atsakymus
var check = guess => {
    if (guess.innerText === questions[questionNumber].answer.toUpperCase()) resultNumber++;
}

// rodo progresa
var showProgress = () => {
    questionNumber++;
    // uzkrauna progreso skaiciu
    progress.innerText = questionNumber;
}
// Priskiria funkcija mygtukams
button.forEach((x) => {
    x.addEventListener("click", function () {
        setTimeout(function () {
            // rodo progresa
            showProgress();
            // uzkrauna klausimus ir atsakymus
            populate();
        }, 10);
        check(this);
    })
});

// result page
var showResult = () => {
    var quiz = document.getElementById("quiz");
    quiz.innerHTML = `<h1>Result ${resultNumber} </h1>`;
}

// pirmas uzkrovimas
populate();