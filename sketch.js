//*Area for varibles
let size = 50; // varible of square size
let black = 0; // varible of background colour

let r = 255; // red
let g = 255; // green
let b = 255; // blue

let hoz; // horizontal
let vert; // vertical

let speedX; // velocity of horrizontal
let speedY; // velocity of vertical

let size1 = 20; // short part of rectangle
let size2 = 60; // long part of rectangle

let rNum1; // random number
let rNum2; // random number
let rNum3; // random number
//*Area for varibles

//Setting up resoloution + static code
function setup() {
  createCanvas(594, 841) //resoloution of canvas
  rNum1 = random(1, 50); // random number between 1 and 50
  rNum2 = random(51, 100); // random number between 51 and 100
  rNum3 = random(101, 150); // random number between 101 and 150
  hoz = random(width); // random horizontal
  vert = random(height); // vertical horizontal
  speedX = random(-1., 5.); //random velocity
  speedY = random(-1., 5.); //random velocity


//* defining X and Y
  for (let y = 0; y < 34; y++) { // 34 rectangles on the y axis
    for (let x = 0; x < 24; x++) { // 24 rectangles on the x axis
      //* defining X and Y

      if(y % 2){ // if the square is even in the grid
        fill(0, 0, 255); // set colour to blue
      }
      else { // otherwise / if even
        fill(255,255,0); //make square yellow
      }

      push // will make noStroke only apply to this rectangle
      noStroke() // no lines
      rect(size * x /2, size * y /2, size, size); // rectagle size and placment
      pop // will make noStroke only apply to this rectangle

      fill(black); // make black
      rectMode(CENTER);
      rect(width/2, 4+height/2, 500, 750); // add square
      rectMode(CORNER);

    }
  }
}// end of function

function draw() { // code that updates


  if (mouseIsPressed) { //while mouse button 1 is being held down
    r = random(255); //random number from one to 255 for r (red)
    g = random(255); //random number from one to 255 for g (green)
    b = random(255); //random number from one to 255 for b (blue)
  }


  let allNum = ((rNum1 + rNum2 + rNum3)/3); /* defineing allNum (all numbers)
  to be all three random numbers added together and dived by 3 */
  allNum = round(allNum); /* with out this, the number would be a float,
  somthing like 62.153623, this would not work so the code must round
  to the nearest interger, in this example that would be 62 */
  fill(r, g, b); /* random number for r, g and b, all added togther in
  there respective places to make a random colour*/
  if (allNum <= 70 ) { // if all numbers added to gether are less than 70
    square(); //create the function "square"

    console.log(allNum + ' square'); /* print the random number as well as
    the name to the console */
  }
  else if (allNum <= 79 && allNum >= 71) { //if the numvers are between 71 and 79
    cross(); //create the function "cross"
    console.log(allNum +' cross');/* print the random number as well as
    the name to the console */
  }
  else { // if neither of the other to conditions are met
    ring(); //create the function "ring"
    console.log(allNum +' ell'); /* print the random number as well as
    the name to the console */
  }


}// end of function

