//Variables
var winningNum
var currentScore = 0;
var losses = 0;
var wins = 0;

//Create a start game button which will initialize everything
var startGame = function (){
//Generate random number between 30 and 70
    winningNum = Math.floor(Math.random() * 40 ) + 30;

    document.write('Winning Number: ' + winningNum);

    //Generate 4 individual random numbers from 1 to 9
    for(var i = 0; i < 4; i++){
        var random = Math.floor(Math.random() * 8) + 1;
        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random
            });
        $(".crystals").append(crystal);
        console.log(random)
    }

    }

startGame();

//Add click function to crystals which will add that number to your currentScore
$(".crystal").on('click', function(){
    var num = parseInt($(this).attr('data-random'));
    currentScore += num;
    console.log(currentScore)
    if(currentScore > winningNum){
        lost--;
        $("#losses").html(losses);
        startGame();
    }
    else if(currentScore === winningNum){
        wins++;
        $("#wins").html(wins);
        startGame();
    }
})
//If total score === winningNum then alert("you win!")

//Else total score > winningNum then alert("you lose!")

//Create a restart button 