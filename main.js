
const cnv = document.getElementById("mainCanvas");
const ctx = cnv.getContext("2d");
const grass = document.getElementById("grass");

const position = {
    x: 0,
    y: 0
}



// Keyboard input handling
const keys = {};

// Event listeners for keydown and keyup events
document.addEventListener('keydown', (event) => {
  keys[event.key] = true;
});

document.addEventListener('keyup', (event) => {
  keys[event.key] = false;
});

// Game update function with keyboard input
function update() {
  

  
  // Update game state based on keyboard input
  temppos_x = 0;
  temppos_y = 0;

  
  if (keys['A'] || keys['a']) {
    temppos_x -= 5; 
  }
  if (keys['D'] || keys['d']) {
    temppos_x += 5; 
  }if (keys['W'] || keys['w']) {
    if(player.acceleration.y >= -3){
      player.acceleration.y = -3;
    }
  }
  applyGravity();
  


  move(temppos_x, temppos_y);

}


console.log(blockArray);

function render(){

    ctx.clearRect(0, 0, cnv.width, cnv.height);

    for(i = 0; i < 1000; i++){
        ctx.drawImage(blockArray[i].type.block, 0, 0, 50, 50, blockArray[i].x + player.position.x , 
          blockArray[i].y + player.position.y, blockArray[i].width, blockArray[i].height);
    }

    ctx.fillRect(player.position.x, player.position.y , 50, 50);
    console.log("--------------------");
    console.log("pos x: " + player.position.x);
    console.log("pos y: " + player.position.y);
    console.log("vel x: " + player.velocity.x);
    console.log("vel x: " + player.velocity.y);
    console.log("accel x: " + player.acceleration.x);
    console.log("accel x: " + player.acceleration.y);
    console.log("--------------------");

}



function gameloop(){

    update();
    render();


    requestAnimationFrame(gameloop);
}


gameloop();