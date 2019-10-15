$(document).ready(function(){
var scoreToGet= scoreGoal();
function scoreGoal () {
    return Math.floor(Math.random()*241)+10
} 
console.log(scoreToGet);
$("#scoreToGet").text(scoreToGet);
console.log($("#scoreToGet"))
});