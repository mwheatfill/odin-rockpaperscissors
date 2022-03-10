# odin-rockpaperscissors
A rock, paper, scissors game that started out console based and now has a simple web ui.

# Live demo site
https://mwheatfill.github.io/odin-rockpaperscissors/

#Learnings and thoughts
* What's the optimal way to handle a tie condition? The project showed an example of a playRound function that accepted the playerSelection and the computerSelection inputs, but I found it easier with my initial thinking to call playRound() with no arguments and collect the input there, recursing until there wasn't a tie.
* The code could be enhanced to validate that the player inputs an appropriate selection and offer a way to cancel out of the game.
* It may be nice to have the playRound function return an object with the results and the selections, so that the round could be summarized each time and pull from the incrementing game stats from the game() loop.
