//=========
//VARIABLES
//=========

var totalRight = 0;
var totalWrong = 0;
var totalUnanswered = 0;
var intervalId;
var clockRunning = false;
var stopwatch = {
    time: 15,
    start: function () {
        intervalId = setInterval(stopwatch.count, 100);
        clockRunning = true;
        var converted = stopwatch.timeConverter(stopwatch.time);
    },
    count: function () {
        if (stopwatch.time > 0) {
            stopwatch.time--;
            var converted = stopwatch.timeConverter(stopwatch.time);
            console.log(converted);
            $("#displayTime").text(converted);
        }
        if (stopwatch.time === 0 && $("#display1").is(":visible")) {
            checkAnswerUnanswered();
            $("#display1, #displayTime").hide();
            $("#display1Time").show();
            setTimeout(function () {
                $("#display1Time").hide();
                $("#display2, #displayTime").show();
                resetTimer();
            }, 2000);
        }
        if (stopwatch.time === 0 && $("#display2").is(":visible")) {
            checkAnswerUnanswered();
            $("#display2, #displayTime").hide();
            $("#display2Time").show();
            setTimeout(function () {
                $("#display2Time").hide();
                $("#display3, #displayTime").show();
                resetTimer();
            }, 2000);
        }
        if (stopwatch.time === 0 && $("#display3").is(":visible")) {
            checkAnswerUnanswered();
            $("#display3, #displayTime").hide();
            $("#display3Time").show();
            setTimeout(function () {
                $("#display3Time").hide();
                $("#display4, #displayTime").show();
                resetTimer();
            }, 2000);
        }
        if (stopwatch.time === 0 && $("#display4").is(":visible")) {
            checkAnswerUnanswered();
            $("#display4, #displayTime").hide();
            $("#display4Time").show();
            setTimeout(function () {
                $("#display4Time").hide();
                $("#display5, #restartButton").show();
            }, 2000);
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

function checkAnswerRight() {
    totalRight++;
    $("#totalRight").text(totalRight);
    clearInterval(intervalId);
}
function checkAnswerWrong() {
    totalWrong++;
    $("#totalWrong").text(totalWrong);
    clearInterval(intervalId);
}
function checkAnswerUnanswered() {
    totalUnanswered++;
    $("#totalUnanswered").text(totalUnanswered);
    clearInterval(intervalId);
}
function resetTimer() {
    stopwatch.time = 15;
    var converted = stopwatch.timeConverter(stopwatch.time);
    $("#displayTime").text(converted);
    stopwatch.start();
}
function resetMatch() {
    totalRight = 0; $("#totalRight").text(totalRight);
    totalWrong = 0; $("#totalWrong").text(totalWrong);
    totalUnanswered = 0; $("#totalUnanswered").text(totalUnanswered);
    resetTimer();
}

//===============
//EVENT LISTENERS
//===============

//Event Listeners for Starting and Restarting the Game
$("#startButton").on("click", function () {
    $("#displayTime, #display1").show();
    $("#startButton").hide();
    stopwatch.start();
});
$("#restartButton").on("click", function () {
    $("#displayTime, #display1").show();
    $("#display5, #restartButton").hide();
    resetMatch();
});

//Answers: Batch One
$("#answerChoice-A1, #answerChoice-A2, #answerChoice-A3, #answerChoice-A4").on("click", function () {
    if ($(this).attr("data-name") === "Mild High Club") {
        checkAnswerRight();
        $("#display1, #displayTime").hide();
        $("#display1Right").show();
    } else {
        checkAnswerWrong();
        $("#display1, #displayTime").hide();
        $("#display1Wrong").show();
    }
    //Change to following question
    setTimeout(function () {
        $("#display1, #display1Right, #display1Wrong").hide();
        $("#display2, #displayTime").show();
        resetTimer();
    }, 2000);
});

//Answers: Batch Two
$("#answerChoice-B1, #answerChoice-B2, #answerChoice-B3, #answerChoice-B4").on("click", function () {
    if ($(this).attr("data-name") === "Slowdive") {
        checkAnswerRight();
        $("#display2, #displayTime").hide();
        $("#display2Right").show();
    } else {
        checkAnswerWrong();
        $("#display2, #displayTime").hide();
        $("#display2Wrong").show();
    }
    //Change to following question
    setTimeout(function () {
        $("#display2, #display2Right, #display2Wrong").hide();
        $("#display3, #displayTime").show();
        resetTimer();
    }, 2000);
});

//Answers: Batch Three
$("#answerChoice-C1, #answerChoice-C2, #answerChoice-C3, #answerChoice-C4").on("click", function () {
    if ($(this).attr("data-name") === "Kevin Abstract") {
        checkAnswerRight();
        $("#display3, #displayTime").hide();
        $("#display3Right").show();
    } else {
        checkAnswerWrong();
        $("#display3, #displayTime").hide();
        $("#display3Wrong").show();
    }
    //Change to following question
    setTimeout(function () {
        $("#display3, #display3Right, #display3Wrong").hide();
        $("#display4, #displayTime").show();
        resetTimer();
    }, 2000);
});

//Answers: Batch Four
$("#answerChoice-D1, #answerChoice-D2, #answerChoice-D3, #answerChoice-D4").on("click", function () {
    if ($(this).attr("data-name") === "A ghost is birthed") {
        checkAnswerRight();
        $("#display4, #displayTime").hide();
        $("#display4Right").show();
    } else {
        checkAnswerWrong();
        $("#display4, #displayTime").hide();
        $("#display4Wrong").show();
    }
    //Change to following question
    setTimeout(function () {
        $("#display4, #display4Right, #display4Wrong").hide();
        $("#display5, #restartButton").show();
    }, 2000);
});