
let dice = [0, 0, 0, 0, 0];
let locked = [false,false,false,false,false];

let rolls = 0;

const scoreCard = { ones: 0, twos:0, threes:0, fours:0, fives:0, sixes:0, yatzee:0, total:0 };
let totalScore = 0;

function rollDice(){
    if (rolls <= 3){
        for(let i=0; i<dice.length;i++){
            if (!locked[i]){
                dice[i]=Math.floor(Math.random()*6)+1;
            }
        }
        rolls++;
        updateDisplay();
    }
}

for(let i=0; i<dice.length;i++){
    document.getElementById(`dice${i+1}`).addEventListener('click', function(){  // this is supposed to grab the ID of the dice
        locked[i] = !locked[i];
    });
}

function updateDisplay(){
    for(let i=0; i<dice.length;i++){
        let dieElement = document.getElementById(`dice${i+1}`);
        dieElement.textContent = dice[i];
        dieElement.style.backgroundColor = locked[i] ? 'lightgrey' : 'white';
    }
}

function updateScoreDisplay(){
    document.getElementById('score-ones').textContent = scoreCard.ones;
    document.getElementById('score-twos').textContent = scoreCard.twos;
    document.getElementById('score-threes').textContent = scoreCard.threes;
    document.getElementById('score-fours').textContent = scoreCard.fours;
    document.getElementById('score-fives').textContent = scoreCard.fives;
    document.getElementById('score-sixes').textContent = scoreCard.sixes;
    document.getElementById('total-score').textContent = totalScore;
}

function scoreOnes(){
    let ones = dice.filter(die => die === 1);
    scoreCard.ones = ones.length;
    totalScore += ones.length;
    updateScoreDisplay();
}

function scoreTwos(){
    let twos = dice.filter(die => die === 2);
    scoreCard.twos = twos.length * 2;
    totalScore += twos.length * 2;
    updateScoreDisplay();
}

function scoreThrees(){
    let threes = dice.filter(die => die === 3);
    scoreCard.threes = threes.length * 3;
    totalScore += threes.length * 3;
    updateScoreDisplay();
}   

function scoreFours(){  
    let fours = dice.filter(die => die === 4);
    scoreCard.fours = fours.length * 4;
    totalScore += fours.length * 4;
    updateScoreDisplay();
}   

function scoreFives(){
    let fives = dice.filter(die => die === 5);
    scoreCard.fives = fives.length * 5;
    totalScore += fives.length * 5;
    updateScoreDisplay();
}

function scoreSixes(){
    let sixes = dice.filter(die => die === 6);
    scoreCard.sixes = sixes.length * 6;
    totalScore += sixes.length * 6;
    updateScoreDisplay();
}

// event listeners for scoring
document.getElementById('score-ones').addEventListener('click', scoreOnes);
document.getElementById('score-twos').addEventListener('click', scoreTwos);
document.getElementById('score-threes').addEventListener('click', scoreThrees);
document.getElementById('score-fours').addEventListener('click', scoreFours);
document.getElementById('score-fives').addEventListener('click', scoreFives);
document.getElementById('score-sixes').addEventListener('click', scoreSixes);
