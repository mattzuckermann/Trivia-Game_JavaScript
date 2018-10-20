//=========
//VARIABLES
//=========

var totalRight = 0;
var totalWrong = 0;
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

function checkAnswerRight() {
    totalRight++;
    $("#totalRight").text(totalRight);
}

function checkAnswerWrong() {
    totalWrong++;
    $("#totalWrong").text(totalWrong);
}

function resetTimer() {
    stopwatch.time = 15;
    var converted = stopwatch.timeConverter(stopwatch.time);
    $("#displayTime").text(converted);
}

function resetMatch() {
    totalRight = 0; $("#totalRight").text(totalRight);
    totalWrong = 0; $("#totalWrong").text(totalWrong);
    resetTimer();
}

//===============
//EVENT LISTENERS
//===============

//Event Listeners for Starting and Restarting the Game
$("#startButton").on("click", function () {
    $("#displayTime, #display1").show();
    $("#startButton").hide();
});
$("#restartButton").on("click", function () {
    $("#displayTime, #display1").show();
    $("#display5, #restartButton").hide();
    resetMatch();
});

//Starting & Restarting the Game
$("#startButton").on("click", stopwatch.start);
$("#restartButton").on("click", stopwatch.start);

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
    //Change to correct ot incorrect answer screen
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
    //Change to correct ot incorrect answer screen
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
    //Change to correct ot incorrect answer screen
    setTimeout(function () {
        $("#display4, #display4Right, #display4Wrong").hide();
        $("#display5, #restartButton").show();
        resetTimer();
    }, 2000);
});


//Stop clockRunning once I get to final screen and when correct answer is chosen
//Add Event Listener to say that time is out when time is equal to zero