var gamePattern = []

var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).click(function () {
        $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    });

    $("#" + randomChosenColor).click(function () {
        var audio = new Audio("sounds/" + randomChosenColor + ".mp3")
        audio.play();
    });
}



