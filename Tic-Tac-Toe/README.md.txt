tic-tac-toe-1:
	Added players d playerjsx file and making the edit button to write the input into it using handleEditClick and the useState isEditing....and also added edit button to edit and save based on the ternanry operator using the isEditing in the button element..... also added in handleEditClick the state values to update based on the initial state using arrow functions. 

ttt-dataBinding:
Here two way data bindind is done by adding state into it and added handleChange to change the updating text data of the playerName.

ttt-multipleDimList-BoardGame:
Added Gameboard jsx component in that added rows and columns for the game . added the button function handleSelectSquare with the satate values based on the row and column index the values of 'x' are placing.only x is added for all the columns and rows.

ttt-liftingStateUp:
added x and o for the two players based on the button clicks active player handleSelectSquare() in app and calling that function after the clicking button in GameBoard component and also added the active player in the Player component class based on the isActive prop.

ttt-avoidIntersectingState:(Actual liftingStateUp is done here)
added Log.jsx component and in app.jsx  added state gameTurns 83,84,85(depth).total turns are fitted using only one state both player and turns .(but 1 defect is not reassigning the values but players are shuffling but value is not inserting in the col or row.).

(86)implemented code in Log.jsx the turns of the players the log is present inside it the rows and cols of the players who occupies which?
(87) removed activePlayer style state and used a deriveActivePlayer for the unnecessary states.
Added button disabled in GameBoard.jsx based on the playerSymbol condition.

ttt-winningData;
added WINNING_COMBINATION.js in that all the winning combination are included.
removed the initialBoard from the GameBoard and paste it in the App.jsx and added for lop for the combination and also added firstSquare... for the winner for the row based or column based.
and also added who won the msg on the screen.
Added new GameOver.jsx component.94,95,96 at last the logic is placed in afunction and called those functions like derivedGameBoard ,deriveWinner.




