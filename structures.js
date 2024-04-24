


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


const player = {
    position: { x: 500, y: 100},
    acceleration: { x: 0, y: 0},
    velocity: { x: 0, y: 0}
};