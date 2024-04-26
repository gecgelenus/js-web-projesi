
const cnv = document.getElementById("mainCanvas");
const ctx = cnv.getContext("2d");
const grass = document.getElementById("grass");



// Keyboard input handling
const keys = {};

// Event listeners for keydown and keyup events
document.addEventListener('keydown', (event) => {
  keys[event.key] = true;
});

document.addEventListener('keyup', (event) => {
  keys[event.key] = false;
});
let canJump = true;
// Game update function with keyboard input
function update(deltaTime) {

  
  // Update game state based on keyboard input
  temppos_x = 0;
  temppos_y = 0;

  
    if (keys['A'] || keys['a']) {
        temppos_x += 1;

  }
    if (keys['D'] || keys['d']) {
        temppos_x -= 1;

  }if (keys['W'] || keys['w']) {
    if(canJump){
        player.acceleration.y = -3;
        canJump = false;
    }
  }
    applyGravity(deltaTime, player);
  

    
    move(temppos_x, temppos_y, deltaTime, player);

}


console.log(blockArray);

function render() {

    ctx.resetTransform();
    ctx.translate(player.position.x, player.position.y);
    ctx.clearRect(0, 0, cnv.width*5, cnv.height*5);

    for(i = 0; i < 400; i++){
        ctx.drawImage(blockArray[i].type.block, 0, 0, 50, 50, blockArray[i].x, 
          blockArray[i].y, blockArray[i].width, blockArray[i].height);
    }   

    ctx.fillRect(0, 0 , 50, 50);
    

}


let lastTime = 0; // Initialize the last time
let debugTime = 0;
function gameloop(timestamp){
    const deltaTime = (timestamp - lastTime);
    lastTime = timestamp;

    if (lastTime >= debugTime) {
        debugTime += 1000;
        console.log(deltaTime);
        console.log(player);

    }

    update(deltaTime/10);
    render();


    requestAnimationFrame(gameloop);
}


gameloop();