//*creates a function that spawns a cross
function cross() { //function name

  hoz += speedX; //horizontal speed + velocity
  vert += speedY; //vertical speed + velocity


 if (hoz>width-75  || hoz<75  ){ // if the shape touches on of these sides
   speedX = speedX *-1; // reverse its velocity
   r = random(255);// new random colour
   g = random(255);// new random colour
   b = random(255);// new random colour
  }
  else{ // otherwise
    r += 1; // make colour brighter
    g += 1; // make colour brighter
    b += 1; // make colour brighter

  }

  if (vert>height-70 || vert<70){  // if the shape touches on of these sides
    speedY = speedY *-1; // reverse its velocity
    r = random(255); // new random colour
    g = random(255); // new random colour
    b = random(255); // new random colour
   }

   if(keyIsDown(RIGHT_ARROW)){ // if the right arrow button is down
     hoz = hoz +5; // make shape go right
   }

   if(keyIsDown(LEFT_ARROW)){ // if the left arrow button is down
     hoz = hoz -5; // make shape go left
   }
   if(keyIsDown(UP_ARROW)){ // if the up arrow button is down
  vert = vert -5; // make shape go up
    }

    if(keyIsDown(DOWN_ARROW)){ // if the down arrow button is down
      vert = vert + 5; // make shape go down
    }

noStroke() // no lines
fill(r, g, b); // make random colour using r g b varibles
push(); // start area with things in you that you do not want to effect otherthings
translate(hoz, vert); // move horizontaly and vertically
rect(-10, -30, size1, size2); // rectangle that is tall
rect(-30, -10, size2, size1); // rectangle that is wide
pop();  // end area with things in you that you do not want to effect otherthings


}// end of function
function ring() { //function name

    hoz += speedX; //horizontal speed + velocity
    vert += speedY; //vertical speed + velocity


   if (hoz>width-75  || hoz<75  ){ // if the shape touches on of these sides
     speedX = speedX *-1; // reverse its velocity
     r = random(255);// new random colour
     g = random(255);// new random colour
     b = random(255);// new random colour
    }

    if (vert>height-70 || vert<70){ // if the shape touches on of these sides
      speedY = speedY *-1; // reverse its velocity
      r = random(255);// new random colour
      g = random(255);// new random colour
      b = random(255);// new random colour
     }

     if(keyIsDown(RIGHT_ARROW)){ // if the right arrow button is down
  hoz = hoz +5; // make shape go right
     }

     if(keyIsDown(LEFT_ARROW)){ // if the left arrow button is down
  hoz = hoz -5; // make shape go left
  }

  if(keyIsDown(UP_ARROW)){ // if the up arrow button is down
  vert = vert -5; // make shape go up
  }

  if(keyIsDown(DOWN_ARROW)){ // if the down arrow button is down
  vert = vert + 5; // make shape go down
  }

    noStroke() //no lines
    fill(r, g, b); // ring colour
    push(); // start area with things in you that you do not want to effect otherthings
    translate(hoz, vert); // move horizontaly and vertically
    ellipse(0, 0, 40, 40); // outer circle
    fill(mouseX , mouseY, mouseY) // change colour based on mouse location
    ellipse(0, 0, 20, 20); // inner circle
    pop(); // end area with things in you that you do not want to effect otherthings


    }// end of function

    function square() { //function name

        hoz += speedX; //horizontal speed + velocity
        vert += speedY; //vertical speed + velocity

       if (hoz>width-75  || hoz<75  ){ // if the shape touches on of these sides
         speedX = speedX *-1; // reverse its velocity
         r = random(255);// new random colour
         g = random(255);// new random colour
         b = random(255);// new random colour
        }
        else{ //otherwise
          r -= 1; //make colour darker
          g -= 1; //make colour darker
          b -= 1; //make colour darker
          speedX = speedX +0.5 // speed up the shape by 0.50
        }

        if (vert>height-70 || vert<70){ // if the shape touches on of these sides
          speedY = speedY *-1; // reverse its velocity
          r = random(255);// new random colour
          g = random(255);// new random colour
          b = random(255);// new random colour
         }
         else { //if not
           speedY = speedY +0.5; // speed up the shape by 0.5
         }

         if(keyIsDown(RIGHT_ARROW)){// if the right arrow button is down
      hoz = hoz +5; // make shape go right
         }

         if(keyIsDown(LEFT_ARROW)){ // if the left arrow button is down
      hoz = hoz -5; // make shape go left
      }

      if(keyIsDown(UP_ARROW)){ // if the up arrow button is down
      vert = vert -5; // make shape go up
      }

      if(keyIsDown(DOWN_ARROW)){ // if the down arrow button is down
      vert = vert + 5; // make shape go down
      }

        noStroke() // no lines
        fill(r, g, b); // ring colour
        push(); // start area with things in you that you do not want to effect otherthings
        translate(hoz, vert); // move horizontaly and vertically
        rect(-30, -30, 15, 45); // 1 of 4 sides of the shape
        rect(15, -30, 15, 45); // 1 of 4 sides of the shape
        rect(-30, -30, 45, 15); // 1 of 4 sides of the shape
        rect(-30, 15, 60, 15); // 1 of 4 sides of the shape
        pop(); /* end area with things in you that you do not want
        to effect otherthings */

      } // end of function
