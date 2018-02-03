const canvas = document.querySelector('#gameArea');
const ctx = canvas.getContext('2d');

const key = [];
const blasts =[];

let playerCenterX = 25;
let playerBaseX = 1;
let playerCenterY = 50;
let playerUpperBaseY = 25;
let playerLowerBaseY = 75;
let moveIncrement = 5;
let blasterPositionX = 25;
let blasterPositionY = 50;

document.addEventListener('keydown', keyHandleDown);
document.addEventListener('keyup', keyHandleUp);

window.onload = function() {
    
    let framesPerSecond = 30;
    setInterval(function() {
        movePlayer();
        fire();
        renderCanvas();
    }, 1000/framesPerSecond);

    
}

function keyHandleDown(e) {
    key[e.keyCode] = true;
}

function keyHandleUp(e) {
    key[e.keyCode] = false;
}

function movePlayer() {
    //keyboard functions
    if(key[39]) {
        // console.log('move right');
        playerCenterX = playerCenterX + moveIncrement;
        playerBaseX = playerBaseX + moveIncrement;
    }
    if(key[37]) {
        // console.log('move left');
        playerCenterX = playerCenterX - moveIncrement;
        playerBaseX = playerBaseX - moveIncrement;
    }
    if(key[40]) {
        // console.log('move down');
        playerCenterY = playerCenterY + moveIncrement;
        playerLowerBaseY = playerLowerBaseY + moveIncrement;
        playerUpperBaseY = playerUpperBaseY + moveIncrement;
    }
    if(key[38]) {
        // console.log('move up');
        playerCenterY = playerCenterY - moveIncrement;
        playerLowerBaseY = playerLowerBaseY - moveIncrement;
        playerUpperBaseY = playerUpperBaseY - moveIncrement;
    }

    // if(key[32]) {
    //     console.log('FIRE!!!!!!!');
    //     fire();
    // }

    //restrict player from going outside of screen
    if(playerCenterX >= canvas.width) {
        // console.log('bounce');
        playerCenterX = playerCenterX - moveIncrement;
        playerBaseX = playerBaseX - moveIncrement;
    }
    if(playerBaseX <= 0) {
        // console.log('bounceback');
        playerCenterX = playerCenterX + moveIncrement;
        playerBaseX = playerBaseX + moveIncrement;
    }
    if(playerLowerBaseY >= canvas.height) {
        // console.log('bounceup')
        playerCenterY = playerCenterY - moveIncrement;
        playerLowerBaseY = playerLowerBaseY - moveIncrement;
        playerUpperBaseY = playerUpperBaseY - moveIncrement;
    }
    if(playerUpperBaseY <= 0) {
        // console.log('rebound');
        playerCenterY = playerCenterY + moveIncrement;
        playerLowerBaseY = playerLowerBaseY + moveIncrement;
        playerUpperBaseY = playerUpperBaseY + moveIncrement;
    }
}

function fire() {
    if(key[32]) {
        console.log('fired');
        // for (let i = playerCenterX; i < canvas.width; i + 100) {
        //     blasterPositionX = blasterPositionX + i;
        // }
    }
}

function renderCanvas() { //display game area and render assets

    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = 'red';
    ctx.fillRect(blasterPositionX, blasterPositionY, 50, 10);

    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(playerCenterX, playerCenterY);
    ctx.lineTo(playerBaseX, playerUpperBaseY);
    ctx.lineTo(playerBaseX, playerLowerBaseY);
    ctx.fill();

    
}





