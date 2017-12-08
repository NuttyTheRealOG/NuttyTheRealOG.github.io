What it is and what it does:
This is a generative art web page, what it does is create patters
and colours as the programme runs, and if you want to, you can add 
to it by chaning the colours yourself using mouse button 1, or 
move the shape itself using the arrow keys on your keyboard, the 
only objective of this website is to make small colourful patterns
in a semi retro pixlated style.


Development: 

I Started by making the canvas the required size (594x841). 
Then I created the background, using a for loop to make the background 
blue and yellow lines, and a black rectangle on top of that to make the 
"work space". 
(see dev image image 1 )

 

Next, I had to create my individual shapes, them being a donut shape, 
a cross, and a box with a whole in, and added t there size and colour. 
I used functions to create these shapes. 
(see dev image 2)
 

I started off by just using the cross, and added animation to this shape first, 
I added random movement to begin with as well as making the shape change colour 
on impact with the walls and when I hold down the mouse button. 
(see dev image 3)
 

After I got one shape working, I made a system to random choose a shape 
each time the page is refreshed using a similar system to the random colour, 
but with 3 numbers added together and then divided by, this system caused 
me a lot of problems that I will get to later. 
(see dev image 4)
 

Despite the shape changing, the system was still a little boring, so I decided 
to add a bit more organic motion into my project, for this I made my box 
constantly veer off towards the bottom left corner and pick up momentum for 
every frame that it is not touching a wall of the rectangle, this creates a 
pseudo-gravity effect as well as helps to make each shape different. 
(see dev image 5)
 

Lastly, I added away for user to be able to control the shapes, because while 
I was happy from the art side was concerd I felt that the program was a bit 
empty and slow without any input form the user other than the ability to change 
the shapes colour, so I added controls for the user to be able to move the 
shape using the arrow keys. 
(see dev image 6)
 

 

 

Problems: 

1 big problem I had was trying to get my program to randomly select a shape,
there where multiple factors for this, one of which is that I had my ring 
function inside of the cross function to begin with, and also my code was 
flawed on a fundamental level, as I had 3 numbers combine and then divide by
 3, so it always printed very close to the average, so one shape only every 
really showed up, but with the help of debugging in the console I managed 
to get a more even spread.  
(see problem 1)
  

Another problem I didn’t really solve was that sometimes my shape would 
spawn outside of the black square, eventually using the controls I made
 a work around, so you can just move the shape into the black square 
area, but also the effect eventually grew on me, as it looks like a 
retro style computer glitch with its constant flashing and bouncing 
in the area very quickly.
(see problem 2)

One thing I wanted from the beginning was the have the lines behind 
you change colours (the blue and yellow ones) however I couldn’t 
find a practical way of doing so, as I would have needed those lines  
to be in draw instead of setup, and if I did that, I would need the 
back square to also be in draw otherwise it would print once and 
then be behind the lines,  but doing this would have meant that 
my shapes wouldn’t leave a trail, and would just float around bumping 
into things and changing colors, but not really generating any kind of art.  