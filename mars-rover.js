const inquirer = require('inquirer');
/* 
Mars rover
> interface/cli to execute commands
  > 
> with prompts to move a rover around a 2nd surface
> rover points a direction and can turn
> can move in the direct it is facing
> outputs direction its facing
*/
/*   0
270 -|- 90
    180 */
class MarsRover {
  constructor() {
    this.xLocation = 0;
    this.yLocation = 0;
    this.direction = 0;
  }
  /**
   * move function
   * @TODO
   */
  move(distance) {
    if(this.direction === 0) {
      this.yLocation += distance
    }
    else if(this.direction === 90) {
      this.xLocation += distance;
    }
    else if(this.direction === 180) {
      this.yLocation -= distance;
    }
    else if (this.direction === 270) {
      this.xLocation -= distance;
    }
  }
  /**
   * Rotate function
   * @TODO
   */
  rotate(degrees) {
    this.direction += degrees;
    if(this.direction === 360) { //set it back to 0
      this.direction = 0;
    }
  }
}
/*  */
const rover = new MarsRover(); //moved outside the function so every call wouldnt reset the class
function driveRover() {
  inquirer.prompt([{
    type: "list",
    name: "action",
    choices: [
      "rotate clockwise",
      "move forward",
      "exit",
    ],
  }]).then(({
    action
  }) => {
    console.log(action);
    switch (action) {
      case 'rotate clockwise': //changed from 'rotate CW'
        rover.rotate(90); // rotate by 90 degress in CW direction
        break;
      case 'move forward':
        rover.move(1); // move 1 step forward
        break;
      case 'exit':
        return;
    }

    console.log(
      `Rover's location ${rover.xLocation}, ${rover.yLocation}: direction: ${rover.direction}`
    );
    return driveRover();
  });
}
driveRover();