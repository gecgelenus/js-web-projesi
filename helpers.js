function move(direction_x, direction_y) {


    player.velocity.x += player.acceleration.x;
    player.velocity.y += player.acceleration.y;

    if(direction_x == 0 && direction_y == 0){
        player.position.x += player.velocity.x;
        player.position.y += player.velocity.y;
        return;
    }


    // Perform collision check
    for (let i = 0; i < blockArray.length; i++) {
        const block = blockArray[i];
        if (player.position.x + direction_x === block.x && player.position.y + direction_y === block.y) {
            console.log("collision detected");
            player.velocity.x = 0;
            player.velocity.y = 0;
            return; // Exit the function to prevent further movement
        }
    }

    player.position.x += player.velocity.x;
    player.position.y += player.velocity.y;


    // No collision, update the position
    player.position.x += direction_x;
    player.position.y += direction_y;

    // Continue with the rest of your code
    // ...
}


function applyGravity(){

    //check if player is on the ground

    if(player.acceleration.y < 0){
        player.acceleration.y += 1;
        return;
    }

    let onGround = false;
    //check if player is inside a block
    for (let i = 0; i < blockArray.length; i++) {
        const block = blockArray[i];
        if (player.position.x >= block.x && player.position.x <= block.x + block.width && player.position.y + 50 == block.y) {
            console.log("on the ground");
            player.acceleration.y = 0;
            player.velocity.y = 0;
            onGround = true;
            break;
        }
    }



    //if player is not on the ground, apply gravity
    if(!onGround){
        player.acceleration.y += 0.1;
    }
}


