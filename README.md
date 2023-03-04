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

### 4. Generate aliens, and move

### 5. Move a spaceship

### 6. Generate bullet, and movement 

### 7. Bullets and alien 

### 8. Game over


 

## 👾 Debugging


## 📖 Article


