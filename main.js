
const cnv = document.getElementById("mainCanvas");
const ctx = cnv.getContext("2d");
const grass = document.getElementById("grass");

const position = {
    x: 0,
    y: 0
}

const block = {
    name: "",
    width: 50,
    height: 50,
    x: 0,
    y: 0,
    type: {block: grass}
};

const blockArray = Array.from({ length: 1000 }, () => ({  
    name: "",
    width: 50,
    height: 50,
    x: 0,
    y: 0,
    type: {block: grass} 
    })
);

for(i = 0; i < 100; i++){
    for(j = 0; j < 10; j++){
        blockArray[i*10 + j].x = i*50;
        blockArray[i*10 + j].y = j*50;

    }
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

  if (keys['W'] || keys['w']) {
    temppos_y -= 5; 
  }
  if (keys['A'] || keys['a']) {
    temppos_x -= 5; 
  }
  if (keys['S'] || keys['s']) {
    temppos_y += 5; 
  }
  if (keys['D'] || keys['d']) {
    temppos_x += 5; 
  }

  move(temppos_x, temppos_y);

}


console.log(blockArray);

function render(){

    ctx.clearRect(0, 0, cnv.width, cnv.height);

    for(i = 0; i < 1000; i++){
        ctx.drawImage(blockArray[i].type.block, 0, 0, 50, 50, blockArray[i].x + position.x , blockArray[i].y + position.y, blockArray[i].width, blockArray[i].height);
    }
}



function gameloop(){

    update();
    render();


    requestAnimationFrame(gameloop);
}


gameloop();