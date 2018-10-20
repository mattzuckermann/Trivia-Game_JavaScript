//VARIABLES
//=========
var totalRight = 0
var answers = ["Mild High Club", "Slowdive", "Kevin Abstract", "A ghost is birthed"]
var intervalId;
var clockRunning = false;
var stopwatch = {
    time: 15,
    start: function () {
        if (clockRunning === false) {
            intervalId = setInterval(stopwatch.count, 1000);
            clockRunning = true;
        }
        var converted = stopwatch.timeConverter(stopwatch.time);
    },
    count: function () {
        if (stopwatch.time > 0) {
            stopwatch.time--;
            var converted = stopwatch.timeConverter(stopwatch.time);
            console.log(converted);
            $("#displayTime").text(converted);
        }
    },

    timeConverter: function (t) {
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes === 0) {
            minutes = "00";
        }
        else if (minutes < 10 && minutes > 0) {
            minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
    }
}
//=========
//FUNCTIONS
//=========

//for loop for checking if answer was correct
function checkAnswer() {
    alert("You got it right!");
    this.totalRight++;
    $("#totalRight").text(totalRight);
}

function reset() {
    stopwatch.time = 15;

}

//==============================
//EVENT LISTENERS AND ACTIVATORS
//==============================

//Event Listeners for Starting and Restarting the Game
$("#startButton").on("click", function () {
    $("#displayTime, #display1").show();
    $("#startButton").hide();
});
$("#restartButton").on("click", function () {
    $("#displayTime, #display1").show();
    $("#display5, #restartButton").hide();
});

//Starting & Restarting the Game
$("#startButton").on("click", stopwatch.start);
$("#restartButton").on("click", stopwatch.start);

//Answers: Batch One
$("#answerChoice-A1, #answerChoice-A2, #answerChoice-A3, #answerChoice-A4").on("click", function () {
    if ($(this).attr("data-name") === "Mild High Club") {
        checkAnswer();
    }
    $("#display1").hide();
    $("#display2").show();
});

//Answers: Batch Two
$("#answerChoice-B1, #answerChoice-B2, #answerChoice-B3, #answerChoice-B4").on("click", function () {
    if ($(this).attr("data-name") === "Slowdive") {
        checkAnswer();
    }
    $("#display2").hide();
    $("#display3").show();
});

//Answers: Batch Three
$("#answerChoice-C1, #answerChoice-C2, #answerChoice-C3, #answerChoice-C4").on("click", function () {
    if ($(this).attr("data-name") === "Kevin Abstract") {
        checkAnswer();
    }
    $("#display3").hide();
    $("#display4").show();
});

//Answers: Batch Four
$("#answerChoice-D1, #answerChoice-D2, #answerChoice-D3, #answerChoice-D4").on("click", function () {
    if ($(this).attr("data-name") === "A ghost is birthed") {
        checkAnswer();
    }
    $("#display4, #displayTime").hide();
    $("#display5, #restartButton").show();
});