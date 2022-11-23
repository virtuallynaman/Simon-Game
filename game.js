var gamePattern = [];
var userClickedPattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

//Generating random number
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    //Adding animation
    $("#" + randomChosenColor).click(function () {
        $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    });
    //Adding sound
    $("#" + randomChosenColor).click(function () {
        var audio = new Audio("sounds/" + randomChosenColor + ".mp3")
        audio.play();
    });
}

//Storing user button clicked pattern
$(".btn").click(function event () {
    var userChosenColor = (this.id);
    userClickedPattern.push(userChosenColor);
})



