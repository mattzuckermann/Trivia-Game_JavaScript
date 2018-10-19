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
};

//Event listeners for starting the game
$("#startButton").on("click", function () {
    $("#displayTime, #display1").show()
    $("#startButton").hide();
});

$("#startButton").on("click", stopwatch.start);

//Answers: Batch One
$("'#answerChoice1a, #answerChoice2a, #answerChoice3a, #answerChoice4a").on("click", function() {
    $("#display1").hide();
    $("#display2").show();
    alert("This much is working!");
    console.log(this);
});

//Answers: Batch Two
$("#answerChoice1b, #answerChoice2b, #answerChoice3b, #answerChoice4b").on("click", function() {
    $("#display2").hide();
    $("#display3").show();
    alert("This much is working!");
    console.log(this);
});

//Answers: Batch Three
$("#answerChoice1c, #answerChoice2c, #answerChoice3c, #answerChoice4c").on("click", function() {
    $("#display3").hide();
    $("#display4").show();
    alert("This much is working!");
    console.log(this);
});

//Answers: Batch Four
$("#answerChoice1d, #answerChoice2d, #answerChoice3d, #answerChoice4d").on("click", function() {
    $("#display4, #displayTime").hide();
    $("#display5").show();
    alert("This much is working!");
    console.log(this);
});




////If statements to pair up with data-name within event listener to display if answer was right or wrong
// $("#answerChoice1").on("click", function chooseAnswer1() {
//     alert("You got it right!")
// })
// $("#answerChoice2").on("click", function chooseAnswer2() {
//     alert("You got it wrong!")
// })
// $("#answerChoice3").on("click", function chooseAnswer3() {
//     alert("You got it wrong!")
// })
// $("#answerChoice4").on("click", function chooseAnswer4() {
//     alert("You got it wrong!")
// })




















// //Answers: Batch Two
// $("#answerChoice5").on("click", function chooseAnswer1() {
//     alert("You got it wrong!")
//     $("#display2").hide();
//     $("#display3").show();
// })
// $("#answerChoice6").on("click", function chooseAnswer2() {
//     alert("You got it right!")
//     $("#display2").hide();
//     $("#display3").show();
// })
// $("#answerChoice7").on("click", function chooseAnswer3() {
//     alert("You got it wrong!")
//     $("#display2").hide();
//     $("#display3").show();
// })
// $("#answerChoice8").on("click", function chooseAnswer4() {
//     alert("You got it wrong!")
//     $("#display2").hide();
//     $("#display3").show();
// })

// //Answers: Batch Three
// $("#answerChoice9").on("click", function chooseAnswer1() {
//     alert("You got it wrong!")
//     $("#display3").hide();
//     $("#display4").show();
// })
// $("#answerChoice10").on("click", function chooseAnswer2() {
//     alert("You got it wrong!")
//     $("#display3").hide();
//     $("#display4").show();
// })
// $("#answerChoice11").on("click", function chooseAnswer3() {
//     alert("You got it right!")
//     $("#display3").hide();
//     $("#display4").show();
// })
// $("#answerChoice12").on("click", function chooseAnswer4() {
//     alert("You got it wrong!")
//     $("#display3").hide();
//     $("#display4").show();
// })

// //Answers: Batch Four
// $("#answerChoice13").on("click", function chooseAnswer1() {
//     alert("You got it wrong!")
//     $("#display4").hide();
//     $("#display5").show();
// })
// $("#answerChoice14").on("click", function chooseAnswer2() {
//     alert("You got it wrong!")
//     $("#display4").hide();
//     $("#display5").show();
// })
// $("#answerChoice15").on("click", function chooseAnswer3() {
//     alert("You got it wrong!")
//     $("#display4").hide();
//     $("#display5").show();
// })
// $("#answerChoice16").on("click", function chooseAnswer4() {
//     alert("You got it right!")
//     $("#display4").hide();
//     $("#display5").show();
// })