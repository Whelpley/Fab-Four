// objects
// methods
var Board = function(){
  this.won? = false;
}

var Cell = function(){
  this.id = null;
  this.column = null;
  this.row = null;
  this.color = null;
}

Cell.prototype.check_win = function () {
  this.check_vertically();
  this.check_horizontally();
};

var check_vertically = function(){
  if (this.column >= 3) {
    if(this.row - 1) {
      if(this.row - 1 )
      this.color =
    }
  }else {
    return false
  }
  // checks vertically
      // For vertical check, if row number is greater than or equal to 3-check, else return false
      // same coloumn, decrease the row number to check below cell.
      // checks belows, if it is the same, then keep checking till the counter 4
      // if below cell is not the same color, pass it to the horizontally checking
}

var check_horizontally = function(){
  // checks horizontally
      // unless column == 0, do left check
      // unless column == 6, do right check
      // define counter and set to 1
      // check the right first if it is same color, then add to the counter and check next box, keep going in that direction until counter is 4 or you reach to the end of the board.When you reach to opposite color, check left
      // same row numbers, to the left decrease column by 1, to go to the right increase the coloumn by 1.
      // check the left and follow above steps...
      // keep the row number same, decrease the coloumn by 1 to check left until you reach to the edge of the board.
}
