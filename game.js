var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false;

//Storing user button clicked pattern
$(".btn").click(function event() {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
})

//Generating random number
function nextSequence() {
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    level++;
    $("#level-title").html("Level " + level);

    //Adding animation
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    //Adding sound
    playSound(randomChosenColor);
    animatePress(randomChosenColor);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3")
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(() => {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

//start button
$(".start").click(function () {
    if (!started) {
        nextSequence();
        started = true;
    }
})

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
    } else{
        console.log("wrong");
    }
}