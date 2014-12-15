function Game(boardString){
  this.boardString = boardString || this.getRandomBoardString()
  this.boardColumns = []
}
