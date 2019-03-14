//Variables
var winningNum
var currentScore
var c1
var c2
var c3
var c4

//Create a start game button which will initialize everything

//Generate random number between 30 and 70
winningNum = Math.floor(Math.random() * 40 ) + 30;



document.write('Winning Number: ' + winningNum);



//Generate 4 individual random numbers from 1 to 9
for(var i = 0; i < 4; i++){
    var random = Math.floor(Math.random() * 8) + 1;
    var crystals = $("<div>");
        crystals.attr({
            "class": 'crystals',
            "data-random": random
        });
    $(".crystals").append(crystals);
    console.log(random)
}


//Add click function to crystals which will add that number to your currentScore
$(".crystals").on('click', function(){
    console.log($(this).attr('data-random'));
})
//If total score === winningNum then alert("you win!")

//Else total score > winningNum then alert("you lose!")

//Create a restart button 