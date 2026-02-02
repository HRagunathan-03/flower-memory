# Flower Memory Game

This is a flower themed memory game. The player needs to find all of the matching pairs to complete the game. This game is aimed at individuals aged 6 and above. 

The main goal of this game is to be engaging and user friendly. It should also be responsive to the user.

## User Stories

- As someone who works on the computer for several hours a day, I would like to play a calming game when taking a break.

*The main colour chosen for the game is a shade of blue. This colour is neither too bright nor too dark. It allows the user to feel at ease when playing the game as it is a gentle shade.*

- As a parent, I would like a short, straightforward, game that I can play with my child again and again.

*The game consists of six pairs of cards. This ensures that the game doesn't finish too slowly or too quickly. Each game typically lasts a few minutes, which makes it ideal for parents and children alike.  The "Play Again" button allows the game to be easily replayed as necessary.*

- As an elderly individual, I would like to play a simple game that is suitable for people my age.

*Using eye-catching, clear images and large text ensures that this game is also suitable for the elderly. This type of game has existed for many years, and will be intuitive to the older generation.*

## Testing

### Manual Testing

**Procedure:**

- Read the written content carefully to ensure there are no spelling/grammatical errors.
- Click on each card and check that the cards are turning, and the images are loading correctly.
- Click the "New Game" button to check that it works as required.
- Play the game to determine if it is working as it should. Check that the "Moves" and "Matches" are incrementing properly.
- Ensure that the "win" div displays when all the pairs have been found. Check the functionality of the "Play Again" button.

**Results:**

Manually testing the game highlighted the following problems:

- When hovering over the cards, the gap between the cards was not sufficient enough. 

*Increased the gap from 10px to 30px in CSS.*

- When hovering over the cards, the cards were overlapping the "results" div.

*Added margin-bottom of 40px to the "game-area" div in CSS.*

- The "win" div was not visible enough at the end og the game.

*Adjusted the opacity from 0.5 to 0.9 to correct this.*

- The "results" div was not displaying in the center on screens smaller than 480px.

*Added max-width property to the relevant media queries to center the div.*


### Attributions
- <a href="https://www.w3schools.com/">W3 Schools</a>
- <a href="https://www.google.com/search?q=code+along+memory+game+javascript&rlz=1C5MACD_enGB1104GB1105&oq=code+along+memory&gs_lcrp=EgZjaHJvbWUqCAgBEEUYJxg7MgYIABBFGDkyCAgBEEUYJxg7MgcIAhAAGO8FMgoIAxAAGKIEGIkFMgoIBBAAGIAEGKIEMgcIBRAAGO8FMgYIBhBFGDsyBggHEEUYPNIBCTEwMzM3ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:0a1bae46,vid:rcWBLFXH7uA,st:0">Codynn -  YouTube</a>
- <a href="https://stackoverflow.com/">Stack Overflow</a>


#### Photo Attributions

- <a href="https://www.freepik.com/free-photo/purple-tulip-flowers-field_13563030.htm">Image by wirestock on Freepik</a>
- <a href="https://www.freepik.com/free-photo/closeup-shot-beautiful-pink-rose-head_22859669.htm">Image by wirestock on Freepik</a>
- <a href="https://www.freepik.com/free-photo/lovely-white-daffodil-flower_136123968.htm">Image by frimufilms on Freepik</a>
- <a href="https://www.freepik.com/free-photo/sunflower-natural-background-sunflower-blooming-spring_13181356.htm">Image by tawatchai07 on Freepik</a>
- <a href="https://www.freepik.com/free-photo/beautiful-shot-white-purple-flowers-park-sunny-day_10303018.htm">Image by wirestock on Freepik</a>
- <a href="https://www.freepik.com/free-photo/almond-blossom_4288596.htm">Image by efe_madrid on Freepik</a>