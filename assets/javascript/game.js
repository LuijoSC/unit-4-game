// Function to execute the code when the page loads
$(document).ready(function(){
// Set the variable = to function to call it
var scoreToGet= scoreGoal();
var scoreSoFar= 0;
var greenDiamond, redDiamond, blueDiamond, brownDiamond
var loses= 0;
var wins= 0;
function scoreGoal () {
// Setting the random number between 1 and 240, then adding 10 so it can get to 250
    return Math.floor(Math.random()*102)+19
} 
console.log(scoreToGet);
// Displaying the random number on "Score to get"
$("#scoreToGet").text(scoreToGet);
function diamondsValue() {
    greenDiamond = green();
    redDiamond= red();
    blueDiamond= blue();
    brownDiamond= brown();   
}
diamondsValue();
function green () {
    return Math.floor(Math.random()*12)+1
}
function red () {
    return Math.floor(Math.random()*12)+1
}
function blue () {
    return Math.floor(Math.random()*12)+1
}
function brown () {
    return Math.floor(Math.random()*12)+1
}
// Assigning function value to each diamond
$("#green").attr('data-value', greenDiamond);
$("#red").attr('data-value', redDiamond);
$("#blue").attr('data-value', blueDiamond);
$("#brown").attr('data-value', brownDiamond);

function resetGame() {
    scoreToGet= scoreGoal();
    scoreSoFar=0;
    diamondsValue();
        $("#green").attr('data-value', greenDiamond);
        $("#red").attr('data-value', redDiamond);
        $("#blue").attr('data-value', blueDiamond);
        $("#brown").attr('data-value', brownDiamond);
    $("#scoreToGet").text(scoreToGet);
    $("#scoreSoFar").text(scoreSoFar);
}

// On click event to call each diamond function (function green, function blue...)
$(".diamonds").on("click", function(event){
// Console log of $(this) to make sure $(".diamonds") is working to assign a value to each diamond and being the same each click
    console.log($(this).attr('data-value'));
    scoreSoFar += parseInt($(this).attr('data-value'));
    console.log(scoreSoFar);
$("#scoreSoFar").text(scoreSoFar);
if(scoreSoFar === scoreToGet){
    console.log("You won!");
    resetGame();
    wins++;
    $("#wins").text(wins);
}else if (scoreSoFar > scoreToGet){
    loses++;
    resetGame();
    $("#loses").text(loses);
}
  });

});