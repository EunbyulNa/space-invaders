# Space shooting game

## ✨ Planning

I was inspired by a childhood memory where my mom loved playing Space Invaders. <br>
I wanted to create my own version of the game, with a twist.<br>
Unlike the original Space Invaders, this game features random aliens comming down, and a spaceship can move right/left side by keyboard.<br>
When a user press the spacebar, a bullet fired. If a bullet fired by the spaceship collides with an alien, the player's score increases.<br>
The game has a one-minute timer, and if time runs out, the game is over. The final score is displayed in the game over message. 


## 🛠️ Building 
### 1. Generate start game, start game
Once the page has loaded, the Start Game page will appear. <br>
If the user presses the Enter key, the start image will disappear and the game will begin. <br>
To achieve this, I created the elements div and h1 and added an if statement to execute the startgame() function when the user presses Enter.<br>
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
To create bullet points, I used an image element and set its source attribute to generate the bullet from the spaceship. I retrieved the spaceship's left-side property value and added it to the bullet's style.left property value. To simulate the effect of the bullet shooting, I used a setInterval function to update the bullet's position every second. I retrieved the bullet's bottom value and updated it every 5 milliseconds.
To prevent the bullet's bottom from moving infinitely, I added an if condition: if the bullet's bottom reaches 700px, then the bullet is removed and the clearInterval of the movebullet function is called.


### 7. Bullets and alien Collision
When the bullet and the alien are in the same position, a collision occurs. Both the bullet and alien disappear, and the score is increased by 1, updating the score span. To retrieve the positions of the bullets and aliens, I used getBoundingClientRect(), which returns the size of an element and its position relative to the viewport. If the alien's bottom is greater than or equal to the bullet's top, the bullet's bottom is greater than or equal to the alien's top, the alien's right value is greater than or equal to the bullet's left, and the bullet's right value is greater than the alien's left, a collision occurs. After the collision, the score is increased by 1, and both the alien and the bullet are removed().


### 8. Game over
When the 1-minute timer finishes, the game over function is executed. In the game over function, the isGameover boolean is set to true, so the user can no longer access the keyboard. The clearInterval of the generateAlien and moveAlien functions is also called. Finally, I created a game over message element that displays the final score.

 
## 👾 Debugging
1. console.log() <br>
Whenever I encounter a bug, I always check what the initial problem is using the console.

2. Tutorial video <br>
While building this game, I referred to a tutorial video, but the code is not the same (I added my own features). As a beginner web developer, I often don't know where to start. Watching a tutorial video is a good way to start, but I need to write code only when I truly understand it. Otherwise, I'll just be copying and pasting!

3. ChatGPT <br>
When debugging code, I use ChatGPT with specific questions. I can't just ask "Can you fix my code?" I need to know what the problem is first and ask a more specific question, such as "I am trying to make a bullet and alien collision part. How can I find the collision position? Here is my code. Can you review and debug it?" Using ChatGPT can be similar to asking someone else on Stack Overflow or asking a mentor. So, I personally think you shouldn't be afraid to use new technology. As long as you understand what the code means, it's fine!


