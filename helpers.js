function move(direction_x, direction_y, deltaTime, pl) {
    if (Number.isNaN(deltaTime)) {
        console.log("deltaTime is NaN");
        return;
    }
    if (pl.acceleration.x != 0) {
        pl.velocity.x += deltaTime * pl.acceleration.x;
    }
    if (pl.acceleration.y != 0) {
        pl.velocity.y += deltaTime * pl.acceleration.y;
    }

    if (direction_x == 0 && direction_y == 0) {
        
        if (pl.velocity.x != 0) {
            pl.position.x += deltaTime * pl.velocity.x;
        }
        if (pl.velocity.y != 0) {
            pl.position.y += deltaTime * pl.velocity.y;
        }
        return;
    }


    // Perform collision check
    for (let i = 0; i < blockArray.length; i++) {
        const block = blockArray[i];
        if (pl.position.x + direction_x === block.x && pl.position.y + direction_y === block.y) {
            console.log("collision detected");
            pl.velocity.x = 0;
            pl.velocity.y = 0;
            return; // Exit the function to prevent further movement
        }
    }



    // No collision, update the position
    pl.position.x += (direction_x + pl.velocity.x) * deltaTime;
    pl.position.y += (direction_x + pl.velocity.x) * deltaTime;
    console.log("movement");
    

    // Continue with the rest of your code
    // ...
}


function applyGravity(deltaTime, pl){
    if (Number.isNaN(deltaTime)) {
        console.log("deltaTime is NaN");
        return;
    }

    let onGround = false;
    //check if player is inside a block
    if (pl.position.y < 0) {
        pl.acceleration.y = 0;
        pl.velocity.y = 0;
        pl.position.y = 0;
        onGround = true;
        return;
    }
    for (let i = 0; i < 400; i++) {
        const block = blockArray[i];

        if (pl.position.x >= block.x && pl.position.x <= block.x + block.width && pl.position.y + 50 == block.y) {
            console.log("on the ground");
            canJump = true;
            pl.acceleration.y = 0;
            pl.velocity.y = 0;
            onGround = true;
            break;
        }
    }
    //check if player is on the ground
    //if player is not on the ground, apply gravity
    if (!onGround) {
        pl.acceleration.y -= deltaTime * 0.1;
    }
    
    
}


