//Variables
var winningNum
var currentScore = 0;
var losses = 0;
var wins = 0;

//Create a start game button which will initialize everything
var startGame = function (){
    $(".crystals").empty();
//Crystal Images
var images = [
    "https://www.bespoke-gems.com/images/gemstones/photo-gallery/1/doug-menadue-bespoke-gems-Finished%20this%20beauty%20last%20week.%20%20This%20is%2029.32%20carats%20of%20golden%20honey%20citrine%20cu.jpg",
    "http://www.chicmags.com/wp-content/uploads/2013/01/Sapphires.jpg",
    "http://www.artiniangems.com/wp-content/uploads/red_gem_OurStory-192x192.png",
    "http://www.store.palagems.com/Images/gem_news/featured_neon_tourm.jpg"
]
//Generate random number between 30 and 70
    winningNum = Math.floor(Math.random() * 40 ) + 30;

    $("#result").html("Winning Number: " + winningNum);
    
    //Generate 4 individual random numbers from 1 to 9
    for(var i = 0; i < 4; i++){
        var random = Math.floor(Math.random() * 8) + 1;
        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random
            });
            crystal.css({
                "background-image":"url('" + images[i] + "')",
                "background-size":"cover"
            })
        $(".crystals").append(crystal);
        console.log(random)
    }

    }

startGame();

//Add click function to crystals which will add that number to your currentScore
$(document).on('click', ".crystal", function () {
    var num = parseInt($(this).attr('data-random'));
    currentScore += num;
    console.log(currentScore)
    $("#current").html("Current Score: " + currentScore);
    if(currentScore > winningNum){
        losses++;
        $("#losses").html("Losses: " + losses);
        currentScore = 0;
        startGame();
    }
    else if(currentScore === winningNum){
        wins++;
        $("#wins").html("Wins: " + wins);
        currentScore = 0;
        startGame();
    }
    
})
//If total score === winningNum then alert("you win!")

//Else total score > winningNum then alert("you lose!")

//Create a restart button 