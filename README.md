# Space shooting game

## ✨ Planning

I was inspired by a childhood memory where my mom loved playing Space Invaders. I wanted to create my own version of the game, with a twist.
Unlike the original Space Invaders, this game features random aliens comming down, and a spaceship can move right/left side by keyboard.
When a user press the spacebar, a bullet fired.
If a bullet fired by the spaceship collides with an alien, the player's score increases.
The game has a one-minute timer, and if time runs out, the game is over. The final score is displayed in the game over message.


## 🛠️ Building 
### 1. Generate start game, start game
Once the page has loaded, the Start Game page will appear. If the user presses the Enter key, the start image will disappear and the game will begin. To achieve this, I created the elements div and h1 and added an if statement to execute the startgame() function when the user presses Enter.

In the startgame() function, I added an isGameover boolean with an initial value of false and called the generateScore(), generateTimer(), and timeReduce() functions. I used setInterval() to store the generateAlien() function, which will execute every 1500 milliseconds, in the generateAlienId variable for reuse.

### 2. Generate score, timer
Every time the user fires at an alien, the score will increase, and the score will be stored and displayed in the score span. Similarly, I created a timer span to update the timer as the game progresses.


### 3. Time reduce
To create a 1-minute timer, I set the time variable to 60 and created two new variables: "mins" and "seconds". This way, I can display the time in the format "Mins : Seconds". To calculate the number of minutes, I divide the time variable by 60 and round down to the nearest integer using the "floor" function. This gives me the value of "mins". To calculate the number of seconds, I use the remainder of the division operation (% operator). 

To display the time with leading zeros, I use an "if" statement. If the value of "mins" is less than 10, I add a "0" in front of it. Similarly, if the value of "seconds" is less than 10, I add a "0" in front of it. This formatted time is then displayed in the timer span.

When the timer reaches 0, the "setInterval" function is cleared and the "gameOver()" function is executed.


### 4. Generate aliens, and move
To generate aliens, I create an image element and set the image source attribute. Since these aliens will be generated randomly, I use the Math.random() method. "Math.random() * 1000" means that the random number generated will be between 0 and 1000. I round this number down using Math.floor.

To move the aliens down, I select all the aliens and loop through each one. I use the getComputedStyle.getPropertyValue("top") method to get the current position of the alien and then set its style.top property. This moves the alien down by adding 20 pixels to its top position. To prevent the aliens from overcrowding the screen, I use an "if" statement. If the alienTop reaches 700, then the alien is removed.


### 5. Move a spaceship
To move the spaceship only using the keyboard, I use the keydown event function. I also add a boolean variable called "isGameover". If the game is over, the keydown event function is exited. Otherwise, the user can move the spaceship.

First, I get the current left position of the spaceship using the getComputedStyle.getPropertyValue("left") method. If the user presses the ArrowLeft key code, the spaceship moves to the left. Similarly, if the user presses the ArrowRight key code, the spaceship moves to the right. If the user presses the spacebar key, the "generateBullet()" function is executed.


### 6. Generate bullet, and movement 

### 7. Bullets and alien 

### 8. Game over


 

## 👾 Debugging


## 📖 Article


