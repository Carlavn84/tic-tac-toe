# Tic-Tac-Toe | The Hooks edition!

## Lesson 1

Some suggestions:
- Use text with a very big font-size to create an X and O
- Use a regular <button> (possible wrapped in a Component?) for the start/reset button
- Minimum features:
	- start game / reset game button
	- two players play locally
	- keep track of the turns: player 1 is X, player 2 is O
	- click on cells to "place" an X or O based on whose turn it is
	- only allowed to click on cells that do not have an X or O yet
	- change "turn" after "placing" an X or O
	- detect a winner
	- think about when things should be enabled/disabled based on the game state
- Technical constraints
	- Only use hooks, no Class components allowed!
	- Use multiple components: don't put everything in App (even though you technically could)
	- Each component that needs to be styled should have it's own .css file
	- Only add styles in a .css file that affect elements rendered by that component
- Think about what state you need to keep track of to implement to minimum features
- Think about what component "owns" what piece of the (total game) state  
Use React principle: "lifting state up" (as "high" in the component tree as you can, but not "too high")

- Bonus features:
Ask for the name of player 1 and player 2 before the game has started.
Choose your own spot somewhere to render an <input /> to take their name.

Do not allow the players to change their name while the game is running.
But do allow the players to change their name after the game has finished (either with a winner or a draw).

Use the player names inside of the messages instead of "Player 1" etc.

- More bonus features:

Add a hover effect when you hover over a cell that is not disabled, so the player knows which cell
he will click/change.
Hover effect visuals:
- change the background to a light color (choose whatever you like)
- and show the symbol that will be inserted based on the current player