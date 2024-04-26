


const blockArray = Array.from({ length: 1000 }, () => ({  
    name: "",
    width: 50,
    height: 50,
    x: 0,
    y: 0,
    type: {block: grass} 
    })
);

// fill blockArray with blocks of grass type between -500 and 500 on x axis and
// 500 and 1500 on y axis in order
let i = 0;
for (let y = 500; y < 1500; y += 50) {
    for (let x = -500; x < 500; x += 50) {
        blockArray[i].x = x;
        blockArray[i].y = y;
        blockArray[i].name = "grass";
        i++;
    }
}
console.log(i);


const player = {
    position: { x: 0, y: 100},
    acceleration: { x: 0, y: -1},
    velocity: { x: 0, y: 0}
};

