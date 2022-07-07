function computerPlay(){
    let i = Math.floor(Math.random() * 100);
    if(i%3==0){
        return "ROCK";
    }
    else if (i%3==1) {
        return "PAPER";
    } 
    else {
        return "SCISSORS";        
    }
}

function play(){
    let userInput = prompt("What do you select: ROCK , PAPER , SCISSORS ")
    userInput = userInput.toUpperCase();

    let computerInput = computerPlay();

    let RS="Rock beats Scissors";
    let PR="Paper beats Rock";
    let SP="Scissors beats paper";

    if(userInput==computerInput){
        console.log(`DRAW , you both chose ${userInput}`)
    }

    else if((userInput=="ROCK")&&(computerInput=="SCISSORS")){
        console.log(`You WIN!, ${RS}`);
    }
    else if((userInput=="ROCK")&&(computerInput=="PAPER")){
        console.log(`You LOSE!, ${PR}`);
    }
    else if((userInput=="SCISSORS")&&(computerInput=="PAPER")){
        console.log(`You WIN!, ${SP}`);
    }
    else if((userInput=="SCISSORS")&&(computerInput=="ROCK")){
        console.log(`You LOSE!, ${RS}`);
    }
    else if((userInput=="PAPER")&&(computerInput=="ROCK")){
        console.log(`You WIN!, ${RS}`);
    }
    else if((userInput=="PAPER")&&(computerInput=="SCISSORS")){
        console.log(`You LOSE!, ${RS}`);
    }

}

for (let i = 0; i < 5; i++) {
    console.log(play())
}
