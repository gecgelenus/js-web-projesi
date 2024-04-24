function move(direction_x, direction_y) {

    if(direction_x == 0 && direction_y == 0){
        return;
    }


    // Perform collision check
    for (let i = 0; i < blockArray.length; i++) {
        const block = blockArray[i];
        if (position.x + direction_x === block.x && position.y + direction_y === block.y) {
            // Collision detected, handle it accordingly
            // ...
            return; // Exit the function to prevent further movement
        }
    }

    // No collision, update the position
    position.x += direction_x;
    position.y += direction_y;

    // Continue with the rest of your code
    // ...
}


