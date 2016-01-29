var Board = function(){
  this.won? = false;
}

Cell.prototype.check_win = function () {
  this.check_vertically();
  this.check_horizontally();
};


var check_vertically = function(){
  // var my_cell = $(this)
  var counter = 1;
  while (counter < 4) {
    if (this.row > 2) {
      for(var i= 0; i < (this.row - 1) ; i++;){
        if(this.color == (other_cell.color){
          counter += 1;
          return true;
        }
      }
    }else {
      return false // vertically checking returns false
    }
  }
}

//array of all the cell objects with the column number of our current cell
var filter_array = cellArray.filter(function (cell) {
  return this.column === cell.column
});

//on the filter array find the object with row number of our current cell- counter
var other_cell = filter_array.filter(function (cell) {
  if (cell.row === (this.row-counter)) {
    return cell;
  }
}

// checks vertically
    // For vertical check, if row number is greater than or equal to 3-check, else return false
    // same coloumn, decrease the row number to check below cell.
    // checks belows, if it is the same, then keep checking till the counter 4
    // if below cell is not the same color, pass it to the horizontally checking

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
